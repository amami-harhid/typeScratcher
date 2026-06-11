export const ScratchFontFamily = {
    SansSerif: 'Sans Serif',
    Serif: 'Serif',
    Handwriting: 'Handwriting',
    Marker: 'Marker',
    Curly: 'Curly',
    Pixel: 'Pixel',
    Scratch: 'Scratch',
} as const 
export type ScratchFontFamilyValue = typeof ScratchFontFamily[keyof typeof ScratchFontFamily];

/** SVG Text 属性 */
export type TextAttributes = {
    fill?: string,
    stroke?: string,
    stroke_mode?: 'outside'|'inside',
    stroke_width?: number,
    font?: string,
    font_size?: number,
    font_weight?: 'normal'|'bold'|'bolder'|'lighter',
    use?: {x:number,y:number,fill:string,stroke?:string,stroke_width?:number}[],
};

/** FontFace */
export type ParmFontFace = {
    font: string,
    href: string,
    descriptors: FontFaceDescriptors,
}

export interface ITextToSvg {
    /** 余白 */
    //set padding( padding: number);
    /** FontFamilyを設定 */
    //setExternalFontFamily(fontFamily: ParmFontFace[]):Promise<void>;
    /** 文字属性 */
    //set textAttributes(attr: TextAttributes);
    /** ScratchFontFamily */
    set scratchFontFamily(fontFamily: ScratchFontFamilyValue);
    /** SVGデータ作成 */
    createSvgData(inputText: string, textAttr: TextAttributes) :Promise<string>;

}