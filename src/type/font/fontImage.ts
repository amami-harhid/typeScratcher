import type { createSvgImageAttributes } from "../../type/font";
import { IImage } from "../image";

export interface SFontImage {

    new (attributes: createSvgImageAttributes): IFontImage;
}

/** 文字列を操作する */
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

    /**
     * 文字列を操作する
     */
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