import { Playground, playground } from '../../vm/playground';
import { ScratchEvent } from '../../vm/scratchEvent';
import { Entity } from '../entity';
import { EntityBroadCast } from './entityBroadcast';
import { Element } from '../../gui/element';
import { Utils } from '../../utils/utils';
import { EntityProxyExt } from '../entityProxyExt';
import { ThreadStatus, ThreadManager, threadManager, ThreadObj, Threads } from '../../controls/threads';
import { FunctionChecker } from '../../utils/functionChecker';
import { TThreadObj } from '../../controls/TThreadObj';

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
    keyPresser( key: string ) {
        const me = this;
        class KeyPresser {
            static set func(func: CallableFunction) {
                me.whenKeyPressed(key, func);
            }
        }
        return KeyPresser;
    }
    
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    whenKeyPressed( key: string, func: CallableFunction ): void {
        const me = this;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        threadObj.entityId += `_keyPressed_${key}`;
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);
        playground.runtime.on("KEY_PRESSED", function(pressedKey: string){
            if( key == pressedKey ) {
                console.log('threadObj.isStarted=',threadObj.isStarted)
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