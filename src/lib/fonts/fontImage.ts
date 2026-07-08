import { Image } from "../image";
import type { IImage, ImageArgStringObject } from "../../type/image";
import type { createSvgImageAttributes } from "../../type/font";
import type { TextAttributes } from "../../type/svgText";
import { textToSvg } from "../svgText";
import { Engine, engine } from "../engine";
import { IFontImage } from "src/type/font/fontImage";
import { ImageLoader } from "../loader/imageLoader";

export class FontImage extends Image implements IFontImage {

    private _attributes: createSvgImageAttributes;
    private _text! : string;
    constructor(attributes: createSvgImageAttributes) {
        const image: ImageArgStringObject = {};
        image['fontImageDummy'] = ''; // ダミー 
        super(image);
        this._attributes = attributes;
        this.skinId = -1;
    }
    async load(): Promise<void>{
        return; 
    }
    async fontLoad(): Promise<void>{
        const _promiseArr: Promise<void>[] = [];
        for(const _fnt of (engine as Engine).getFonts()) {
            _promiseArr.push(_fnt.load());
        }
        await Promise.all(_promiseArr);
    }

    async textToSvg( text: string ) : Promise<void>{

        if(this._text == text) {
            return;
        }

        await this.fontLoad();
        
        const _text = text;
        const textAttribute:TextAttributes = {};
        if(this._attributes.scratch_font_family ){
            textToSvg.scratchFontFamily = this._attributes.scratch_font_family;
        }
        if(this._attributes.fill){
            textAttribute.fill = this._attributes.fill;
        }
        if(this._attributes.font_family) {
            textAttribute.font = this._attributes.font_family;
        }
        if(this._attributes.font_size) {
            textAttribute.font_size = this._attributes.font_size;
        }
        if(this._attributes.font_weight) {
            textAttribute.font_weight = this._attributes.font_weight;
        }
        if(this._attributes.stroke) {
            textAttribute.stroke = this._attributes.stroke;
        }
        if(this._attributes.stroke_mode) {
            textAttribute.stroke_mode = this._attributes.stroke_mode;            
        }
        if(this._attributes.stroke_width) {
            textAttribute.stroke_width = this._attributes.stroke_width;
        }
        const textSvgData = await textToSvg.createSvgData(_text, textAttribute);
        const svgText = await ImageLoader.loader(textSvgData);
        this.image = svgText;

        this.updateSkin();
    }

    private createSkin(): void {
        const renderer = (engine as Engine).render.renderer;
        const skinId = renderer.createSVGSkin( this.image );
        this.skinId = skinId;
    }

    private updateSkin(): void {
        if(this.skinId == -1) {
            this.createSkin();            
        }else{
            const renderer = (engine as Engine).render.renderer;
            const skin = renderer._allSkins[this.skinId];
            if(skin) {
                renderer.updateSVGSkin(this.skinId, this.image);
            }
        }
    }

}