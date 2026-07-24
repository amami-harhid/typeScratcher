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
    /** color */
    color?: number,
    /** fish eye */
    fisheye?: number,
    /** whirl */
    whirl?: number,
    /** pixelate */
    pixelate?: number,
    /** mosaic */
    mosaic?: number,
    /** brightness */
    brightness?: number,
    /** ghost */
    ghost?: number,
}