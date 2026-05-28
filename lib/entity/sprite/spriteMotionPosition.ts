import { Sprite } from '../sprite';
import type { TPositionArray } from '@Type/common/typeCommon';
import type { ISpriteMotionPosition } from '@Type/sprite/ISpriteMotionPosition';

export class SpriteMotionPosition implements ISpriteMotionPosition {
    private entity: Sprite;
    private _x: number = 0;
    private _y: number = 0;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        this.entity = entity;
    }
    get x() : number {
        return this._x;
    }
    get y() : number {
        return this._y;
    }
    get xy() : {x:number, y:number} {
        return {x: this._x, y: this._y };
    }
    set x(x: number) {
        this._x = x;
    }
    set y(y: number) {
        this._y = y;
    }
    set xy( xy: {x:number, y:number} | {} | TPositionArray)  {

    }

};