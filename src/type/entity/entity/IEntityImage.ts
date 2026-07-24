import type { IImage } from "../../image";

/**
 * Entity Image
 */
export interface IEntityImage {

    /**
     * Add images
     * @param images {IImages[]} 
     */
    add(images: IImage[]): void;
    /**
     * Receive the names of the images as an array.
     */
    readonly names: string[];

    /**
     * Receive the images as an array.
     */
    readonly images: IImage[];
};