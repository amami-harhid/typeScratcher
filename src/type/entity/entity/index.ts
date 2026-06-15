import type { IEntityBroadCast } from "./IEntityBroadcast";
import type { IEntitySound } from "./IEntitySound";
import type { IEntitySpeech } from "./IEntitySpeech";
export declare interface IEntity {

    /**
     * メッセージ送受信
     */
    readonly Broadcast: IEntityBroadCast;
    /**
     * サウンド
     */
    readonly Sound: IEntitySound;
    /**
     * スピーチ
     */
    readonly Speech: IEntitySpeech;
};