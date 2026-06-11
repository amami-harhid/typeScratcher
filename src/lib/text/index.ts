import { FontLoader } from "./fontLoader";
import type { ITextToSvg, ParmFontFace, TextAttributes } from "../../type/text";
import { ImageToBase64Util } from "../utils/base64Util";

const SVG_NS = "http://www.w3.org/2000/svg";

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

export class TextToSvg implements ITextToSvg {
    private _textAttributes: TextAttributes;
    private _debugCanvas:HTMLCanvasElement;
    private _debugCtx?:CanvasRenderingContext2D;
    private _external_fontFamily: ParmFontFace[];
    private _external_fontDatas : {name:string, data: string[] }[];
    private _padding: number;
    private _scratchFontFamily:ScratchFontFamilyValue;
    constructor() {
        //this._textAttributes = {fill:'#000000', font: 'Sans Serif', font_size:80};
        this._textAttributes = {fill:'#000000', font: 'Handwriting', font_size:80};
        this._debugCanvas = document.createElement('canvas');
        const _ctx = this._debugCanvas.getContext('2d',{ willReadFrequently: true });
        if(_ctx) {
            this._debugCtx = _ctx;
        }
        this._external_fontFamily = [];
        this._external_fontDatas = [];
        this._padding = 25;
        this._scratchFontFamily = ScratchFontFamily.SansSerif;
    }

    public set padding(padding:number) {
        this._padding = padding;
    }
    public set scratchFontFamily(fontFamily: ScratchFontFamilyValue) {
        this._scratchFontFamily = fontFamily;
    }
    public async setExternalFontFamily(fontFamily: ParmFontFace[]): Promise<void>{
        if(this._external_fontFamily.length>0){
            this._external_fontFamily.slice(0, this._external_fontFamily.length);
        }
        for(const font of fontFamily) {
            this._external_fontFamily.push(font);
            const data = await this.loadFont(font);
            this._external_fontDatas.push({name: font.font, data: data});
        }
        await this.link();
    }
    public set textAttributes(attr: TextAttributes) {
        if(attr.fill)
            this._textAttributes.fill = attr.fill;
        if(attr.font_size)
            this._textAttributes.font_size = attr.font_size;
        if(attr.font)
            this._textAttributes.font = attr.font;
        this._textAttributes.stroke = (attr.stroke)?attr.stroke:undefined;
        this._textAttributes.stroke_mode = (attr.stroke_mode)?attr.stroke_mode:undefined;
        this._textAttributes.stroke_width = (attr.stroke_width)?attr.stroke_width:undefined;
        if(attr.use){
            this._textAttributes.use = [];
            for(const _use of attr.use){
                this._textAttributes.use.push(_use);
            }
        }
    }

    private async loadFont(font: ParmFontFace): Promise<string[]> {
        const {data} = await FontLoader.fontLoad(font.href, font.font);
        return data;
    }    
    private async link(): Promise<void> {
        if(this._external_fontFamily.length > 0){
            const promiseArr:Promise<FontFace>[] = []
            for(const font of this._external_fontFamily){
                if(font.href){
                    const fontFace = new FontFace(
                        font.font,
                        `url(${font.href})`,
                        font.descriptors
                    );
                    const promise = fontFace.load();
                    promiseArr.push(promise);
                }
            }
            const fontFaces = await Promise.all(promiseArr);
            const scratchFontStyles = document.getElementById('scratch-font-styles');
            if(scratchFontStyles){
                for(const face of fontFaces) {
                    document.fonts.add(face);
                }

            }
        }
    }
    public async createSvgData(inputText: string, textAttr: TextAttributes): Promise<string> {
        this.textAttributes = textAttr;
        const svg = this.createSvg(inputText);
        const serializer = new XMLSerializer();
        const svgText = serializer.serializeToString(svg);
        const blob = new Blob([svgText], { type: "image/svg+xml" });
        const textSvg = await ImageToBase64Util.blobToBase64(blob);
        return textSvg;
    }
    public createSvg(inputText: string) :SVGSVGElement {
        const svg = document.createElementNS(SVG_NS, "svg");
        const mesure = this.mesure(inputText);

        svg.setAttribute("width", `${mesure.w+this._padding*2}`);
        svg.setAttribute("height", `${mesure.h+this._padding*2}`);
        svg.setAttribute("viewBox", `0 0 ${mesure.w+this._padding*2} ${mesure.h+this._padding*2}`);
        if(this._external_fontDatas.length>0){
            const defs = document.createElementNS(SVG_NS, "defs");
            const style =  document.createElementNS(SVG_NS, "style");
            let innerStyle = '';
            for(const fontData of this._external_fontDatas){
                const fontFace = `
                @font-face {
                    font-family: '${fontData.name}';
                    src: url('${fontData.data}');
                }
                `;
                innerStyle += fontFace;
            }
            style.innerHTML = innerStyle;
            defs.appendChild(style);
            svg.appendChild(defs);            
        }

        const text = this.createText(inputText, mesure);
        if( this._scratchFontFamily) {
            text.setAttribute('font-family', this._scratchFontFamily);        
        }
        if(this._textAttributes.use && this._textAttributes.use.length>0){
            const defs = document.createElementNS(SVG_NS, "defs");
            const TextID = 'text0';
            text.setAttribute('id', TextID);

            defs.appendChild(text);
            svg.appendChild(defs);
            for(const use of this._textAttributes.use){
                const _use = document.createElementNS(SVG_NS, "use");
                _use.setAttribute('href', `#${TextID}`);
                _use.setAttribute('x', `${use.x}`);
                _use.setAttribute('y', `${mesure.h + this._padding + use.y}`);
                if(use.fill){
                    _use.setAttribute('fill', `${use.fill}`);
                }
                if(use.stroke){
                    _use.setAttribute('stroke', `${use.stroke}`);
                }
                if(use.stroke_width){
                    _use.setAttribute('stroke-width', `${use.stroke_width}`);
                }
                _use.setAttribute("font-size", `${this._textAttributes.font_size}px`);
                _use.setAttribute("font-family", `"${this._textAttributes.font}", sans-serif`);
                svg.appendChild(_use);
            }
        }else{
            svg.appendChild(text);
        }
        return svg;
    }
    /**
     * テキストエレメントを返す
     * @param textStr 
     * @returns - text element
     */
    private createText(textStr: string, mesure:{w:number,h:number}): SVGTextElement {
        const text = document.createElementNS(SVG_NS, "text");
        if(this._textAttributes.use == undefined || this._textAttributes.use.length == 0){
            // テキストの左下のX座標
            text.setAttribute("x", `${this._padding}`);
            // テキストの左下のY座標
            text.setAttribute("y", `${mesure.h + this._padding}`);
            if(this._textAttributes.fill){
                text.setAttribute("fill", `${this._textAttributes.fill}`);
            }
            text.setAttribute("font-size", `${this._textAttributes.font_size}px`);
            text.setAttribute("font-family", `"${this._textAttributes.font}",sans-serif`);
            if(this._textAttributes.stroke){
                text.setAttribute('stroke', this._textAttributes.stroke);
            }
            if(this._textAttributes.stroke_mode){
                text.setAttribute('stroke-mode', this._textAttributes.stroke_mode);
            }
            if(this._textAttributes.stroke_width){
                text.setAttribute('stroke-width', `${this._textAttributes.stroke_width}` );
            }
        }
        text.textContent = textStr;
        return text;
    }

    /**
     * 文字列の大きさを測定するために Canvasを使っている
     * @param text 
     * @returns 
     */
    private mesure(text:string): {w:number, h:number} {
        const fontFamily  = ((this._textAttributes.font_weight)? this._textAttributes.font_weight: '')
            +`${this._textAttributes.font_size}px ${this._textAttributes.font}, sans-serif`;
        const fontFamilyCtx  = ((this._textAttributes.font_weight)? this._textAttributes.font_weight: '')
            +`${this._textAttributes.font_size}px "${this._textAttributes.font}", sans-serif`;
        this._debugCanvas.style.fontFamily = fontFamily;
        if(this._debugCtx == undefined) throw 'Unable to get ctx';
        this._debugCtx.font = fontFamilyCtx;
        const mesure = this._debugCtx.measureText(text);
        const width = mesure.width;
        const height = mesure.actualBoundingBoxAscent+mesure.actualBoundingBoxDescent 
        return {w:width, h: height};
    }
    
    private static instance: TextToSvg;
    public static getInstance() : TextToSvg {
         if(TextToSvg.instance == undefined ){
            TextToSvg.instance = new TextToSvg();
        }
        return TextToSvg.instance;
    }
}

export const textToSvg:ITextToSvg = TextToSvg.getInstance();