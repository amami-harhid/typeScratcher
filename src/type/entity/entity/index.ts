import { IEntityBroadCast } from "./IEntityBroadcast";
import type { IEntitySound } from "./IEntitySound";
export declare interface IEntity {

    /**
     * エンティティID
     */
    //readonly id: string;
    /**
     * サウンド
     */
    readonly Sound: IEntitySound;

    /**
     * メッセージ送受信
     */
    readonly Broadcast: IEntityBroadCast;
};