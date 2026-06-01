import { playground } from '../../vm/playground';
import { ScratchEvent } from '../../vm/scratchEvent';
import { Entity } from '../entity';
import { EntityBroadCast } from './entityBroadcast';
import { ThreadStatus, ThreadManager, threadManager, ThreadObj, Threads } from '../../controls/threads';
import { KEYBOARD_KEYS } from '../../vm/keyboad';

const DoubleRunning = {
    TRUE: true,
    FALSE: false,
} as const;

/** イベント */
export class EntityEvent{

    private _broadcast: EntityBroadCast;
    protected entity: Entity;
    private threads: ThreadManager;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:Entity){
        this.entity = entity;
        this._broadcast = new EntityBroadCast(entity);
        this.threads = threadManager;
    }

    get Broadcast() {
        return this._broadcast;
    }
    flagPresser() {
        const me = this;
        class FlagPresser {
            static set func(func: CallableFunction) {
                me.whenFlag(func);
            }
        }
        return FlagPresser;
    }
    protected startThreadMessageRecieved( func, entity , doubleRunable=true, ...args) {

    }
    /**
     * 旗が押されたときの動作を定義
     * @param func 
     */
    whenFlag(func: CallableFunction) : void {
        const threadObj = new ThreadObj(this.entity, DoubleRunning.TRUE);
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);
        // 緑の旗がおされたときに「YIELD」にする、スレッドが実行されはじめる
        playground.runtime.scratchEvent.once(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            threadObj.status = ThreadStatus.YIELD;
        })
    }
    keyPresser( key: string | KEYBOARD_KEYS ) {
        const me = this;
        class KeyPresser {
            static set func(func: CallableFunction) {
                if(key.length > 0){
                    me.whenKeyPressed(key, func);

                }
            }
        }
        return KeyPresser;
    }
    
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    whenKeyPressed( key: string|KEYBOARD_KEYS, func: CallableFunction ): void {
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