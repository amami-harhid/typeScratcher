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

/** Sending and receiving messages */
export interface IEntityBroadCast {

    /**
     * Send a message
     * ---
     * メッセージを送る
     * 
     * @param messageId - Message ID
     * @param args - argument
     */
    send(messageId: string, ...args:unknown[]): void;

    /**
     * Wait until the message has been sent.
     * ---
     * メッセージを送り終わるまで待つ
     * 
     * @param messageId - Message ID
     * @param args - argument
     */
    sendAndWait(messageId: string, ...args:unknown[]): Promise<void>;

    /**
     * message reception event definition.
     * ---
     * メッセージが送られたときのスレッドを定義
     * 
     * @param messageId 
     */
    receiver(messageId: string): EventFunctionSetter;
    
}