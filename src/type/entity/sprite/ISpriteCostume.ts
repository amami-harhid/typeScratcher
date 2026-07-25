import type { IImage } from "../../image";

/** 
 * Sprite Costume 
 */
export interface ISpriteCostume {
    /**
     * Add images
     * 
     * ---
     * イメージ配列をスプライトへ追加する
     * 
     * @param images 
     */
    add(images: IImage[]) : void;

    /**
     * Names array
     * 
     * ---
     * イメージの名前の配列
     */
    readonly names : string[]

}
