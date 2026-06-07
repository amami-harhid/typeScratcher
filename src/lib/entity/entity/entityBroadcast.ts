import { DoubleRunning } from './entityEvent';
import { playground } from '../../vm/playground';
import { threadManager, ThreadObj } from '../../thread/threads';
import type { IEntity } from '../../../type/entity/entity';
import type { EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { IEntityBroadCast, TBroadcastElement, TBroadcastElementFunc } from '../../../type/entity/entity/IEntityBroadcast';
import { ThreadStatus } from '../../../type/thread/threads';
import { Timer } from '../../utils/timer';


/** メッセージ送受信 */
export class EntityBroadCast implements IEntityBroadCast {

    private static _broadcastReceivedFuncArr: TBroadcastElement[] = [];

    protected entity: IEntity;
    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
    }
    /**
     * メッセージを送る
     * @param messageId 
     * @param args 
     */
    broadcast(messageId: string, ...args:any[]) {
        console.log(EntityBroadCast._broadcastReceivedFuncArr);
        const _messageId = this.getMessageId(messageId);
        const element = EntityBroadCast.getBroadcastElement(_messageId);
        console.log('element.funcArr.length=', element.funcArr.length);
        if(element.funcArr.length > 0){
            playground.runtime.scratchEvent.emit(_messageId, ...args);
        }
    }
    /**
     * メッセージを送り終わるまで待つ
     * @param messageId 
     * @param args 
     */
    broadcastAndWait(messageId: string, ...args:any[]): Promise<void>{
        const _messageId = this.getMessageId(messageId);
        return new Promise<void>( async resolve=>{
            const element = EntityBroadCast.getBroadcastElement(_messageId);
            if(element.funcArr.length > 0){
                playground.runtime.scratchEvent.emit(_messageId, ...args);
                for(;;){
                    let _allDone = true;
                    for(const f of element.funcArr){
                        if(f.thread.status != ThreadStatus.COMPLETED){
                            // 1個でもCOMPLETEDでなければ False
                            _allDone = false;
                        }
                    }
                    if(_allDone === true) {
                        resolve();
                        break;
                    }
                    await Timer.wait(0.1/1000);                
                }
            }else{
                // 何もせずに終わる
                resolve();
            }
        });
        
    }

    /**
     * メッセージ受信時のイベント定義セッター
     * @param messageId 
     * @returns 
     */
    broadcasReceiver(messageId: string) : EventFunctionSetter{
        const me = this;
        return class {
            static set func(func: CallableFunction){
                me._whenBroadcastReceived(messageId, func);
            }
        }
    }

    /**
     * メッセージ受信時のイベント定義
     * messageId を使い EventEmitter.on を宣言する
     * （他方からemitされたとき受け付け func を実行するため）
     * なお、本メソッドが呼び出される都度、funcを配列に蓄積し、
     * emitされたときは 蓄積したfuncをPromiseとして実行する。
     * 
     * @param messageId 
     * @param func 
     */
    private _whenBroadcastReceived(messageId:string, func: CallableFunction): void {
        const me = this;
        const _messageId = this.getMessageId(messageId);
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);

        // 静的配列へ{メッセージID, イベント処理配列 } を格納
        const element = EntityBroadCast.getBroadcastElement(_messageId);
        const elementFunc: TBroadcastElementFunc = {
            thread: threadObj,
            func: func,
        }
        element.funcArr.push(elementFunc);
        const scratchEvent = playground.runtime.scratchEvent;
        scratchEvent.messageReceiverRegist(_messageId);
    }
    private getMessageId(messageId: string): string {
        return `message_${messageId}`;
    }
    public broadcastReceivedKick(messageId: string) :void {
        const element = EntityBroadCast.getBroadcastElement(messageId);
        for(const elementFunc of element.funcArr){
            const threadObj = elementFunc.thread;
            // ジェネレーター再設定
            threadObj.setFunc(elementFunc.func);
            // 待機中にする
            threadObj.status = ThreadStatus.YIELD;
        }
    }

    private static getBroadcastElement(messageId: string):TBroadcastElement{
        const arr = EntityBroadCast._broadcastReceivedFuncArr;
        for(const elem of arr){
            if(elem.messageId == messageId ) {
                return elem;
            }
        }
        const element:TBroadcastElement = {
            messageId: messageId,
            funcArr: [],
        }
        EntityBroadCast._broadcastReceivedFuncArr.push(element);
        return element;
    }
}