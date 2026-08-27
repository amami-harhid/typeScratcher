import { Image } from "../image";
import type { ImageArgStringObject } from "../../type/image";
import type { createSvgImageAttributes } from "../../type/font";
import type { TextAttributes } from "../../type/svgText";
import { textToSvg } from "../svgText";
import { Engine, engine } from "../engine";
import { IFontImage, FontImageAttribute, FontImageParams} from "../../type/font/fontImage";
import { ImageLoader } from "../loader/imageLoader";
import { Utils } from "../utils/utils";

export class FontImage extends Image implements IFontImage {

    private _attributes: createSvgImageAttributes;
    private _text : string;
    constructor(obj: FontImageParams) {
        const info = Utils.varNameValues(obj);
        const _name = info[0];
        const _attr = info[1] as FontImageAttribute
        const _image : ImageArgStringObject = {};
        _image[_name] = _attr.text;
        super(_image);
        this._text = _attr.text;
        this._attributes = _attr.attributes;
        this.skinId = -1;
    }
    async load(): Promise<void>{
        await this.initText();
        return; 
    }
    async fontLoad(): Promise<void>{
        const _promiseArr: Promise<void>[] = [];
        for(const _fnt of (engine as Engine).getFonts()) {
            _promiseArr.push(_fnt.load());
        }
        await Promise.all(_promiseArr);
    }
    private async initText( ) : Promise<void> {

        await this.fontLoad();
        await this.changeText(this._text);
    }
    async changeText( text: string ) : Promise<void>{

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