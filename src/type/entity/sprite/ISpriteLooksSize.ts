import type { TBoundsEx, TScaleArr, TScaleCanEmpty } from "../../common/typeCommon";
import { ISpriteLooksSizeScale } from "./ISpriteLooksSizeScale";

/**
 * Sprite size
 */
export interface ISpriteLooksSize {

    /**
     * Vertical and horizontal scale
     * 
     * ---
     * 縦横の大きさ（%) 
     */
    get scale() : ISpriteLooksSizeScale;

    /**
     * Vertical and horizontal scale
     * 
     * ---
     * 縦横の大きさ（%) 
     */
    set scale(scale:TScaleArr);

    /**
     * Own display dimensions (width and height)
     * 
     * ---
     * 表示されている自身の大きさ(ピクセル)
     * 
     * @returns TBounds
     */
    get drawingSize() : TBoundsEx;
    
    /**
     * Own display dimensions (width and height)
     * 
     * ---
     * 表示されている自身の大きさ(ピクセル)
     */
    set drawingSize( size: TScaleCanEmpty);
}
