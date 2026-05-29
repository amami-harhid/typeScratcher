import { Playground, playground } from '../../vm/playground';
import { ScratchEvent } from '../../vm/scratchEvent';
import { Entity } from '../entity';
import { EntityBroadCast } from './entityBroadcast';
import { Element } from '../../gui/element';
import { Utils } from '../../utils/utils';
import { EntityProxyExt } from '../entityProxyExt';
import { Threads, ThreadManager, threadManager } from '../../controls/threads';
import { FunctionChecker } from '../../utils/functionChecker';
import { TThreadObj } from '../../controls/TThreadObj';
/** イベント */
export class EntityEvent{

    private _broadcast: EntityBroadCast;
    private _entity: Entity;
    private threads: ThreadManager;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:Entity){
        this._entity = entity;
        this._broadcast = new EntityBroadCast(entity);
        this.threads = threadManager;
    }

    get Broadcast() {
        return this._broadcast;
    }
    set whenflagger(func: CallableFunction) {
        this.whenFlag(func);
    }
    protected getProxyForHat(){

        const proxy = EntityProxyExt.getProxy(this, _=>{
            throw 'NOT FOUND PROPERTY in TARGET';
        });
        //console.log('proxy.stop_this_script_switch='+proxy.stop_this_script_switch)
        return proxy;
    }
    protected hatProc(func:CallableFunction){
        const me = this._entity;
        const threadId = this._generateUUID();
        const proxy = this.getProxyForHat();
        proxy.threadId = threadId;
        this.startThread(func, proxy);
        return proxy;

    }
    protected _generateUUID () {
        return Utils.generateUUID();
    }
    /**
     * func はGeneratorの前提
     * @param {*} func 
     * @param {Entity} entity 
     * @param {boolean} doubleRunable 
     * @returns 
     */
    protected startThread( func:CallableFunction, entity:Entity , doubleRunable=true, addId = ''): TThreadObj {

        const functionDeclareType = FunctionChecker.getFunctionDeclares(func);
        if( functionDeclareType.isArrow === true ){
            // アロー関数は許可しない
            console.log(func.toString());
            throw "イベントで宣言する関数は アロー関数を使ってはいけません。";
        }
        if( functionDeclareType.isAsync === false){
            // async でないときは許可しない
            console.log(func.toString());
            throw "イベントで宣言する関数は async をつけてください。";
        }
        const _entity = entity;

        // @ts-ignore (proxy properties undefined error)
        const threadId = _entity.threadId;

        const obj:TThreadObj = this.threads.createObj();
        obj['entityId'] = _entity.id + addId;
        obj.threadId = threadId; //this.id;
        obj['entity'] = _entity;
        obj.doubleRunable = doubleRunable;
        if(functionDeclareType.isGenerator){
            const _func = func.bind(_entity)
            const _func2 = _func(_entity);
            const _f = async function* (){
                try{
                    yield *_func2; // generator()
                }catch(e){
                    if(e!==Threads.THROW_STOP_THIS_SCRIPTS){
                        console.log(e);
                    }
                    throw e;
                }
            }
            obj.f = _f();
            
        }else{            
            const _func = func.bind(_entity)
            const f = async function*(){
                try{
                    await _func(_entity);
                }catch(e){
                    if(e!==Threads.THROW_STOP_THIS_SCRIPTS){
                        console.log(e);
                    }
                    throw e;
                }
            }
            obj.f = f();    
        }
        obj.originalF = func;
        this.threads.registThread( obj );
        return obj;
    }
    protected startThreadMessageRecieved( func, entity , doubleRunable=true, ...args) {
        const functionDeclareType = FunctionChecker.getFunctionDeclares(func);
        if( functionDeclareType.isArrow === true ){
            // アロー関数は許可しない
            console.log(func);
            throw "イベントで宣言する関数は アロー関数を使ってはいけません。";
        }
        if( functionDeclareType.isAsync === false){
            // async でないときは許可しない
            console.log(func.toString());
            throw "イベントで宣言する関数は async をつけてください。";
        }

        const _entity = entity;

        // @ts-ignore (proxy properties undefined error)
        const threadId = _entity.threadId;
        const obj = this.threads.createObj();
        obj.entityId = _entity.id;
        obj.threadId = threadId; //this.id;
        obj.entity = _entity;
        obj.doubleRunable = doubleRunable;
        if(functionDeclareType.isGenerator){
            const _func = func.bind(_entity)
            obj.f = _func(...args); // generator()
        }else{
            const _func = func.bind(_entity)
            const f = async function*(){
                await _func(...args);
            }
            obj.f = f();
        }

        this.threads.registThread( obj );
        return obj;
    }
    /**
     * 旗が押されたときの動作を定義
     * @param func 
     */
    whenFlag(func: CallableFunction) : void {
        playground.runtime.scratchEvent.once(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            Playground.addThread(func, this._entity);

        })
        const greenFlag = Element.getGreenFlag();
        const clickFunc = async(e:MouseEvent)=>{
            Playground.addThread(func, this._entity);
            e.stopPropagation();
        }
//        greenFlag.addEventListener('click', clickFunc);
    }
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    whenKeyPressed( key: string, func: CallableFunction ): void {


    }

    whenClicked(func: CallableFunction): void {


    }
    /**
     * 背景が〇〇になったときの動作を定義
     * @param {*} backdropName 
     * @param {*} func 
     */
    whenBackdropSwitches(backdropName: string, func: CallableFunction): void {


    }

}