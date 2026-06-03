/**
 * Entity
 */
import { EventEmitter } from "events";
import { Image } from "@Lib/image/image";
import { playground } from "@Lib/vm/playground";
import { Renderer } from "@Lib/render/renderer";
import { StageLayering } from '@Type/stage/CStageLayering';
import { Utils } from "@Lib/utils/utils";
import { EntityImage } from "@Lib/entity/entityImage";
import type { IEntityImage } from "@Type/entity/IEntityImage";
import { EntitySound } from "@Lib/entity/entitySound";
import type { IEntitySound } from "@Type/entity/IEntitySound";
import type { TMouse } from "@Type/mouse";

export class Entity extends EventEmitter{
    public get SOUND_FORCE_STOP() {
        return "sound_force_stop";
    }
    protected _name! : string;
    private _images: Image[] = [];
    public id: string;
    public drawableID: number = -1;
    protected _render: Renderer;

    //protected _properties!: EntityProperties;
    protected _image: IEntityImage;
    protected _sound: IEntitySound;
    protected _mouse: TMouse;
    protected _isSprite: boolean;
    constructor() {
        super();
        this._render = playground.renderer;
        this.id = this._generateUUID();
        this._image = new EntityImage(this);
        this._sound = new EntitySound(this);
        this._mouse = playground.mouse;
        this._isSprite = false;
    }
    createDrawable(layer: StageLayering) {
        this.drawableID = this._render.createDrawable(layer);
    }
    update():void {
    }
    get name(): string {
        return this._name;
    }
    get render(): Renderer {
        return this._render;
    }
    get Image():IEntityImage {
        return this._image;
    }
    get images() {
        return this._images;
    }
    get Sound():IEntitySound {
        return this._sound;
    }
    get Mouse():TMouse {
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