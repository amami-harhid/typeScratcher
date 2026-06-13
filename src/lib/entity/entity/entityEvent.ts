import { Entity } from '../entity';
import { EntityBroadCast } from './entityBroadcast';
import { engine, Engine } from '../../engine';
import { ScratchEvent } from '../../engine/scratchEvent';
import { ThreadManager, threadManager, ThreadObj } from '../../engine/thread/threads';
import { ThreadStatus } from '../../../type/engine/thread/threads';
import type { IEntityEvent, EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { IEntityBroadCast } from '../../../type/entity/entity/IEntityBroadcast';
import type { IEntity } from '../../../type/entity/entity';
import type { IImage } from '../../../type/image';

/**
 * 二重起動指定
 */
export const DoubleRunning = {
    TRUE: true,
    FALSE: false,
} as const;

/**
 * クリックイベント定義
 */
declare type CLICK_EVENT_FUNCTION = (_counter: number) => Promise<void>;
declare type KEYPRESS_EVENT_ELEMENT = {key: string, threadArr: ThreadObj<any>[]};
export type BACKDROP_EVENT_ELEMENT = {backdropName: string, threadArr: ThreadObj<any>[]};
/** イベント */
export class EntityEvent implements IEntityEvent{
    private _flagPressFuncArray: CallableFunction[] = [];
    private _flagPressEventFuncArray: ThreadObj<any>[] = [];
    private static _keyPressEventFuncArray: KEYPRESS_EVENT_ELEMENT[] = [];
    private static _backdropEventFuncArray: BACKDROP_EVENT_ELEMENT[] = [];
    private static _clickEventFuncArray: CLICK_EVENT_FUNCTION[] = [];

    /** 背景切替イベント配列 */
    public static get backdropEventFuncArray() : BACKDROP_EVENT_ELEMENT[]{
        return EntityEvent._backdropEventFuncArray;
    } 

    private _broadcast: IEntityBroadCast;
    protected entity: IEntity;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._broadcast = new EntityBroadCast(entity);
    }
    /**
     * BroadCast
     */
    get Broadcast() : IEntityBroadCast{
        return this._broadcast;
    }

    /**
     * 旗が押されたときのイベントセッターを返す
     * @returns イベントセッター
     */
    flagPresser() : EventFunctionSetter{
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenFlag(func);
            }
        };
    }
    /**
     * 旗が押されたときの動作を定義
     * @param func 
     */
    private _whenFlag(func: CallableFunction) : void {

        this._flagPressFuncArray.push(func);
        const threadObj = new ThreadObj(this.entity, DoubleRunning.FALSE);
        this._flagPressEventFuncArray.push(threadObj);
        threadManager.registThread(threadObj);
        /* 
        // 緑の旗がおされたときに「YIELD」にする、スレッドが実行されはじめる
        (engine as Engine).runtime.scratchEvent.on(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            threadObj.isStarted = false;
            threadObj.status = ThreadStatus.YIELD;
        })
        */
    }
    async flagPresserKick(): Promise<void> {
        for(const funcIdx in this._flagPressFuncArray) {

            const func = this._flagPressFuncArray[funcIdx];
            const threadObj = this._flagPressEventFuncArray[funcIdx];
            threadObj.setFunc(func);
            threadObj.status = ThreadStatus.YIELD;
        }
        /*
        for(const threadObj of EntityEvent._flagPressEventFuncArray) {
            const func = threadObj.originalF;
            threadObj.setFunc(func);
            // 待機中にする
            threadObj.status = ThreadStatus.YIELD;
        }
         */
    }
    /**
     * キー押下イベントのセッターを返す
     * @returns イベントセッター
     */
    keyPresser( key: string ) :EventFunctionSetter{
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                if(key.length > 0){
                    me._whenKeyPressed(key, func);
                }
            }
        };
    }
    
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    private _whenKeyPressed( key: string, func: CallableFunction ): void {
        const me = this;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        threadObj.entityId += `_keyPressed_${key}`;
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);
        
        const element = this._getKeyPressEventFunc(key);
        element.threadArr.push(threadObj);
        
        (engine as Engine).runtime.scratchEvent.keyClick(key);

    }
    private _getKeyPressEventFunc(key: string):KEYPRESS_EVENT_ELEMENT {
        for(const element of EntityEvent._keyPressEventFuncArray) {
            if(element.key == key) {
                return element;
            }
        }
        const element :KEYPRESS_EVENT_ELEMENT = {
            key: key,
            threadArr: [],
        }
        EntityEvent._keyPressEventFuncArray.push(element);
        return element;
    }
    async keyPresserKick( key: string ) :Promise<void> {
        const element = this._getKeyPressEventFunc(key);
        for(const threadObj of element.threadArr) {
            const func = threadObj.originalF;
            threadObj.setFunc(func);
            // 待機中にする
            threadObj.status = ThreadStatus.YIELD;
        }
    }
    /**
     * クリックイベントのセッターを返す
     * @returns イベントセッター
     */
    clicker() : EventFunctionSetter {
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenClicked(func);
            }
        }
    }
    async clickEventerKick(): Promise<void> {
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        // 緑の旗押されていないときは何もしない。
        if(scratchEvent.running === false) {
            return;
        }
        let _counter = 0;
        for(const eventf of EntityEvent._clickEventFuncArray){
            _counter += 1;
            eventf(_counter); // 意図的にawaitしていない
        }
    }
    private _whenClicked(func: CallableFunction): void {
        const me = this;
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        const eventf: CLICK_EVENT_FUNCTION = async (_counter:number):Promise<void>=>{
            const CLICK_COUNTER = _counter;
            if(scratchEvent.running === false) {
                return;
            }
            const mouseX = (engine as Engine).mouse.x; //e.offsetX;
            const mouseY = (engine as Engine).mouse.y; //e.offsetY;

            /** マウス位置範囲(範囲をすこしだけ広くしておく) */ 
            const _touchRange = { 
                touchWidth : 3, 
                touchHeight : 3,
            };
            // クリックしたポイントにあるDrawableのうち一番前面にあるものを返す。
            // そのポイントにDrawableがないときは Falseが返る。
            // 第五引数を省略することで全ての「表示中Drawable」から探す。
            const _entity = me.entity as Entity;
            const _touchDrawableId = _entity.render.renderer.pick(mouseX, mouseY, _touchRange.touchWidth, _touchRange.touchHeight);
            if(_entity.drawableID == _touchDrawableId){
                threadObj.setFunc(func); // 作り直す
                threadObj.genProxy();
                const proxy = threadObj.proxy;
                if(proxy){
                    proxy.threadCounter = CLICK_COUNTER;
                }
                threadManager.registThread(threadObj);
                threadObj.status = ThreadStatus.YIELD;
            }
        }
        EntityEvent._clickEventFuncArray.push(eventf);
    }
    /**
     * 背景が〇〇になったときのイベントセッターを返す
     * @param backdrop 
     * @returns イベントセッター
     */
    backdropSwitcher(backdrop: IImage) : EventFunctionSetter{
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenBackdropSwitches(backdrop, func);
            }
        }
    }
    /**
     * 背景が〇〇になったときの動作を定義
     * @param {*} backdropName 
     * @param {*} func 
     */
    private _whenBackdropSwitches(backdrop: IImage, func: CallableFunction): void {
        const backdropName = backdrop.name;
        const me = this;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        threadObj.entityId += `_backdrop_${backdropName}`;
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);

        const element = this._getBackdropElement(backdropName);
        element.threadArr.push(threadObj);
        (engine as Engine).runtime.scratchEvent.backdropChangerRegist(backdropName);
    }

    async backdropEventKick(backdropName: string) : Promise<void>{
        const element = this._getBackdropElement(backdropName);
        for(const threadObj of element.threadArr) {
            const f = threadObj.originalF;
            threadObj.setFunc(f); // 再生成
            threadObj.status = ThreadStatus.YIELD; // 待機中
        }
    }

    private _getBackdropElement(backdropName: string) {
        for( const element of EntityEvent._backdropEventFuncArray) {
            if( element.backdropName == backdropName) {
                return element;
            }
        }
        const element: BACKDROP_EVENT_ELEMENT = {
            backdropName: backdropName,
            threadArr: [],
        }
        EntityEvent._backdropEventFuncArray.push(element);
        return element;
    }
}