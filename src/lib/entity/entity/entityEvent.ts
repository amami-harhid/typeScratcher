import { playground } from '../../engine/playground';
import { ScratchEvent } from '../../engine/scratchEvent';
import { EntityBroadCast } from './entityBroadcast';
import { ThreadManager, threadManager, ThreadObj } from '../../engine/thread/threads';
import { ThreadStatus } from '../../../type/engine/thread/threads';
import type { IEntityEvent, EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { IEntityBroadCast } from '../../../type/entity/entity/IEntityBroadcast';
import type { IEntity } from '../../../type/entity/entity';
import { Entity } from '.';

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

/** イベント */
export class EntityEvent implements IEntityEvent{
    static eventFuncArray: CLICK_EVENT_FUNCTION[] = [];
    static clickFirstRegist: boolean = false;
    private _broadcast: IEntityBroadCast;
    protected entity: IEntity;
    private threads: ThreadManager;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._broadcast = new EntityBroadCast(entity);
        this.threads = threadManager;
    }
    /**
     * BroadCast
     */
    get Broadcast() : IEntityBroadCast{
        return this._broadcast;
    }
    protected startThreadMessageRecieved( func:CallableFunction, entity:IEntity , doubleRunable=true, ...args: any[]) {

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

        const threadObj = new ThreadObj(this.entity, DoubleRunning.FALSE);
        threadManager.registThread(threadObj);
        // 緑の旗がおされたときに「YIELD」にする、スレッドが実行されはじめる
        playground.runtime.scratchEvent.on(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            threadObj.setFunc(func); // 旗クリックされたときに作り直す
            threadObj.isStarted = false;
            threadObj.status = ThreadStatus.YIELD;
        })
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
        playground.runtime.on("KEY_PRESSED", function(pressedKey: string){
            let _key;
            if(key.length == 1) {
                _key = key.toUpperCase();
            }else{
                _key = key; 
            }
            if( _key == pressedKey ) {
                console.log("KEY_PRESSED =[", pressedKey, "], key=[", _key, "]")
                if(threadObj.isStarted) {
                    // スレッドが実行中に再度キーが押されたとき
                    // 音がなっていたら止め、最初からやり直す。
                    me.entity.Sound.stopImmediately();
                    threadObj.setFunc(func); // 作り直す
                }
                threadObj.status = ThreadStatus.YIELD;
            }
        });

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
    async clickEventer(): Promise<void> {
        const scratchEvent = playground.runtime.scratchEvent;
        // 緑の旗押されていないときは何もしない。
        if(scratchEvent.running === false) {
            return;
        }
        let _counter = 0;
        for(const eventf of EntityEvent.eventFuncArray){
            _counter += 1;
            eventf(_counter); // 意図的にawaitしていない
        }
    }
    private _whenClicked(func: CallableFunction): void {
        const me = this;
        const scratchEvent = playground.runtime.scratchEvent;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        const eventf: CLICK_EVENT_FUNCTION = async (_counter:number):Promise<void>=>{
            const CLICK_COUNTER = _counter;
            if(scratchEvent.running === false) {
                return;
            }
            const mouseX = playground.mouse.x; //e.offsetX;
            const mouseY = playground.mouse.y; //e.offsetY;

            /** マウス位置範囲(範囲をすこしだけ広くしておく) */ 
            const _touchRange = { 
                touchWidth : 3, 
                touchHeight : 3,
            };
            // クリックしたポイントにあるDrawableのうち一番前面にあるものを返す。
            // そのポイントにDrawableがないときは Falseが返る。
            // 第五引数を省略することで全ての「表示中Drawable」から探す。
            const _touchDrawableId = me.entity.render.renderer.pick(mouseX, mouseY, _touchRange.touchWidth, _touchRange.touchHeight);
            if(me.entity.drawableID == _touchDrawableId){
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
        EntityEvent.eventFuncArray.push(eventf);
        // Canvasがクリックされたときに、配列にためたイベントを実行する
        // TODO onで待つコード
        // スプライトが多数あるとエラーになるのでは？
        // システムで１個だけにしたいので playground内で待ち
        // 
        //scratchEvent.on(ScratchEvent.CANVAS_CLICKED, this.clickEventer);
    }
    /**
     * 背景が〇〇になったときのイベントセッターを返す
     * @param backdropName 
     * @returns イベントセッター
     */
    backdropSwitcher(backdropName: string) : EventFunctionSetter{
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenBackdropSwitches(backdropName, func);
            }
        }
    }
    /**
     * 背景が〇〇になったときの動作を定義
     * @param {*} backdropName 
     * @param {*} func 
     */
    private _whenBackdropSwitches(backdropName: string, func: CallableFunction): void {


    }

}