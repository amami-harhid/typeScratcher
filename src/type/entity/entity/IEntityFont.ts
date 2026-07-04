import type { IFont } from "../../font";
/**
 * Entity Font(フォント)
 */
export interface IEntityFont {

    /**
     * フォントを追加する
     */
    add(fonts: IFont[]): void;
    /**
     * 追加されている画像名を配列で受け取る
     */
    readonly names: string[];
    /**
     * フォントを取得する
     */
    readonly fonts: IFont[];
};