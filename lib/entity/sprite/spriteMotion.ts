import { Sprite } from '.';
import { SpriteMotionMove } from './spriteMotionMove';
import { SpriteMotionPoint } from './spriteMotionPoint';
import { SpriteMotionDirection} from './spriteMotionDirection';
import { SpriteMotionRotation } from './spriteMotionRotation';
import { SpriteMotionPosition } from './spriteMotionPosition';
import type { ISpriteMotion } from '../../type/entity/sprite/ISpriteMotion';
import type { ISpriteMotionMove } from '../../type/entity/sprite/ISpriteMotionMove';
import type { ISpriteMotionPoint } from '../../type/entity/sprite/ISpriteMotionPoint';
import type { ISpriteMotionPosition } from '../../type/entity/sprite/ISpriteMotionPosition';
import type { ISprite } from '../../type/entity/sprite';
import type { ISpriteMotionDirection } from '../../type/entity/sprite/ISpriteMotionDirection';
import type { ISpriteMotionRotation } from '../../type/entity/sprite/ISpriteMotionRotation';
export class SpriteMotion implements ISpriteMotion {
    protected entity: ISprite;
    private move: ISpriteMotionMove;
    private point: ISpriteMotionPoint;
    private position: ISpriteMotionPosition;
    private direction: ISpriteMotionDirection;
    private rotation: ISpriteMotionRotation;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this.move = new SpriteMotionMove(entity);
        this.point = new SpriteMotionPoint(entity);
        this.position = new SpriteMotionPosition(entity);
        this.direction = new SpriteMotionDirection(entity);
        this.rotation = new SpriteMotionRotation(entity);
    }
    get Position(): ISpriteMotionPosition {
        return this.position;
    }
    get Direction(): ISpriteMotionDirection {
        return this.direction;
    }
    get Rotation() :ISpriteMotionRotation{
        return this.rotation;
    }
    get Move(): ISpriteMotionMove {
        return this.move;
    }
    get Point(): ISpriteMotionPoint {
        return this.point;
    }
};