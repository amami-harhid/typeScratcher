import { Entity } from '../entity';
import type { IEntity } from '@Type/entity/IEntity';
import type { IEntityBroadCast } from '@Type/entity/IEntityBroadcast';

/** メッセージ送受信 */
export class EntityBroadCast implements IEntityBroadCast {

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
     * messageId を使い EventEmitter.on を宣言する
     * （他方からemitされたとき受け付け func を実行するため）
     * なお、本メソッドが呼び出される都度、funcを配列に蓄積し、
     * emitされたときは 蓄積したfuncをPromiseとして実行する。
     * 
     * @param messageId 
     * @param func 
     */
    whenBroadcastReceived(messageId:string, func: CallableFunction): void {
        
        //this.entity.$whenBroadcastReceived(messageId, func);
    }
}