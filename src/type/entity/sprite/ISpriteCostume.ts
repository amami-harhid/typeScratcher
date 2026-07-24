import type { IImage } from "../../image";

/** 
 * Sprite Costume 
 */
export interface ISpriteCostume {
    /**
     * Add images
     * @param images 
     */
    add(images: IImage[]) : void;

    /**
     * Names array
     */
    readonly names : string[]

}
