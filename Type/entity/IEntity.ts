import type { IRender } from "../render/IRender";
import type { IEntitySound } from "./IEntitySound";
export declare interface IEntity {
    readonly drawableID: number;
    readonly render: IRender;
    readonly id: string;
    readonly Sound: IEntitySound;
};