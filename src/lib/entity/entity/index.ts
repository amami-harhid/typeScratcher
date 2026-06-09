/**
 * Entity
 */
import { EntityImage } from "./entityImage";
import { EntitySound } from "./entitySound";
import { EventEmitter } from "events";
import { Image } from "../../image";
import { playground } from "../../engine/playground";
import { Render } from "../../render";
import { Utils } from "../../utils/utils";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntityBroadCast } from "../../../type/entity/entity/IEntityBroadcast";
import type { IEntityImage } from "../../../type/entity/entity/IEntityImage";
import type { IEntitySound } from "../../../type/entity/entity/IEntitySound";
import type { TMouse } from "../../../type/mouse";
import { type StageLayeringValue } from '../../../type/entity/stage/CStageLayering';
import { EntityBroadCast } from "./entityBroadcast";

export class Entity extends EventEmitter implements IEntity{
    public get SOUND_FORCE_STOP() {
        return "sound_force_stop";
    }
    protected _name! : string;
    private _images: Image[] = [];
    public id: string;
    public drawableID: number = -1;
    protected _render: Render;
    protected _image: IEntityImage;
    protected _sound: IEntitySound;
    protected _broadcast : IEntityBroadCast;
    protected _mouse: TMouse;
    protected _isSprite: boolean;
    constructor() {
        super();
        this._render = playground.render;
        this.id = this._generateUUID();
        this._image = new EntityImage(this);
        this._sound = new EntitySound(this);
        this._broadcast = new EntityBroadCast(this);
        this._mouse = playground.mouse;
        this._isSprite = false;
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
    get $images() {
        return this._images;
    }
    get Sound():IEntitySound {
        return this._sound;
    }
    get Broadcast(): IEntityBroadCast {
        return this._broadcast;
    }
    get mouse():TMouse {
        return this._mouse;
    }
    get isSprite() {
        return this._isSprite;
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