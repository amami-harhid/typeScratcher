import type { createSvgImageAttributes } from "../../type/font";
import { IImage } from "../image";

export interface SFontImage {

    new (attributes: createSvgImageAttributes): IFontImage;
}

export interface IFontImage extends IImage{

    textToSvg( text: string ) : Promise<void>;

}