import type { ISprite } from ".";
/** 距離 */
/**
 * スプライト調べる（距離）
 */
export interface ISpriteSensingDistance {

    /**
     * Distance from the mouse cursor
     * 
     * ---
     * マウスカーソルまでの距離
     * 
     * @returns distance
     */
    mousePointer(): number;
    /**
     * Distance to other sprites
     * 
     * ---
     * ターゲットスプライトまでの距離
     * 
     * @param otherSprite 
     * @returns distance
     */
    to(otherSprite:ISprite) : number;
}
