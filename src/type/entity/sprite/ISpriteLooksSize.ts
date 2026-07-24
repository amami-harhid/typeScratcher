import type { TBoundsEx, TScaleArr, TScaleCanEmpty } from "../../common/typeCommon";
import { ISpriteLooksSizeScale } from "./ISpriteLooksSizeScale";

/**
 * Sprite size
 */
export interface ISpriteLooksSize {

    /**
     * Vertical and horizontal scale
     */
    get scale() : ISpriteLooksSizeScale;

    /**
     * Vertical and horizontal scale
     */
    set scale(scale:TScaleArr);

    /**
     * Own display dimensions (width and height)
     * 
     * @returns TBounds
     */
    get drawingSize() : TBoundsEx;
    
    /**
     * Set the display dimensions (width and height)
     */
    set drawingSize( size: TScaleCanEmpty);
}
