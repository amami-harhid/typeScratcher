import type { createSvgImageAttributes } from "../../type/font";
import { IImage } from "../image";

export interface SFontImage {

    new (attributes: createSvgImageAttributes): IFontImage;
}

type text = {
    /**
     * text to svg image
     * 
     * ---
     * 文字列をSVGイメージに変換する
     * 
     * @param text 
     */
    textToSvg: (text:string) => Promise<void>
};

export interface IFontImage extends IImage{

    readonly Text: text;

    /**
     * text to svg image
     * 
     * ---
     * 文字列をSVGイメージに変換する
     * 
     * @param text 
     */
    //textToSvg( text: string ) : Promise<void>;

}