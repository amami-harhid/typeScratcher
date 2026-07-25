import type { IFont } from "../../font";

// 未使用のはず。あとで消す。

/**
 * Entity Font
 */
export interface IEntityFont {

    /**
     * Add font datas
     * ---
     * フォントデータを
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