/**
 * Threads
 */

import EventEmitter from "events";
import { Element } from "../gui/element";
import { EntityProxyExt } from "../entity/entity/entityProxyExt";
import { FunctionChecker } from "../utils/functionChecker";
import { INTERVAL } from "./interval";
import { playground } from "../vm/playground";
import { QuestionBoxElement } from "../gui/questionBoxElement";
import { ScratchEvent } from "../vm/scratchEvent";
import { Utils } from "../utils/utils";
import type { IEntity } from "../../type/entity/entity";
import type { IEntityProxy } from "../../type/entity/entity/IEntityProxy";


export const ThreadStatus = {
    /** 初期化中 */
    INITIALIZING: 'INITIALIZING',
    /** 待機中 */
    YIELD: 'YIELD',
    /** 実行中 */
    RUNNING: 'RUNNING',
    /** 終了 */
    COMPLETED: 'COMPLETED',
} as const;

type ThreadStatusType = keyof typeof ThreadStatus;

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
    static threadMap: Map<string, ThreadObj> = new Map<string, ThreadObj>();
    static threadArr: ThreadObj[] = [];
    static add(thread: ThreadObj) {
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
    private intervalId!: NodeJS.Timeout | undefined;
    private _pauser:boolean;
    private _running:boolean;
    constructor(){
        this._pauser = false;
        this._running = false;
    }
    add(threadObj: ThreadObj) {
        ThreadBank.add(threadObj);
    }
    removeByEntityId(entityId: string) {
        ThreadBank.removeByEntityId(entityId);
    }
    start() {
        this.intervalStart()
        // 一時停止イベント定義
        const me = this;
        const _scratchEvent = playground.runtime.scratchEvent;
        const _runtime = playground.runtime;
        const _flagClick = () => {
            this._pauser = false;
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
                // TODO クローンを消す

                //me._running = false;
            }
        }
        _scratchEvent.on(ScratchEvent.STOP_CLICKED, _stop);
    }
    intervalStart() : void {
        if( this.intervalId != undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        this.intervalId = setInterval(this.interval, INTERVAL, this);
        this._running = true;
    }
    private _timer(): number {
        return performance.now();
    }
    async interval(me: ThreadManager):Promise<void> {
        //const newArr: ThreadObj[] = [];
        let count = 0;
        let thread_count = 0;
        if(me._pauser === true) return; // PAUSE中はスレッドを実行しない
        for(const thread of ThreadBank.threadArr){
            thread_count+=1;
            if(thread.status == ThreadStatus.YIELD) {
                count+=1;
                // 実行待ちのときは スレッドを実行する
                thread.next();
            }
            //if(thread.status != ThreadStatus.STOP) {
            //    // 停止されたスレッド以外を退避する
            //    newArr.push(thread);
            //}
        }
        //console.log(me._timer());
        //console.log('thread_count=',thread_count,',count=',count);
        for(const sprite of playground.getSprites()){
            sprite.update();
        }
        const stage = playground.getStage();
        if(stage){
            stage.update();
        }

        playground.render.renderer.draw();

        //console.log('ThreadBank.threadArr.length=',ThreadBank.threadArr.length, 'newArr.length=',newArr.length)
        //if(ThreadBank.threadArr.length > newArr.length) {
        //    ThreadBank.threadArr = [...newArr];
        //}
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
        const stopMark = Element.getControlStopMark();
        stopMark.classList.remove('is-active');
        stopMark.classList.add('is-not-active');
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
    stopSounds(proxy:IEntityProxy) {
        const entity = proxy.entity;
        // ステージ音がなっているときは止める
        const sounds = entity.Sound.soundMap;
        const soundKeys = entity.Sound.soundKeys;
        for(const key of soundKeys){
            const sound = sounds[key];
            if(sound.isPlaying === true){
                sound.stopImmediately();
            }
        }
    }
    registThread( thread: ThreadObj ) : void{
        ThreadBank.add(thread);
    }
}
export const threadManager = new ThreadManager();
export class ThreadObj extends EventEmitter{
    private _generatorfunc!: AsyncGenerator<any, void, any>;
    private _originalF!: CallableFunction;
    public done: boolean = false; 
    public status: ThreadStatusType = ThreadStatus.INITIALIZING;
    private _entity: IEntity;
    private _proxy?: IEntityProxy;
    public threadId: string;
    public entityId: string;;
    // public childObj: ThreadObj|null = null; 
    // public parentObj: TThreadObj|null = null;
    private _doubleRunable: boolean = false;
    private _isStarted: boolean = false;
    constructor(entity:IEntity, doubleRunable=false) {
        super();
        this._entity = entity;
        this.threadId = Utils.generateUUID();
        this.genProxy();
        this.entityId = entity.id;
        this._doubleRunable = doubleRunable;
    }
    genProxy() : void {
        const proxy = EntityProxyExt.getProxy(this._entity, _=>{
            throw "NOT FOUND PROPERTY in TARGET";
        });
        proxy.threadId = this.threadId;
        this._proxy = proxy;
    }
    setFunc<T> (func: CallableFunction, ...args:T[]) {
        const me = this;
        me.genProxy();
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
    get entity() {
        return this._entity;
    }
    get proxy() {
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
            }else{
                me.status = ThreadStatus.YIELD;
            }
        }).catch(e=>{
            me.status = ThreadStatus.COMPLETED;
            me._proxy?.Sound.stopImmediately();
            if( e==Threads.THROW_STOP_THIS_SCRIPTS){
                // throwせず
                me._proxy?.setStopThisScriptSwitch(false);// 一度強制スローしたので元に戻す
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