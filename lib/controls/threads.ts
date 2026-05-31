/**
 * Threads
 */

import { playground } from "../vm/playground";
import { Entity } from "../entity/entity";
import { TThreadObj } from "./TThreadObj";
import { Utils } from "../utils/utils";
import { EntityProxyExt } from "../entity/entityProxyExt";
import { FunctionChecker } from "../utils/functionChecker";
import EventEmitter from "events";

const INTERVAL = 1000/30;

export enum ThreadStatus {
    RUNNING,
    YIELD,
    STOP,
    NONE,
}

export class Threads {
    static get THROW_STOP_THIS_SCRIPTS(){
        return "throwStopThisScripts";
    } 
    static get THROW_FORCE_STOP_THIS_SCRIPTS(){
        return "throwForceStopThisScripts";
    }  
    static get RUNNING() : ThreadStatus{
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
    private intervalId!: NodeJS.Timeout;
    add(threadObj: ThreadObj) {
        ThreadBank.add(threadObj);
    }
    removeByEntityId(entityId: string) {
        ThreadBank.removeByEntityId(entityId);
    }
    start() {
        if( this.intervalId != undefined) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(this.interval, INTERVAL, this);
    }
    async interval(me: ThreadManager):Promise<void> {
        const newArr: ThreadObj[] = [];
        for(const thread of ThreadBank.threadArr){
            if(thread.status == ThreadStatus.YIELD) {
                thread.next();
            }
            if(thread.status != ThreadStatus.STOP) {
                newArr.push(thread);
            }
        }
        for(const sprite of playground.getSprites()){
            sprite.Properties.update();
        }
        const stage = playground.getStage();
        if(stage){
            stage.Properties.update();
        }

        playground.renderer.renderer.draw();

        if(ThreadBank.threadArr.length > newArr.length) {
            ThreadBank.threadArr.slice(0, ThreadBank.threadArr.length);
            ThreadBank.threadArr.concat(newArr);
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
    public status: ThreadStatus = ThreadStatus.NONE;
    private _entity: Entity|null = null;
    public threadId: string|null = null;
    public entityId: string;;
    // public childObj: ThreadObj|null = null; 
    // public parentObj: TThreadObj|null = null;
    private _doubleRunable: boolean = false;
    private _isStarted: boolean = false;
    constructor(entity:Entity, doubleRunable=false) {
        super();
        this.threadId = Utils.generateUUID();
        const proxy = EntityProxyExt.getProxy(entity, _=>{
            throw "NOT FOUND PROPERTY in TARGET";
        });
        proxy.threadId = this.threadId;
        this._entity = proxy;
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
            const _func = func.bind(this._entity);
            const _func2 = _func(...args);
            const _f = async function* <T>(...args:T[]){
                try{
                    yield *_func2; // generator()
                }catch(e){
                    if(e!== Threads.THROW_STOP_THIS_SCRIPTS){
                        console.log(e);
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
        this._entity?.Sound.stopImmediately();

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
            me._entity?.Sound.stopImmediately();
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