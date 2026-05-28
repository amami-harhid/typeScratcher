import { ScratchRenderProperties } from "@Type/render/IRenderWebGL";
import { Entity } from "../entity";
import { RotationStyle } from "@Type/entity/RotationStyle";

export class Scale {
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
export class Position {
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
export class EntityProperties {
    protected entity:Entity;
    private _position : Position;
    private _scale : Scale;
    private _degree: number = 90;
    private _visible: boolean = true;
    protected _rotationStyle: RotationStyle;
    
    constructor(entity: Entity) {
        this.entity = entity;
        this._position = new Position();
        this._scale = new Scale();
        this._rotationStyle = RotationStyle.ALL_AROUND;
    }

    get position(): Position {
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
    get rotationStyle() :RotationStyle {
        return this._rotationStyle;
    }
    set rotationStyle(style:RotationStyle) {
        this._rotationStyle = style;
    }
    update() {
    }

    updateDrawableProperties(prop: ScratchRenderProperties){
        this.entity.render.renderer.updateDrawableProperties(this.entity.drawableID, prop);
    }
}