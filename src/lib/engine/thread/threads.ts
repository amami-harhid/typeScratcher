/**
 * Threads
 */

import EventEmitter from "events";
import { Entity } from "../../entity/entity";
import { EntityProxyExt } from "../../entity/entity/entityProxyExt";
import { EntitySound } from "../../entity/entity/entitySound";
import { FunctionChecker } from "../../utils/functionChecker";
import { INTERVAL } from "./interval";
import { engine, Engine } from "..";
import { QuestionBoxElement } from "../../gui/questionBoxElement";
import { ScratchElement } from "../../gui/scratchElement";
import { ScratchEvent } from "../../engine/scratchEvent";
import { Sound } from "../../sounds";
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
            if(me._running === true) { // pause中でも実行してよいとする
                // フキダシ、質問欄表示中のときは消す
                QuestionBoxElement.removeAsk();
                // すべてのスレッドを停止する
                me.stopAllScripts();
                // クローンを消す
                const allSprites = (engine as Engine).getSprites();
                for(const _sprite of allSprites){
                    if(_sprite.isClone === false){
                        (_sprite.Control as SpriteControl).removeAllClones();
                    }
                }
                SpriteControl.cloneCount=0;

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
        this.intervalId = setInterval(this.interval, INTERVAL, this);
        this._running = true;
    }
    async interval(me: ThreadManager):Promise<void> {
        const threadArr = ThreadBank.threadArr.filter(thread=> thread.status != ThreadStatus.COMPLETED );
        // TODO 処理中に追加されたスレッドが消えてしまう。
        ThreadBank.threadArr = [...threadArr];
        me._interval(me, threadArr);
    }
    async _interval(me: ThreadManager, threadArr: ThreadObj<any>[]):Promise<void> {
        ThreadManager._timer = Math.floor(performance.now());
        if(me._pauser === true) return; // PAUSE中はスレッドを実行しない
        let _running_count= 0;
        for(const thread of threadArr){
            if(thread.status == ThreadStatus.RUNNING) {
                _running_count+=1;
            }
            if(thread.status == ThreadStatus.YIELD) {
                // 実行待ちのときは スレッドを実行する
                thread.next(); // 並列動作させる（意図的に await をつけていない）
            }
        }
        for(const sprite of (engine as Engine).getSprites()){
            sprite.update();
        }
        const stage = (engine as Engine).getStage();
        if(stage){
            stage.update();
        }

        (engine as Engine).render.renderer.draw();

        if(_running_count == 0) {
            me.stopMarkToNotactive();
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
    stopOtherScripts(proxy: IEntityProxy) : void {
        const ownEntityID = proxy.id;
        for(const thread of ThreadBank.threadArr){
            const entityID = thread.entityId;
            if(entityID == ownEntityID){
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
    
    stopAllScripts() : void {
        for(const thread of ThreadBank.threadArr){
            if( thread.status == ThreadStatus.RUNNING || thread.status == ThreadStatus.YIELD){
                // 実行中、実行待ちのスレッドは強制修正する。
                const _proxy = thread.proxy;
                if(_proxy){
                    _proxy.setStopThisScriptSwitch(true);
                    this.stopSounds(_proxy);
                }
            }
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
            const sound = sounds[key] as Sound;
            if(sound.isPlaying === true){
                sound.stopImmediately();
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
    private _entity: IEntity;
    private _proxy: IEntityProxy;
    public threadId: string;
    public entityId: string;;
    // public childObj: ThreadObj|null = null; 
    // public parentObj: TThreadObj|null = null;
    private _doubleRunable: boolean = false;
    private _isStarted: boolean = false;
    private _args: T[];
    constructor(entity:IEntity, doubleRunable=false) {
        super();
        this._entity = entity;
        this.threadId = Utils.generateUUID();
        this.genProxy();
        this.entityId = (entity as Entity).id;
        this._doubleRunable = doubleRunable;
        this._proxy = this.genProxy();
        this._args = [];
    }
    genProxy() : IEntityProxy {
        const proxy = EntityProxyExt.getProxy(this._entity, _=>{
            throw "NOT FOUND PROPERTY in TARGET";
        });
        proxy.threadId = this.threadId;
        return proxy;
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
        if( functionDeclareType.isAsync === false ){
            throw "イベントで宣言する関数は async をつけてください。";
        }
        if(functionDeclareType.isGenerator){
            const _func = func.bind(this._proxy);
            const _func2 = _func(...args);
            const _f = async function* <T>(...args:T[]){
                try{
                    yield *_func2; // generator()
                }catch(e){
                    if(e== Threads.THROW_STOP_THIS_SCRIPTS){
                        return;
                    }                    
                    throw e;
                }
            }
            this._generatorfunc = _f(...args);
        }else{
            // TODO 繰り返し構文の最後に yield を自動追加するようにしたい！
            throw "Generator関数以外はエラーです";

        }

    }
    get entity() : IEntity{
        return this._entity;
    }
    get proxy() : IEntityProxy{
        return this._proxy;
    }
    get originalF() {
        return this._originalF;
    }
    get doubleRunable() {
        return this._doubleRunable;
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
                console.log(e);
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