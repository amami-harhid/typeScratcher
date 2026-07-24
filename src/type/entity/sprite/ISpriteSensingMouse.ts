import type { IEntitySensingMouse } from "../entity/IEntitySensingMouse";
/**
 * Sprite Sensing(調べる)
 */
export interface ISpriteSensingMouse extends IEntitySensingMouse{

    /**
     * Detecting mouse touch
     * 
     * @returns 
     */
    readonly isTouching: boolean;

    /**
     * Distance to the mouse cursor
     */
    readonly distance : number;
    /**
     * Orientation towards the mouse pointer
     */
    readonly degree: number;
};