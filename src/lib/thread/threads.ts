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
    RUNNING: 'RUNNING',
    YIELD: 'YIELD',
    STOP: 'STOP',
    NONE: 'NONE',
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
                threadObj.status = ThreadStatus.STOP;
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
        if( this.intervalId != undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        this.intervalId = setInterval(this.interval, INTERVAL, this);
        this._running = true;

        // 一時停止イベント定義
        const me = this;
        const _scratchEvent = playground.runtime.scratchEvent;
        const _runtime = playground.runtime;
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
//                for(const thread of ThreadBank.threadArr) {
//                    thread.status = ThreadStatus.STOP;
//                }
//                clearInterval(me.intervalId);
//                this.intervalId = undefined;
                // フキダシ、質問欄表示中のときは消す
                QuestionBoxElement.removeAsk();
                // すべてのスレッドを停止する
                console.log('STOP')
                this.stopAllScripts();
                // TODO クローンを消す

            }
        }
        _scratchEvent.on(ScratchEvent.STOP_CLICKED, _stop);
    }
    async interval(me: ThreadManager):Promise<void> {
        const newArr: ThreadObj[] = [];
        if(me._pauser === true) return; // PAUSE中はスレッドを実行しない
        for(const thread of ThreadBank.threadArr){
            //console.log(thread.status)
            if(thread.status == ThreadStatus.YIELD) {
                // 実行待ちのときは スレッドを実行する
                thread.next();
            }
            if(thread.status != ThreadStatus.STOP) {
                // 停止されたスレッド以外を退避する
                newArr.push(thread);
            }
        }
        for(const sprite of playground.getSprites()){
            sprite.update();
        }
        const stage = playground.getStage();
        if(stage){
            stage.update();
        }

        playground.render.renderer.draw();

        //console.log('ThreadBank.threadArr.length=',ThreadBank.threadArr.length, 'newArr.length=',newArr.length)
        if(ThreadBank.threadArr.length > newArr.length) {
            ThreadBank.threadArr = [...newArr];
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
        const stopMark = Element.getControlStopMark();
        stopMark.classList.remove('is-active');
        stopMark.classList.add('is-not-active');
        for(const thread of ThreadBank.threadArr){
            const _proxy = thread.proxy;
            if(_proxy){
                _proxy.setStopThisScriptSwitch(true);
                this.stopSounds(_proxy);
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
    public status: ThreadStatusType = ThreadStatus.NONE;
    private _entity: IEntity;
    private _proxy: IEntityProxy;
    public threadId: string|null = null;
    public entityId: string;;
    // public childObj: ThreadObj|null = null; 
    // public parentObj: TThreadObj|null = null;
    private _doubleRunable: boolean = false;
    private _isStarted: boolean = false;
    constructor(entity:IEntity, doubleRunable=false) {
        super();
        this._entity = entity;
        this.threadId = Utils.generateUUID();
        const proxy = EntityProxyExt.getProxy(entity, _=>{
            throw "NOT FOUND PROPERTY in TARGET";
        });
        proxy.threadId = this.threadId;
        this._proxy = proxy;
        this.entityId = entity.id;
        this._doubleRunable = doubleRunable;
    }
    setFunc<T> (func: CallableFunction, ...args:T[]) {
        const me = this;
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
    public forceExit() {
        this.status = ThreadStatus.STOP;
        this._proxy.Sound.stopImmediately();

    }
    public async next() {
        const me = this;
        me._isStarted = true; // 実行開始済
        me.status = ThreadStatus.RUNNING;
        this._generatorfunc.next().then((value: IteratorResult<any, void>)=>{
            me.done = value.done || false;
            if(me.done === true){
                me.status = ThreadStatus.STOP;
            }else{
                me.status = ThreadStatus.YIELD;
            }
        }).catch(e=>{
            me.status = ThreadStatus.STOP;
            me._proxy?.Sound.stopImmediately();
            if(e==Threads.THROW_FORCE_STOP_THIS_SCRIPTS || e==Threads.THROW_STOP_THIS_SCRIPTS){
                // throwせず
                console.log("next() CATCH", e)
            }else{
                const f= me._originalF;
                console.error(e);
                console.error(f.toString());
                throw e;
            }
        });
    }
}