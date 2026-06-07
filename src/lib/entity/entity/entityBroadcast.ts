import { DoubleRunning } from './entityEvent';
import { playground } from '../../vm/playground';
import { threadManager, ThreadObj } from '../../thread/threads';
import type { IEntity } from '../../../type/entity/entity';
import type { EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { IEntityBroadCast, TBroadcastElement, TBroadcastElementFunc } from '../../../type/entity/entity/IEntityBroadcast';


/** メッセージ送受信 */
export class EntityBroadCast implements IEntityBroadCast {

    private static _broadcastReceivedFuncArr: TBroadcastElement[] = [];

    protected entity: IEntity;
    private _modules: Map<string, Promise<void>>;
    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._modules = new Map<string,Promise<void>>();
    }
    /**
     * メッセージを送る
     * @param messageId 
     * @param args 
     */
    broadcast(messageId: string, ...args:any[]) {

        //this.entity.$broadcast(messageId, ...args);
    }
    /**
     * メッセージを送り終わるまで待つ
     * @param messageId 
     * @param args 
     */
    broadcastAndWait(messageId: string, ...args:any[]): Promise<void>{
        const eventId = `message_${messageId}`;
        return new Promise<void>(resolve=>{
            
        });
        //await this.entity.$broadcastAndWait(messageId, ...args);
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
        const eventId = `message_${messageId}`;
        const threadObj = new ThreadObj(me.entity, DoubleRunning.FALSE);
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);

        // 静的配列へ{メッセージID, イベント処理配列 } を格納
        // 

    }
}