import type { ScratchRenderProperties } from "../../../type/render/IRenderWebGL";
import type { IEntity } from "../../../type/entity/entity";
import { Rotation, type RotationValue } from "../../../type/entity/RotationStyle";
import type { IEntityProperties, IPosition, IScale } from '../../../type/entity/entity/IEntityProperties';

export class Scale implements IScale {
    private _scale : { w: number, h: number} = { w:100, h:100 };
    get w() {
        return this._scale.w;
    }
    set w(w:number) {
        this._scale.w = w;
    }
    get h(){
        return this._scale.h;
    }
    set h(h:number) {
        this._scale.h = h;
    }
}
export class Position implements IPosition {
    private _position : { x: number, y: number} = { x:0, y:0 };
    get x() {
        return this._position.x;
    }
    set x(x:number) {
        this._position.x = x;
    }
    get y(){
        return this._position.y;
    }
    set y(y:number) {
        this._position.y = y;
    }
}
export class EntityProperties implements IEntityProperties {
    protected entity:IEntity;
    private _position : IPosition;
    private _scale : Scale;
    private _degree: number = 90;
    private _visible: boolean = true;
    protected _rotation: RotationValue;
    
    constructor(entity: IEntity) {
        this.entity = entity;
        this._position = new Position();
        this._scale = new Scale();
        this._rotation = Rotation.ALL_AROUND;
    }

    get position(): IPosition {
        return this._position;
    }
    set position(pos:[number, number]) {
        this._position.x = pos[0];
        this._position.y = pos[1];
    }
    get scale(): Scale {
        return this._scale;
    }
    set scale( size:[number, number]) {
        this._scale.w = size[0];
        this._scale.h = size[1];
    }
    get degree() {
        return this._degree;
    }
    set degree(degree: number) {
        this._degree = degree;
    }

    get visible() {
        return this._visible;
    }
    set visible(visible: boolean) {
        this._visible = visible;
    }
    get rotationStyle() :RotationValue {
        return this._rotation;
    }
    set rotationStyle(style:RotationValue) {
        this._rotation = style;
    }
    update() {
    }

    updateDrawableProperties(prop: ScratchRenderProperties){
        this.entity.render.renderer.updateDrawableProperties(this.entity.drawableID, prop);
    }
}