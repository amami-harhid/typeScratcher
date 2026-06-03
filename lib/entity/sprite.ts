/**
 * Sprite
 */
import { Entity } from "@Lib/entity/entity";
import { StageLayering } from '@Type/stage/CStageLayering';
import { SpriteControl } from "./sprite/spriteControl";
import { SpriteMotion } from "./sprite/spriteMotion";
import { SpriteCostume } from "./sprite/spriteCostume";
import { SpriteEvent } from "./sprite/spriteEvent";
import { SpriteFont } from "./sprite/spriteFont";
import { SpriteProperties } from "./sprite/spriteProperties";
import { SpriteLooks } from "./sprite/spriteLooks";
import { playground } from "../vm/playground";
import { SpriteSensing } from "./sprite/spriteSensing";
import { SpriteDragMode } from "./sprite/spriteDragMode";
import { DragSprite } from "./drag/dragSprite";
import { PenSprite } from "./pen/penSprite";
import { Timer } from "../utils/timer";
import type { IEntityProperties } from "@Type/entity/IEntityProperties";
import type { ISprite } from "@Type/sprite";
import type { ISpriteFont } from "@Type/sprite/ISpriteFont";
import type { ISvgText } from "@Type/svgText/ISvgText";
import type { ISpriteTextToSpeech } from "@Type/sprite/ISpriteTextToSpeech";

export class Sprite extends Entity {
    private _costume : SpriteCostume;
    private _motion: SpriteMotion;
    private _looks: SpriteLooks;
    private _control: SpriteControl;
    private _event: SpriteEvent;
    private _properties: IEntityProperties;
    private _sensing: SpriteSensing;
    private _penSprite: PenSprite;
    //private _font : ISpriteFont;
    private _dragMode : SpriteDragMode;
    //private _svgText : ISvgText;
    //private _textToSpeech : ISpriteTextToSpeech;
    private _isClone: boolean = false;
    private _clones: ISprite[] = [];
    /**
     * @param name
     */
    constructor(name: string) {
        super();
        this.createDrawable(StageLayering.SPRITE_LAYER);
        this._name = name;
        this._costume = new SpriteCostume(this);
        this._motion = new SpriteMotion(this);
        this._looks = new SpriteLooks(this);
        this._control = new SpriteControl(this);
        this._event = new SpriteEvent(this);
        this._properties = new SpriteProperties(this);
        this._sensing = new SpriteSensing(this);
        this._dragMode = new SpriteDragMode(this);
        this._penSprite = new PenSprite(this);
        //this._font = new SpriteFont(this);
        //this._svgText = new SvgText(this);
        //this._textToSpeech = new TextToSpeech(this);
        this._isSprite = true; // これはスプライトです！
        playground.addSprite(this);
        
    }
    get Costume(): SpriteCostume {
        return this._costume;
    }
    get Motion() : SpriteMotion {
        return this._motion;
    }
    get Looks() : SpriteLooks {
        return this._looks;
    }
    //get Control() : SpriteControl {
    //    return this._control;
    //}
    
    get Event(): SpriteEvent {
        return this._event;
    }
    get DragMode() :SpriteDragMode {
        return this._dragMode;
    }
    get Sensing(): SpriteSensing {
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
    async init() {
        return new Promise<void>((resolve)=>{
            const loadArr: Promise<void>[] = [];
            for(const img of this._image.images){
                loadArr.push(img.load());
            }
            for(const sndKey of this._sound.soundKeys){
                const sound = this._sound.soundMap[sndKey];
                loadArr.push(sound.load());
            }
            Promise.all(loadArr).then(async ()=>{                
                // イメージごとに Skinを作る
                for(const img of this._image.images){
                    const svgText = img.image;
                    const skinId = this.render.renderer.createSVGSkin(svgText);
                    await Timer.wait(0.1);
                    img.skinId = skinId;
                    this._costume.add(img);
                }
                resolve(); // 完了
            });
        })
    }
    get Properties() {
        return this._properties;
    }
    update() {
        this._properties.update(); 
    }



}