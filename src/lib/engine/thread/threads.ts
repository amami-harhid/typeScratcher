/**
 * Threads
 */

import EventEmitter from "events";
import { engine, Engine } from "..";
import { Entity } from "../../entity/entity";
import { EntityProxyExt } from "../../entity/entity/entityProxyExt";
import { EntitySound } from "../../entity/entity/entitySound";
import { Env } from "../../common/env";
import { FunctionChecker } from "../../utils/functionChecker";
import { Monitors } from "../../entity/monitor/monitors";
import { QuestionBoxElement } from "../../gui/questionBoxElement";
import { Rewriter } from "./rewriter";
import { ScratchElement } from "../../gui/scratchElement";
import { ScratchEvent } from "../../engine/scratchEvent";
import { Sound } from "../../sounds";
import { Sprite } from "../../entity/sprite";
import { SpriteControl } from "../../entity/sprite/spriteControl";
import { Utils } from "../../utils/utils";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntityProxy } from "../../../type/entity/entity/IEntityProxy";
import { ThreadStatus, type IThreadObj, type ThreadStatusType } from "../../../type/engine/thread/threads";

export class Threads {
    static get THROW_STOP_THIS_SCRIPTS(){
        return "throwStopThisScripts";
    } 
    static get THROW_FORCE_STOP_THIS_SCRIPTS(){
        return "throwForceStopThisScripts";
    }  
    static get RUNNING() : ThreadStatusType{
        return ThreadStatus.RUNNING;
    }
    static get YIELD(){
        return 'yield';
    }
    static get STOP(){
        return 'stop';
    }

}
export const thread = new Threads();

class ThreadBank {
    static threadMap: Map<string, ThreadObj<any>> = new Map<string, ThreadObj<any>>();
    static threadArr: ThreadObj<any>[] = [];
    static add(thread: ThreadObj<any>) {
        for(const _thread of ThreadBank.threadArr) {
            if(_thread.threadId == thread.threadId) {
                return;          
            }
        }
        // 未登録の場合のみ登録する
        ThreadBank.threadArr.push(thread);
    }
    static removeByEntityId(entityId: string) {
        for(const threadObj of ThreadBank.threadArr) {
            if(entityId == threadObj.entityId) {
                // 停止状態にするので、自動的に抹消される。
                threadObj.status = ThreadStatus.COMPLETED;
            }
        }
    }
}


export class ThreadManager {
    private static _timer: number = 0;
    static get timer(): number {
        return ThreadManager._timer;
    }
    private intervalId!: NodeJS.Timeout | undefined;
    private _pauser:boolean;
    private _running:boolean;
    constructor(){
        this._pauser = false;
        this._running = false;
    }
    add(threadObj: ThreadObj<any>) {
        ThreadBank.add(threadObj);
    }
    isExist(thread: ThreadObj<any>): boolean {
        for( const _thread of ThreadBank.threadArr) {
            if(_thread.threadId == thread.threadId) {
                console.log('exist thread status = ', _thread.status);
                return true;
            }
        }
        return false;
    }
    removeByEntityId(entityId: string) {
        ThreadBank.removeByEntityId(entityId);
    }
    start() {
        this.intervalStart()
        // 一時停止イベント定義
        const me = this;
        const _scratchEvent = (engine as Engine).runtime.scratchEvent;
        const _runtime = (engine as Engine).runtime;
        const _flagClick = () => {
            // フキダシ、質問欄表示中のときは消す
            QuestionBoxElement.removeAsk();
            this.stopAllScripts();
            this.clearAllScripts();
            this._pauser = false;
            if(_runtime.audioEngine){
                const audioContext = _runtime.audioEngine.audioContext;
                audioContext.resume(); // 一時停止を再開
            }
        }
        _scratchEvent.on(ScratchEvent.GREEN_FLAG_CLICKED, _flagClick);
        const _pause = ()=>{
            me._pauser = true;
            if(_runtime.audioEngine){
                const audioContext = _runtime.audioEngine.audioContext;
                audioContext.suspend(); // 一時停止
            }
        }
        _scratchEvent.on(ScratchEvent.PAUSE_CLICKED, _pause);
        const _restart = () => {
            me._pauser = false;
            if(_runtime.audioEngine){
                const audioContext = _runtime.audioEngine.audioContext;
                audioContext.resume(); // 一時停止を再開
            }
        }
        _scratchEvent.on(ScratchEvent.RESTART_CLICKED, _restart);
        const _stop = () => {

            me._pauser = true;
            if(me._running === true) { // pause中でも実行してよいとする
                // フキダシ、質問欄表示中のときは消す
                QuestionBoxElement.removeAsk();
                // すべてのスレッドを停止する
                me.stopAllScripts();
                // 実行中スレッド数をゼロにする
                (engine as Engine).runtime.scratchEvent.runningThreadCount = 0;
                
                // クローンを消す、スピーチを止める
                const allSprites = (engine as Engine).getSprites();
                for(const _sprite of allSprites){
                    if(_sprite.isClone === false){
                        (_sprite.Control as SpriteControl).removeAllClones();
                    }
                    _sprite.Speech.stopAll();                    
                }
                SpriteControl.cloneCount=0;
                const stage = (engine as Engine).getStage();
                if(stage){
                    stage.Speech.stopAll();
                }
                // 再描画
                (engine as Engine).render.renderer.draw();
            }
        }
        _scratchEvent.on(ScratchEvent.STOP_CLICKED, _stop);
    }
    intervalStart() : void {
        if( this.intervalId != undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        ThreadManager._timer = Math.floor(performance.now());
        this.intervalId = setInterval(this.interval, Math.floor(1000/Env.fps), this);
        this._running = true;
    }
    async interval(me: ThreadManager):Promise<void> {
        const threadArr = ThreadBank.threadArr.filter(thread=> ((thread.entity as Entity).isAlive === true) );
        for(const thread of ThreadBank.threadArr){
            if((thread.entity as Entity).isAlive === false){
                thread.clear();
            }
        }
        // TODO 処理中に追加されたスレッド(例：クローンされたときのスレッド)が消えてしまうときは
        // このあたりを見直すこと！
        console.log('thread数=', threadArr.length);
        ThreadBank.threadArr = [...threadArr];
        me._interval(me, threadArr);
    }
    async _interval(me: ThreadManager, threadArr: ThreadObj<any>[]):Promise<void> {
        ThreadManager._timer = Math.floor(performance.now());
        let _running_count= 0;
        for(const thread of threadArr){
            if(thread.status == ThreadStatus.RUNNING) {
                _running_count+=1; // 実行中スレッドの数
                if(me._pauser === false){
                    // スライド移動のリスナー待ち数
                    const count = (thread.proxy as unknown as  EntityProxyExt).listenerCount(ScratchEvent.SPRITE_GLIDE);
                    if(count > 0){
                        // 待ちがあるとき Emit する
                        (thread.proxy as unknown as  EntityProxyExt).emit(ScratchEvent.SPRITE_GLIDE);
                    }
                }
            }else if(thread.status == ThreadStatus.YIELD) {
                if(thread.isDeadThread === true){
                    thread.status = ThreadStatus.COMPLETED;
                    continue;
                }
                if(me._pauser === false){
                    // 実行待ちのときは スレッドを実行する
                    thread.next(); // 並列動作させる（意図的に await をつけていない）
                }
                _running_count+=1;
            }
        }
        (engine as Engine).runtime.scratchEvent.runningThreadCount = _running_count;
        if(_running_count == 0) {
            // 実行中スレッドがゼロ個の場合は停止ボタンを非活性
            me.stopMarkToNotactive();
        }
        if(me._pauser === true) {
            // 停止中は描画をしない
            return;
        }else{
            for(const sprite of (engine as Engine).getSprites()){
                sprite.update();
            }
            const stage = (engine as Engine).getStage();
            if(stage){
                stage.update();
            }
            Monitors.drawMonitors();
            (engine as Engine).render.renderer.draw();
        }


    }
    stopThisScript(proxy: IEntityProxy) :void {
        const ownEntityID = proxy.id;
        for(const thread of ThreadBank.threadArr){
            const entityID = thread.entityId;
            if(entityID == ownEntityID){
                const _proxy = thread.proxy;
                if(_proxy){
                    if(proxy.threadId == _proxy.threadId){
                        proxy.setStopThisScriptSwitch(true);
                        this.stopSounds(_proxy);
                    }
                }
            }
        }

    }
    /**
     * このメソッドを呼び出したスレッド以外を停止する
     * ただし、停止するスレッドは同じスプライトのものとする
     * 同じスプライトとは、派生したクローンを含める
     * クローンのスレッド内でこのメソッドを呼び出したときは、
     * 親スプライトのスレッドを停止せずそのクローンの他のスクリプトだけを
     * 停止する。
     * @param proxy 
     */
    stopOtherScripts(proxy: IEntityProxy) : void {

        let _cloneEntityIds:string[] = [];
        // スプライトクローンのプロキシか？
        const _entity = proxy as unknown as Entity;
        if(_entity.isSprite === true){
            // クローン配列を取得し エンティティID配列を作成
            for(const _clone of (_entity as Sprite).clones) {
                _cloneEntityIds.push((_clone as Sprite).id);
            }                
        }

        const ownEntityID = proxy.id;
        for(const thread of ThreadBank.threadArr){
            const entityID = thread.entityId;
            if(entityID == ownEntityID || (_cloneEntityIds.includes( entityID ))){
                // 同じエンティティのとき
                const _proxy = thread.proxy;
                if(_proxy){
                    if(proxy.threadId != _proxy.threadId) {
                        _proxy.setStopThisScriptSwitch(true);
                        this.stopSounds(_proxy);
                    }
                }
            }
        }
    }
    clearAllScripts(): void {
        // すべてのスレッドについて終了処理をする
        for(const thread of ThreadBank.threadArr){
            thread.isDeadThread = false; // 停止スレッドを解除
        }

    }
    stopAllScripts() : void {
        // すべてのスレッドについて終了処理をする
        for(const thread of ThreadBank.threadArr){
            thread.isDeadThread = true; // 停止スレッド
            if( thread.status == ThreadStatus.RUNNING || thread.status == ThreadStatus.YIELD){
                const entity = thread.entity as Entity;

                if(entity.isSprite) {
                    const sprite = entity as Sprite;
                    if(sprite.isClone) {
                        // クローンのとき「生死」= 「死亡」とする
                        (thread.entity as Entity).isAlive = false;
                    }
                }
                // 実行中、実行待ちのスレッドは強制修正する。
                const _proxy = thread.proxy;
                if(_proxy){
                    // GLIDE中のときGLIDEを中断させる
                    const proxyExt = _proxy as unknown as EntityProxyExt;
                    if(proxyExt.listenerCount(ScratchEvent.SPRITE_GLIDE_STOP)>0){
                        proxyExt.emit(ScratchEvent.SPRITE_GLIDE_STOP);
                    }
                    // メソッド動作したら例外を起こしてスレッドを止める。
                    _proxy.setStopThisScriptSwitch(true);
                    // 音を止める
                    this.stopSounds(_proxy);
                }
            }
            thread.status = ThreadStatus.COMPLETED;
        }
    }
    stopMarkToNotactive() {
        const stopMark = ScratchElement.getControlStopMark();
        if(stopMark.classList.contains('is-active')) {
            stopMark.classList.remove('is-active');
            stopMark.classList.add('is-not-active');
        }
    }
    stopSounds(proxy:IEntityProxy) {
        const entity = proxy.entity;
        // ステージ音がなっているときは止める
        const sounds = (entity.Sound as EntitySound).soundMap;
        const soundKeys = (entity.Sound as EntitySound).soundKeys;
        for(const key of soundKeys){
            const sound = sounds.get(key) as Sound;
            if(sound == undefined){
                continue;
            }
            const soundPlayer = (entity.Sound as EntitySound).getSoundPlayer(sound.name);
            if(soundPlayer == undefined) continue; // 何もしない
            if(sound.isPlaying(soundPlayer) === true){
                sound.stopImmediately(soundPlayer);
            }
        }
    }
    registThread<T>( thread: ThreadObj<T> ) : void{
        ThreadBank.add(thread);
    }
}
export const threadManager = new ThreadManager();
export class ThreadObj<T> extends EventEmitter implements IThreadObj<any>{
    private _generatorfunc!: AsyncGenerator<any, void, any>;
    private _originalF!: CallableFunction;
    public done: boolean = false; 
    public status: ThreadStatusType = ThreadStatus.INITIALIZING;
    private _entity: IEntity | null;
    private _proxy: IEntityProxy | null;
    public threadId: string;
    public entityId: string;;
    // public childObj: ThreadObj|null = null; 
    // public parentObj: TThreadObj|null = null;
    private _foreverExist: boolean = false;
    private _isStarted: boolean = false;
    private _args: T[];
    private _isDeadThread: boolean;
    constructor(entity:IEntity, foreverExist=false) {
        super();
        this._entity = entity;
        this.threadId = Utils.generateUUID();
        //this.genProxy();
        this.entityId = (entity as Entity).id;
        this._foreverExist = foreverExist;
        this._proxy = this.genProxy();
        this._args = [];
        this._isDeadThread = false;
    }
    clear() {
        // クローンのとき
        if((this.entity as Entity).isSprite && (this.entity as Sprite).isClone) {
            this._entity = null;
        }

    }
    get isDeadThread() : boolean {
        return this._isDeadThread;
    }
    set isDeadThread(isDead: boolean) {
        this._isDeadThread = isDead;
    }
    genProxy() : IEntityProxy {
        if(this._entity) {
            const proxy = EntityProxyExt.getProxy(this._entity, _=>{
                throw "NOT FOUND PROPERTY in TARGET";
            });
            proxy.threadId = this.threadId;
            return proxy;
        }
        throw 'エンティティが空です';
    }
    reset( entity: IEntity, func:CallableFunction): void {
        this._entity = entity;
        this.entityId = (this._entity as Entity).id;
        this._setFunc(func, ...this._args);
    }
    setFunc (func: CallableFunction, ...args:T[]) {
        this._args = args;
        this._setFunc(func, ...args);
    }
    private _setFunc( func: CallableFunction, ...args:T[]) :void {
        const me = this;
        this._proxy = me.genProxy();
        me._isStarted = false;
        this._originalF = func;
        const functionDeclareType = FunctionChecker.getFunctionDeclares(func);
        if( functionDeclareType.isArrow === true ){
            throw "イベントで宣言する関数は アロー関数を使ってはいけません。";
        }
        // 20260628 async function でなくてもOKとした（Rewriter.toGeneratorでasync化するため）
        // if( functionDeclareType.isAsync === false ){
        //     throw "イベントで宣言する関数は async をつけてください。";
        // }
        if(functionDeclareType.isGenerator){
            this._generatorfunc = Rewriter.toGenerator(this.proxy, func, ...args);
        }else{
            // TODO 繰り返し構文の最後に yield を自動追加するようにしたい！
            throw "Generator関数以外はエラーです";

        }
    }
    get entity() : IEntity{
        if(this._entity == null) throw 'エンティティが空です'
        return this._entity;
    }
    get proxy() : IEntityProxy{
        if(this._proxy == null) throw 'プロキシが空です'
        return this._proxy;
    }
    get originalF() {
        return this._originalF;
    }
    get foreverExist() {
        return this._foreverExist;
    }
    protected _generateUUID () {
        return Utils.generateUUID();
    }
    get isStarted() {
        return this._isStarted;
    }
    set isStarted(started: boolean) {
        this._isStarted = started;
    }
    public forceExit() {
        this.status = ThreadStatus.COMPLETED;
        this._proxy?.Sound.stopImmediately();

    }
    public async next() {
        const me = this;
        me._isStarted = true; // 実行開始済
        me.status = ThreadStatus.RUNNING;
        this._generatorfunc.next().then((value: IteratorResult<any, void>)=>{
            if(me._proxy == null) throw 'プロキシが空です'
            me.done = value.done || false;
            if(me.done === true){
                me.status = ThreadStatus.COMPLETED;
                me._proxy.setStopThisScriptSwitch(false); // 再実行時に落ちないようにする
            }else{
                me.status = ThreadStatus.YIELD;
            }

        }).catch(e=>{
            me._proxy?.Sound.stopImmediately();
            me.status = ThreadStatus.COMPLETED;
            if( e==Threads.THROW_STOP_THIS_SCRIPTS){
                me._proxy?.setStopThisScriptSwitch(false);// 一度強制スローしたので元に戻す
                // throwせず
            }else if( e==Threads.THROW_FORCE_STOP_THIS_SCRIPTS){
                // throwせず
            }else{
                const f= me._originalF;
                console.error(e);
                console.error(f.toString());
                throw e;
            }
        });
    }
}