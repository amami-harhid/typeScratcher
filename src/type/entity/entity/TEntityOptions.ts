import type { TPosition, TScale } from "../../common/typeCommon";

/**
 * EntityOptions
 */
export type TEntityOptions = {
    /** Position */
    position?: TPosition,
    /** Scale */
    scale?: TScale,
    /** direction */
    direction?: number,
    /** image effect */
    effect?:TEntityEffects,
    /** visibility */
    visible?: boolean,

};

export type TEntityEffects = {
    /** 
     * color effect
     * ---
     * 色の効果 
     */
    color?: number,
    /** 
     * fish eye effect
     * ---
     * 魚眼レンズの効果
     */
    fisheye?: number,
    /** 
     * whirl effect
     * ---
     * 渦巻きの効果 
     */
    whirl?: number,
    /** 
     * pixelate effect
     * ---
     * ピクセル効果 
     */
    pixelate?: number,
    /** 
     * mosaic effect
     * ---
     * モザイク効果 
     */
    mosaic?: number,
    /** 
     * brightness effect
     * ---
     * 明るさの効果 
     */
    brightness?: number,
    /** 
     * ghost effect
     * ---
     * 幽霊の効果 
     */
    ghost?: number,
}