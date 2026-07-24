import type { IEntityBroadCast } from "./IEntityBroadcast";
import type { IEntitySound } from "./IEntitySound";
import type { IEntitySpeech } from "./IEntitySpeech";
export declare interface IEntity {

    /**
     * Sending and receiving messages
     */
    readonly Broadcast: IEntityBroadCast;
    /**
     * Sound
     */
    readonly Sound: IEntitySound;
    /**
     * Speech
     */
    readonly Speech: IEntitySpeech;
};