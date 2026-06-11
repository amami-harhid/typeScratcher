import { ScratchFontFamilyValue } from "src/lib/svgText";

export type createSvgImageAttributes = {
    fill?: string,
    stroke?: string,
    stroke_mode?: 'outside'|'inside',
    stroke_width?: number,
    scratch_font_family?: ScratchFontFamilyValue,
    font_family?: string,
    font_size?: number,
    font_weight?: 'normal'|'bold'|'bolder'|'lighter',    
}


/**
 * Image(イメージ)
 */
export type ImageArgStringObject = { [key:string]:string };
export interface SImage{
    /**
     * @param image {ImageArgStringObject}
     */
    new(image:ImageArgStringObject):IImage;
    /**
     * 
     * @param image
     * @param attributes 
     */
    createSvgImage(image: ImageArgStringObject, attributes: createSvgImageAttributes):Promise<IImage>;

};
export interface IImage {
    skinId: number;
    name: string;
    image: string;
    loadCompleted: boolean;
    load(): Promise<void>;
}