/**
 * Entity
 */
import { EventEmitter } from "events";
import { Image } from "../image/image";
import { playground } from "../vm/playground";
import { Renderer } from "../render/renderer";
import { StageLayering } from '@Type/stage/CStageLayering';
import { Utils } from "../utils/utils";
import { EntityImage } from "./entity/entityImage";
import { EntitySound } from "./entity/entitySound";
import { TMouse } from "@Type/mouse";

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
    protected _image: EntityImage;
    protected _sound: EntitySound;
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
    get Image() {
        return this._image;
    }
    get images() {
        return this._images;
    }
    get Sound() {
        return this._sound;
    }
    get Mouse() {
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