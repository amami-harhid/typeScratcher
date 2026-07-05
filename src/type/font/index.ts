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
export type FontArgStringObject = { [key:string]:string };
export interface SFont{
    /**
     * @param font {FontArgStringObject}
     */
    new(font:FontArgStringObject):IFont;

};
export interface IFont {
    name: string;

    load(): Promise<void>;
}