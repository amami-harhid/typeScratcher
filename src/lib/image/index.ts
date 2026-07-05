import { ImageLoader } from "../loader/imageLoader";
import { textToSvg } from "../svgText";
import { Utils } from "../utils/utils";
import type { createSvgImageAttributes, IImage } from "../../type/image";
import type { TextAttributes } from "../../type/svgText";
import { text } from "node:stream/consumers";


const ScratchFontFamily = {
    SansSerif: 'Sans Serif',
    Serif: 'Serif',
    Handwriting: 'Handwriting',
    Marker: 'Marker',
    Curly: 'Curly',
    Pixel: 'Pixel',
    Scratch: 'Scratch',
} as const;

export type ScratchFontFamilyValue = typeof ScratchFontFamily[keyof typeof ScratchFontFamily];
type ImageArgStringObject = { [key:string]:string };

/**
 * Image
 */
export class Image implements IImage{
    /**
     * 文字データの変数を渡してSVG化し、SVGデータを取り込んだImageを作る
     * @param image 
     * @param attributes 
     * @returns 
     */
    public static async createSvgImage(image: ImageArgStringObject, attributes: createSvgImageAttributes): Promise<IImage> {
        const _info = Utils.varNameValues(image);
        const _name = _info[0];
        const _text = _info[1];
        const textAttribute:TextAttributes = {};
        if(attributes.scratch_font_family ){
            textToSvg.scratchFontFamily = attributes.scratch_font_family;
        }
        if(attributes.fill){
            textAttribute.fill = attributes.fill;
        }
        if(attributes.font_family) {
            textAttribute.font = attributes.font_family;
        }
        if(attributes.font_size) {
            textAttribute.font_size = attributes.font_size;
        }
        if(attributes.font_weight) {
            textAttribute.font_weight = attributes.font_weight;
        }
        if(attributes.stroke) {
            textAttribute.stroke = attributes.stroke;
        }
        if(attributes.stroke_mode) {
            textAttribute.stroke_mode = attributes.stroke_mode;            
        }
        if(attributes.stroke_width) {
            textAttribute.stroke_width = attributes.stroke_width;
        }
        const textSvgData = await textToSvg.createSvgData(_text, textAttribute);
        
        const _image :{[key:string]: string } = {};
        _image[_name] = textSvgData;

        const textImage = new Image( _image );
        return textImage;
    }

    private _name: string;
    private _imagePath:string;
    private _img!:string;
    private _loadCompleted: boolean = false;
    private _skinId = -1;

    constructor( image: ImageArgStringObject ) {
        const info = Utils.varNameValues(image);
        this._name = info[0];
        this._imagePath = info[1];
    }
    async load() {
        //await Timer.wait(2); // For Debug
        if(this.loadCompleted === true) {
            // ロードはスプライトの Image.addメソッド内で実行される。
            // 複数のスプライトへ同一Imageインスタンスをaddしていることを
            // 想定し、すでにロード済であれば再ロードはしないとする。
            return;
        }
        const svgText = await ImageLoader.loader(this._imagePath);
        this._img = svgText;
        this._loadCompleted = true;
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._img;
    }
    set image(_img: string) {
        this._img = _img;
    }
    get loadCompleted() : boolean {
        return this._loadCompleted;
    }

    get skinId() : number {
        return this._skinId;
    }
    set skinId(skinId: number) {
        this._skinId = skinId;
    }
}