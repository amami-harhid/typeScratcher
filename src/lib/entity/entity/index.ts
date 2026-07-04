/**
 * Entity
 */
import { engine, Engine } from "../../engine";
import { EntityBroadCast } from "./entityBroadcast";
import { EntityFont } from "./entityFont";
import { EntityImage } from "./entityImage";
import { EntitySound } from "./entitySound";
import { EntitySpeech } from "./entitySpeech";
import { EventEmitter } from "events";
import { Font } from "../../fonts";
import { Image } from "../../image";
import { Render } from "../../render";
import { Utils } from "../../utils/utils";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntityBroadCast } from "../../../type/entity/entity/IEntityBroadcast";
import type { IEntityFont } from "../../../type/entity/entity/IEntityFont";
import type { IEntityImage } from "../../../type/entity/entity/IEntityImage";
import type { IEntitySound } from "../../../type/entity/entity/IEntitySound";
import type { IEntitySpeech } from "../../../type/entity/entity/IEntitySpeech";
import type { IImage } from "../../../type/image";
import type { TMouse } from "../../../type/mouse";
import type { StageLayeringValue } from '../../../type/entity/stage/CStageLayering';
import { IFont } from "src/type/font";

export class Entity extends EventEmitter implements IEntity{
    public get SOUND_FORCE_STOP() {
        return "sound_force_stop";
    }
    protected _name! : string;
    private _images: Image[] = [];
    protected _fonts: Font[] = []; 
    public id: string;
    public drawableID: number = -1;
    protected _broadcast : IEntityBroadCast;
    protected _image: IEntityImage;
    protected _mouse: TMouse;
    protected _render: Render;
    protected _sound: IEntitySound;
    protected _speech: IEntitySpeech;
    protected _isSprite: boolean;
    protected _isAlive: boolean;
    constructor() {
        super();
        const _engine = engine as Engine;
        this._render = _engine.render;
        this.id = this._generateUUID();
        this._image = new EntityImage(this);
        this._sound = new EntitySound(this);
        this._broadcast = new EntityBroadCast(this);
        this._speech = new EntitySpeech(this);
        this._mouse = _engine.mouse;
        this._isSprite = false;
        this._isAlive = true;
    }
    createDrawable(layer: StageLayeringValue) {
        this.drawableID = this._render.createDrawable(layer);
    }
    update():void {
    }
    get name(): string {
        return this._name;
    }
    get render(): Render {
        return this._render;
    }
    get $image():IEntityImage {
        return this._image;
    }
    get $images(): IImage[] {
        return this._images;
    }
    get $fonts() : IFont[] {
        return this._fonts;
    }
    get Broadcast(): IEntityBroadCast {
        return this._broadcast;
    }
    get Sound():IEntitySound {
        return this._sound;
    }
    get Speech(): IEntitySpeech {
        return this._speech;
    }
    get mouse():TMouse {
        return this._mouse;
    }
    get isSprite() {
        return this._isSprite;
    }
    get isAlive(): boolean {
        return this._isAlive;
    }
    set isAlive(isAlive: boolean) {
        this._isAlive = isAlive;
    }
    imageLoadCompleteAll() : boolean {
        for( const _img of this._images){
            if( _img.loadCompleted === false ){
                return false;
            }
        }
        return true;
    }
    loadCompleteAll() : boolean {
        if(this.imageLoadCompleteAll() === false) {
            return false;
        }
        // Sound 対応があれば追加する
        return false;
    }
    protected _generateUUID () {
        return Utils.generateUUID();
    }
}