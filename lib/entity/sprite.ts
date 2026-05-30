/**
 * Sprite
 */
import { Entity } from "./entity";
import { StageLayering } from '@Type/stage/CStageLayering';
import { SpriteControl } from "./sprite/spriteControl";
import { SpriteMotion } from "./sprite/spriteMotion";
import { SpriteCostume } from "./sprite/spriteCostume";
import { SpriteEvent } from "./sprite/spriteEvent";
import { Timer } from "../utils/timer";
import { SpriteProperties } from "./sprite/spriteProperties";
import { SpriteLooks } from "./sprite/spriteLooks";
import { Playground } from "../vm/playground";

export class Sprite extends Entity {
    private _costume : SpriteCostume;
    private _motion: SpriteMotion;
    private _looks: SpriteLooks;
    private _control: SpriteControl;
    private _event: SpriteEvent;
    private _properties: SpriteProperties;
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
        Playground.addSprite(this);
        
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
    get Control() : SpriteControl {
        return this._control;
    }
    
    get Event(): SpriteEvent {
        return this._event;
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
                    this.Costume.add(img);
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