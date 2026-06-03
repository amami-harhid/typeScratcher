import { playground } from '@Lib/vm/playground';
import { ScratchEvent } from '@Lib/vm/scratchEvent';
import { Entity } from '@Lib/entity/entity';
import { EntityBroadCast } from '@Lib/entity/entity/entityBroadcast';
import { ThreadStatus, ThreadManager, threadManager, ThreadObj, Threads } from '@Lib/controls/threads';
import { KEYBOARD_KEYS } from '@Lib/vm/keyboad';
import type { IEntityEvent } from '@Type/entity/IEntityEvent';
import type { IEntityBroadCast } from '@Type/entity/IEntityBroadcast';
import type { IEntity } from '@Type/entity/IEntity';

/**
 * 二重起動指定
 */
const DoubleRunning = {
    TRUE: true,
    FALSE: false,
} as const;

/** イベント */
export class EntityEvent implements IEntityEvent{

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
    /**
     * 旗が押されたときのイベントセッターを返す
     * @returns イベントセッター
     */
    flagPresser() {
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenFlag(func);
            }
        }
    }
    protected startThreadMessageRecieved( func:CallableFunction, entity:IEntity , doubleRunable=true, ...args: any[]) {

    }
    /**
     * 旗が押されたときの動作を定義
     * @param func 
     */
    private _whenFlag(func: CallableFunction) : void {
        const threadObj = new ThreadObj(this.entity, DoubleRunning.TRUE);
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);
        // 緑の旗がおされたときに「YIELD」にする、スレッドが実行されはじめる
        playground.runtime.scratchEvent.once(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            threadObj.status = ThreadStatus.YIELD;
        })
    }
    /**
     * キー押下イベントのセッターを返す
     * @returns イベントセッター
     */
    keyPresser( key: string | KEYBOARD_KEYS ) {
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                if(key.length > 0){
                    me._whenKeyPressed(key, func);
                }
            }
        }
    }
    
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    private _whenKeyPressed( key: string|KEYBOARD_KEYS, func: CallableFunction ): void {
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
    clicker() {
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenClicked(func);
            }
        }
    }

    private _whenClicked(func: CallableFunction): void {


    }
    /**
     * 背景が〇〇になったときのイベントセッターを返す
     * @param backdropName 
     * @returns イベントセッター
     */
    backdropSwitcher(backdropName: string) {
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