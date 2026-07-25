import type { TPositionArray } from "../../common/typeCommon";

/**
 * Motion of positioning
 */
export interface ISpriteMotionPosition {
    /** 
     * X coordinate
     * 
     * ---
     * X 座標
     */
    get x() : number;

    /** 
     * Y coordinate
     * 
     * ---
     * Y 座標
     */
    get y() : number;

    /** 
     * X,Y coordinate
     * 
     * ---
     * X,Y 座標
     */
    get xy() : TPositionArray;

    /** 
     * X coordinate
     * 
     * ---
     * X 座標
     */
    set x(x: number);

    /** 
     * Y coordinate
     * 
     * ---
     * Y 座標
     */
    set y(y: number);

    /** 
     * X,Y coordinate
     * 
     * ---
     * X,Y 座標
     */
    set xy( xy: TPositionArray);
};