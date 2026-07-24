import type { TPositionArray } from "../../common/typeCommon";

/**
 * Motion of positioning
 */
export interface ISpriteMotionPosition {
    /** 
     * X coordinate
     */
    get x() : number;
    /** 
     * Y coordinate
     */
    get y() : number;
    /** 
     * X,Y coordinate
     */
    get xy() : TPositionArray;
    /** 
     * X coordinate
     */
    set x(x: number);
    /** 
     * Y coordinate
     */
    set y(y: number);
    /** 
     * X,Y coordinate
     */
    set xy( xy: TPositionArray);
};