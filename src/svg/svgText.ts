import { Sprite } from '../entity/sprite';
import { Stage } from '../entity/stage';
import { SvgTextError } from './svgTextError';
import { SvgTextCreator } from './svgTextCreator';
import { SvgTextMesure } from './svgTexMesure';
import type { ISvgText, TAddOption } from '../type/svgText/ISvgText';
import type { ISvgTextCreator, TSvgOption, TSvgOptionFont } from '../type/svgText/ISvgTextCreator';
import type { ISvgTextMesure } from '../type/svgText/ISvgTextMesure';
import type { IEntity } from '../type/entity/entity';



const SVG_NS = "http://www.w3.org/2000/svg";
export class SvgText implements ISvgText {
    private _entity : IEntity;
    private _svgTextMesure: ISvgTextMesure;
    private _svgTextCreator: ISvgTextCreator;
    constructor(entity: IEntity) {
        this._entity = entity;
        this._svgTextMesure = SvgTextMesure.getInstance();
        this._svgTextCreator = SvgTextCreator.getInstance();
    }
    private addImage(name:string, image:string): void {
        if(this._entity instanceof Sprite) {
            const sprite = this._entity as Sprite;
            // TODO
        }else if(this._entity instanceof Stage){
            const stage = this._entity as Stage;
            // TODO
        }
    }
    addTexts(name: string, texts: string[], option?: TAddOption): void {
        const svgOption:TSvgOption = {};
        if(option){
            if(option.fontFamily){
                // TODO
            }
            if(option.fontSize){
                svgOption.fontSize = option.fontSize;
            }
            if(option.fontStyle){
                svgOption.fontStyle = option.fontStyle;
            }
            if(option.fontSize){
                svgOption.fontSize = option.fontSize;
            }
            if(option.color){
                svgOption.color = option.color;
            }
        }
        const svgString = this._svgTextCreator.toSvg(texts, svgOption);
        //const svgString2 = this._svgTextCreator.toSvg(texts, svgOption.fontSize,svgOption.fontStyle, svgOption.color, (svgOption.font)?svgOption.font.fontFamily:'');
        const parser = new DOMParser();
        const serializer = new XMLSerializer();
        let svgDom = parser.parseFromString(svgString, 'text/xml');
        const svgTag = svgDom.documentElement;
        const svgText = serializer.serializeToString(svgTag);
        this.addImage(name, svgText);
    }
    /**
     * 文字列配列をSVG化して画像を更新する
     * @param name 
     * @param text 
     * @param option 
     */
    replaceTexts( name: string, text: string[], option?:TAddOption): void{
        // TODO        
    }

    add(name: string, svgString: string): void {
        const parser = new DOMParser();
        let svgDom = parser.parseFromString(svgString, 'text/xml');
        if(svgDom.childNodes.length < 1 ||
            svgDom.documentElement.localName !== 'svg') {
            const svgTextError = SvgTextError();
            this.addImage(name, svgTextError);
            return;
        }
        const svgTag = svgDom.documentElement;
        const serializer = new XMLSerializer();
        const svgText = serializer.serializeToString(svgTag);
        this.addImage(name, svgText);
    }
    mesure(texts:string[], fontSize?:number, fontStyle?:string, fontFamily?: string): {w:number, h:number}{
        return this._svgTextMesure.mesure(texts, fontSize, fontStyle, fontFamily);
    }

    toSvg(textArr: string[], fontSize?: number, fontStyle?: string, color?: string, fontFamily?:string): string {
        return this._svgTextCreator.toSvg2(textArr, fontSize, fontStyle, color, fontFamily);
    }
}