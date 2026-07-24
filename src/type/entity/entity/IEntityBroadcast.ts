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
     * @param messageId - Message ID
     * @param args - argument
     */
    send(messageId: string, ...args:unknown[]): void;

    /**
     * Wait until the message has been sent.
     * @param messageId - Message ID
     * @param args - argument
     */
    sendAndWait(messageId: string, ...args:unknown[]): Promise<void>;

    /**
     * message reception event definition
     * @param messageId 
     */
    receiver(messageId: string): EventFunctionSetter;
    
}