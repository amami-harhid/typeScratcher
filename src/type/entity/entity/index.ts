import type { IEntityBroadCast } from "./IEntityBroadcast";
import type { IEntitySound } from "./IEntitySound";
import type { IEntitySpeech } from "./IEntitySpeech";
export declare interface IEntity {

    /**
     * messages
     * ---
     * メッセージ操作
     */
    readonly Broadcast: IEntityBroadCast;
    /**
     * Sound
     * ---
     * サウンド操作
     */
    readonly Sound: IEntitySound;
    /**
     * Speech
     * ---
     * スピーチ操作
     */
    readonly Speech: IEntitySpeech;
};