import type { IImage } from "../../image";

/**
 * Image
 * ---
 * イメージに関する操作
 */
export interface IEntityImage {

    /**
     * Add images
     * ---
     * イメージデータ配列を追加する
     * 
     * @param images {IImages[]} 
     */
    add(images: IImage[]): void;

    /**
     * The array of names.
     * ---
     * イメージデータの名前を配列で取得する
     */
    readonly names: string[];

    /**
     * The array of images.
     * ---
     * イメージ配列を取得する
     */
    readonly images: IImage[];
};