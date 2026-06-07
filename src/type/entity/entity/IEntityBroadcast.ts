import { IEntity } from ".";
import { EventFunctionSetter } from "./IEntityEvent";

/** メッセージ受信処理 */
export type TBroadcastElementFunc = {
    func: CallableFunction,
    threadId: string,
    target: IEntity,
}
/** メッセージ受信エレメント  */
export type TBroadcastElement = {
    "eventId": string, 
    "funcArr": TBroadcastElementFunc[],
}

/** メッセージ送受信 */
export interface IEntityBroadCast {

    /**
     * メッセージを送る
     * @param messageId - メッセージID
     * @param args - 引数
     * ```ts
     *  const count: number = 100;
     *  const mouseDown: boolean = false;
     *  this.Event.broadcast('Start', count, mouseDown );
     * ```
     */
    broadcast(messageId: string, ...args:unknown[]): void;

    /**
     * メッセージを送り終わるまで待つ
     * @param messageId - メッセージID
     * @param args - 引数
     * ```ts
     *  const count: number = 100;
     *  const mouseDown: boolean = false;
     *  await this.Event.broadcastAndWait('Start', count, mouseDown );
     * ```
     */
    broadcastAndWait(messageId: string, ...args:unknown[]): Promise<void>;

    /**
     * メッセージ受信時のイベント定義セッター
     * @param messageId 
     */
    broadcasReceiver(messageId: string): EventFunctionSetter;

}