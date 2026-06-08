import type { TMouse } from "../../mouse";
import type { IRender } from "../../render/IRender";
import type { IEntityImage } from "./IEntityImage";
import type { IEntitySound } from "./IEntitySound";
export declare interface IEntity {

    readonly drawableID: number;
    readonly render: IRender;
    readonly id: string;
    readonly Image: IEntityImage;
    readonly Sound: IEntitySound;
    readonly Mouse: TMouse;
    /** スプライトであることの判定 */
    readonly isSprite: boolean;
};