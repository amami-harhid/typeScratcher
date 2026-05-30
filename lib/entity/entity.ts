/**
 * Entity
 */
import { EventEmitter } from "events";
import { Image } from "../image/image";
import { Playground } from "../vm/playground";
import { Renderer } from "../render/renderer";
import { StageLayering } from '@Type/stage/CStageLayering';
import type { IEntity } from '@Type/entity/IEntity';
import { Utils } from "../utils/utils";
import { EntityImage } from "./entity/entityImage";
import { EntityProperties } from "./entity/entityProperties";
import { EntitySound } from "./entity/entitySound";

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
    constructor() {
        super();
        this._render = Playground.renderer;
        this.id = this._generateUUID();
        this._image = new EntityImage(this);
        this._sound = new EntitySound(this);
        //this._properties = new EntityProperties(this);
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