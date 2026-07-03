import { FontLoader } from "./fontLoader";
import { ScratchFontFamily } from "../../type/svgText";
import { ImageToBase64Util } from "../utils/base64Util";
import type { ITextToSvg, ParmFontFace, TextAttributes, ScratchFontFamilyValue } from "../../type/svgText";

const SVG_NS = "http://www.w3.org/2000/svg";
const MIMETYPE_SvgImage = "image/svg+xml";
const SCRATCH_FONT_STYPE_ID = "scratch-font-styles";
const SANS_SERIF = "sans-serif";
const WIDTH = "width";
const HEIGHT = "height";
const VIEWBOX = "viewBox";
const FILL = "fill";
const FONT_SIZE = "font-size";
const FONT_FAMILY = "font-family";
const STROKE = "stroke";
const STROKE_MODE = "stroke-mode";
const STROKE_WIDTH = "stroke-width";
const STYLE = "style";
const DEFS = "defs";
const USE = "use";

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
        this._padding = 10; // ピクセル
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
            const scratchFontStyles = document.getElementById(SCRATCH_FONT_STYPE_ID);
            if(scratchFontStyles){
                for(const face of fontFaces) {
                    document.fonts.add(face);
                }

            }
        }
    }
    /**
     * SVGデータを作成する( Base64 )
     * @param inputText 
     * @param textAttr 
     * @returns 
     */
    public async createSvgData(inputText: string, textAttr: TextAttributes): Promise<string> {
        this.textAttributes = textAttr;
        const svg = this.createSvg(inputText);
        const serializer = new XMLSerializer();
        const svgText = serializer.serializeToString(svg);
        const blob = new Blob([svgText], { type: MIMETYPE_SvgImage });
        const textSvg = await ImageToBase64Util.blobToBase64(blob);
        return textSvg;
    }
    private createSvg(inputText: string) :SVGSVGElement {
        const svg = document.createElementNS(SVG_NS, "svg");
        const mesure = this.mesure(inputText);

        svg.setAttribute(WIDTH, `${mesure.w+this._padding*2}`);
        svg.setAttribute(HEIGHT, `${mesure.h+this._padding*2}`);
        svg.setAttribute(VIEWBOX, `0 0 ${mesure.w+this._padding*2} ${mesure.h+this._padding*2}`);
        if(this._external_fontDatas.length>0){
            const defs = document.createElementNS(SVG_NS, DEFS);
            const style =  document.createElementNS(SVG_NS, STYLE);
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
            text.setAttribute(FONT_FAMILY, this._scratchFontFamily);        
        }
        if(this._textAttributes.use && this._textAttributes.use.length>0){
            const defs = document.createElementNS(SVG_NS, DEFS);
            const TextID = 'text0';
            text.setAttribute('id', TextID);

            defs.appendChild(text);
            svg.appendChild(defs);
            for(const use of this._textAttributes.use){
                const _use = document.createElementNS(SVG_NS, USE);
                _use.setAttribute('href', `#${TextID}`);
                _use.setAttribute('x', `${use.x}`);
                _use.setAttribute('y', `${mesure.h + this._padding + use.y}`);
                if(use.fill){
                    _use.setAttribute(FILL, `${use.fill}`);
                }
                if(use.stroke){
                    _use.setAttribute(STROKE, `${use.stroke}`);
                }
                if(use.stroke_width){
                    _use.setAttribute(STROKE_WIDTH, `${use.stroke_width}`);
                }
                _use.setAttribute(FONT_SIZE, `${this._textAttributes.font_size}px`);
                _use.setAttribute(FONT_FAMILY, `"${this._textAttributes.font}", ${SANS_SERIF}`);
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
            // センタリング
            text.setAttribute("x", '50%'); // 水平方向中央
            text.setAttribute("y", '50%'); // 垂直方向中央
            text.setAttribute("text-anchor", 'middle'); // 水平方向の基準を中央に
            text.setAttribute("dominant-baseline", 'middle'); // 垂直方向の基準を中央に
            if(this._textAttributes.fill){
                text.setAttribute(FILL, `${this._textAttributes.fill}`);
            }
            text.setAttribute(FONT_SIZE, `${this._textAttributes.font_size}px`);
            text.setAttribute(FONT_FAMILY, `"${this._textAttributes.font}",${SANS_SERIF}`);
            if(this._textAttributes.stroke){
                text.setAttribute(STROKE, this._textAttributes.stroke);
            }
            if(this._textAttributes.stroke_mode){
                text.setAttribute(STROKE_MODE, this._textAttributes.stroke_mode);
            }
            if(this._textAttributes.stroke_width){
                text.setAttribute(STROKE_WIDTH, `${this._textAttributes.stroke_width}` );
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
            +`${this._textAttributes.font_size}px ${this._textAttributes.font}, ${SANS_SERIF}`;
        const fontFamilyCtx  = ((this._textAttributes.font_weight)? this._textAttributes.font_weight: '')
            +`${this._textAttributes.font_size}px "${this._textAttributes.font}", ${SANS_SERIF}`;
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