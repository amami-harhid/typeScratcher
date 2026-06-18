import { Entity } from "../entity";
import { engine, Engine } from "../../engine";
import { EntitySound } from "../entity/entitySound";
import { Image } from "../../image";
import { PenSprite } from "./pen";
import { ScratchElement } from "../../gui/scratchElement";
import { Sound } from "../../sounds";
import { SpriteBackdrop } from "./spriteBackdrop";
import { SpriteBubble } from "./spriteBubble";
import { SpriteControl } from "./spriteControl";
import { SpriteCostume } from "./spriteCostume";
import { SpriteDragMode } from "./spriteDragMode";
import { SpriteEvent } from "./spriteEvent";
import { SpriteLooks } from "./spriteLooks";
import { SpriteMotion } from "./spriteMotion";
import { SpriteProperties } from "./spriteProperties";
import { SpriteSensing } from "./spriteSensing";
import { StageLayering } from '../../../type/entity/stage/CStageLayering';
import { Timer } from "../../utils/timer";
import type { ISprite } from "../../../type/entity/sprite";
import type { ISvgSkin } from "../../../type/render/ISvgSkin";
import type { ISpriteLooksBackdrop } from "../../../type/entity/sprite/ISpriteLookaBackdrop";
import type { ISpriteControl } from "../../../type/entity/sprite/ISpriteControl";
import type { ISpriteCostume } from "../../../type/entity/sprite/ISpriteCostume";
import type { ISpriteEvent } from "../../../type/entity/sprite/ISpriteEvent";
import type { ISpriteLooks } from "../../../type/entity/sprite/ISpriteLooks";
import type { ISpriteMotion } from "../../../type/entity/sprite/ISpriteMotion";
import type { ISpriteProperties } from "../../../type/entity/sprite/ISpriteProperties";
import type { ISpriteSensing } from "../../../type/entity/sprite/ISpriteSensing";


/**
 * Sprite
 */
export class Sprite extends Entity implements ISprite {
    private _costume : ISpriteCostume;
    private _backdrop: ISpriteLooksBackdrop;
    private _motion: ISpriteMotion;
    private _looks: ISpriteLooks;
    private _control: ISpriteControl;
    private _event: ISpriteEvent;
    private _properties: ISpriteProperties;
    private _sensing: ISpriteSensing;
    private _penSprite: PenSprite;
    private _dragMode : SpriteDragMode;
    //private _textToSpeech : ISpriteTextToSpeech;
    private _isClone: boolean = false;
    private _clones: ISprite[] = [];
    private _parent?: ISprite;
    /**
     * @param name
     */
    constructor(name: string) {
        super();
        this.createDrawable(StageLayering.SPRITE_LAYER);
        this._name = name;
        this._properties = new SpriteProperties(this);
        this._costume = new SpriteCostume(this);
        this._backdrop = new SpriteBackdrop(this);
        this._motion = new SpriteMotion(this);
        this._looks = new SpriteLooks(this);
        this._control = new SpriteControl(this);
        this._event = new SpriteEvent(this);
        this._sensing = new SpriteSensing(this);
        this._dragMode = new SpriteDragMode(this);
        this._penSprite = new PenSprite(this);
        //this._font = new SpriteFont(this);
        //this._svgText = new SvgText(this);
        //this._textToSpeech = new TextToSpeech(this);
        this._isSprite = true; // これはスプライトです！
        const _engine = engine as Engine;
        _engine.addSprite(this);
        
    }
    get Properties() {
        return this._properties;
    }
    get Costume(): ISpriteCostume {
        return this._costume;
    }
    get Backdrop(): ISpriteLooksBackdrop {
        return this._backdrop;
    }
    get Motion() : ISpriteMotion {
        return this._motion;
    }
    get Looks() : ISpriteLooks {
        return this._looks;
    }
    get Control() : ISpriteControl {
        return this._control;
    }
    
    get Event(): ISpriteEvent {
        return this._event;
    }
    get DragMode() :SpriteDragMode {
        return this._dragMode;
    }
    get Sensing(): ISpriteSensing {
        return this._sensing;
    }
    get Pen(): PenSprite {
        return this._penSprite;
    }
    //get Font(): ISpriteFont {
    //    return this._font;
    //}
    get clones() {
        return this._clones;
    }
    get isClone() {
        return this._isClone;
    }
    set isClone(isClone: boolean) {
        this._isClone = isClone;
    }
    get parent() :ISprite | undefined{
        return this._parent;
    }
    set parent(parent:ISprite) {
        this._parent = parent;
    }
    async init() {
        const me = this;
        return new Promise<void>((resolve)=>{
            const loadArr: Promise<void>[] = [];
            for(const img of this._image.images){
                loadArr.push((img as Image).load());
            }
            for(const sndKey of (this._sound as EntitySound).soundKeys){
                const sound = (this._sound as EntitySound).soundMap[sndKey];
                const _sound = sound as Sound;
                loadArr.push(_sound.load(me));
            }
            if( me.isClone ){
                return;
            }
            Promise.all(loadArr).then(async ()=>{ 
                // イメージごとに Skinを作る
                for(const img of this._image.images){
                    const svgText = (img as Image).image;
                    const skinId = this.render.renderer.createSVGSkin(svgText);
                    const _skin = this._render.renderer._allSkins[skinId];
                    // willReadFrequently を設定するために SKINインスタンスを取り出し、
                    // SVGSkinのコンストラクターで実施すみの下記【A】２行をやり直す。
                    //if(_skin._canvas) _skin._canvas.remove(); // <== 念のため削除
                    /*【A】*/const _svgSkin: ISvgSkin = _skin as ISvgSkin;
                    /*【A】*/_svgSkin._canvas = ScratchElement.RemakeCanvasWillReadFrequentlyTrue;
                    /*【A】*/_svgSkin._context = _svgSkin._canvas.getContext("2d", { willReadFrequently: true });
                    await Timer.wait(0.1);
                    (img as Image).skinId = skinId;
                }
                resolve(); // 完了
            });
        })
    }
    update() {
        this._penSprite.update();
        (this._looks.bubble as SpriteBubble).update();
        this._properties.update(); 
    }

}