import type { createSvgImageAttributes } from "../../type/font";
import { IImage } from "../image";

/** FontImage Attributes */
export type FontImageAttribute = {
    text: string,
    attributes: createSvgImageAttributes,
}

declare const FontImageBrandSymbol: unique symbol;

/** FontImage 引数 */
export type FontImageParams = { [key:string]: FontImageAttribute }

export interface SFontImage {
    // ASTから一発で特定するための型ブランド
    readonly [FontImageBrandSymbol]?: "FontImage_CLASS_BRAND";

    new (attributes: FontImageParams | FontImageAttribute ): IFontImage;
}

export interface IFontImage extends IImage{

    /**
     * change text 
     * 
     * ---
     * 文字列をSVGイメージに変換する
     * 
     * @param text 
     */
    changeText( text: string ) : Promise<void>;
}