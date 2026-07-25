import type { createSvgImageAttributes } from "../../type/font";
import { IImage } from "../image";

export interface SFontImage {

    new (attributes: createSvgImageAttributes): IFontImage;
}

export interface IFontImage extends IImage{

    /**
     * text to svg image
     * 
     * ---
     * 文字列をSVGイメージに変換する
     * 
     * @param text 
     */
    textToSvg( text: string ) : Promise<void>;

}