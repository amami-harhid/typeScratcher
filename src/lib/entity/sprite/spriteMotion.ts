import { SpriteMotionMove } from './spriteMotionMove';
import { SpriteMotionPoint } from './spriteMotionPoint';
import { SpriteMotionDirection} from './spriteMotionDirection';
import { SpriteMotionRotation } from './spriteMotionRotation';
import { SpriteMotionPosition } from './spriteMotionPosition';
import type { ISpriteMotion } from '../../../type/entity/sprite/ISpriteMotion';
import type { ISpriteMotionMove } from '../../../type/entity/sprite/ISpriteMotionMove';
import type { ISpriteMotionPoint } from '../../../type/entity/sprite/ISpriteMotionPoint';
import type { ISpriteMotionPosition } from '../../../type/entity/sprite/ISpriteMotionPosition';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteMotionDirection } from '../../../type/entity/sprite/ISpriteMotionDirection';
import type { ISpriteMotionRotation } from '../../../type/entity/sprite/ISpriteMotionRotation';
export class SpriteMotion implements ISpriteMotion {
    protected entity: ISprite;
    private _move: ISpriteMotionMove;
    private _point: ISpriteMotionPoint;
    private _position: ISpriteMotionPosition;
    private _direction: ISpriteMotionDirection;
    private _rotation: ISpriteMotionRotation;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this._move = new SpriteMotionMove(entity);
        this._point = new SpriteMotionPoint(entity);
        this._position = new SpriteMotionPosition(entity);
        this._direction = new SpriteMotionDirection(entity);
        this._rotation = new SpriteMotionRotation(entity);
    }
    get position(): ISpriteMotionPosition {
        return this._position;
    }
    get direction(): ISpriteMotionDirection {
        return this._direction;
    }
    get rotation() :ISpriteMotionRotation{
        return this._rotation;
    }
    get move(): ISpriteMotionMove {
        return this._move;
    }
    get point(): ISpriteMotionPoint {
        return this._point;
    }
};