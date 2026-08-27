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
declare const FontBrandSymbol: unique symbol;
export type FontArgStringObject = { [key:string]:string };
export interface SFont{
    // ASTから一発で特定するための型ブランド
    readonly [FontBrandSymbol]?: "Font_CLASS_BRAND";
    
    /**
     * @param font {FontArgStringObject}
     */
    new(font:FontArgStringObject | string ):IFont;

};
export interface IFont {
    name: string;

    load(): Promise<void>;
}