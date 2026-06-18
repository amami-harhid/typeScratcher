import type { IImage } from "../../image";

/** コスチューム */
export interface ISpriteCostume {
    /**
     * 画像を追加
     * @param images 
     */
    add(images: IImage[]) : void;

    /**
     * コスチューム名 配列
     */
    readonly names : string[]

}
