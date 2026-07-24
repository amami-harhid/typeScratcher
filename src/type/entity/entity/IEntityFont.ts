import type { IFont } from "../../font";
/**
 * Entity Font
 */
export interface IEntityFont {

    /**
     * Add font datas
     */
    add(fonts: IFont[]): void;
    /**
     * Receive the names of the added images as an array.
     */
    readonly names: string[];
    /**
     * Get the font datas
     */
    readonly fonts: IFont[];
};