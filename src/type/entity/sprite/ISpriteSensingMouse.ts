import type { IEntitySensingMouse } from "../entity/IEntitySensingMouse";
/**
 * Sprite Sensing(調べる)
 */
export interface ISpriteSensingMouse extends IEntitySensingMouse{

    /**
     * Detecting mouse touch
     * 
     * ---
     * マウスが触れているか否かの判定
     * 
     * @returns 
     */
    readonly isTouching: boolean;

    /**
     * Distance to the mouse cursor
     * 
     * ---
     * マウスカーソルまでの距離
     */
    readonly distance : number;
    /**
     * Orientation towards the mouse pointer
     * 
     * ---
     * マウスカーソルへの向き（角度）
     */
    readonly degree: number;
};