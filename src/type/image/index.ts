import { ScratchFontFamilyValue } from "../svgText";

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
declare const ImageBrandSymbol: unique symbol;
export type ImageArgStringObject = { [key:string]:string };
export interface SImage{

    // ASTから一発で特定するための型ブランド
    readonly [ImageBrandSymbol]?: "IMAGE_CLASS_BRAND";
    
    /**
     * @param image {ImageArgStringObject}
     */
    new(image:ImageArgStringObject | string):IImage;
    /**
     * 
     * @param image
     * @param attributes 
     */
    createSvgImage(image: ImageArgStringObject, attributes: createSvgImageAttributes):Promise<IImage>;

};
export interface IImage {
    /**
     * name of image
     * 
     * ---
     * イメージ名
     */
    name: string;
}