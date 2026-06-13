import { EventFunctionSetter } from "./IEntityEvent";
import type { IThreadObj } from "../../engine/thread/threads";
/** メッセージ受信処理 */
export type TBroadcastElementFunc = {
    thread: IThreadObj<any>,
    func: CallableFunction,
}
/** メッセージ受信エレメント  */
export type TBroadcastElement = {
    "messageId": string, 
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
    send(messageId: string, ...args:unknown[]): void;

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
    sendAndWait(messageId: string, ...args:unknown[]): Promise<void>;

    /**
     * メッセージ受信時のイベント定義セッター
     * @param messageId 
     */
    receiver(messageId: string): EventFunctionSetter;
    
}