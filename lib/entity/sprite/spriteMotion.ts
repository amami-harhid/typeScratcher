import { Sprite } from '../sprite';
import { SpriteMotionMove } from './spriteMotionMove';
import { SpriteMotionPoint } from './spriteMotionPoint';
import { SpriteMotionDirection} from './spriteMotionDirection';
import { SpriteMotionRotation } from './spriteMotionRotation';
import { SpriteMotionPosition } from './spriteMotionPosition';
import type { ISpriteMotion } from '@Type/sprite/ISpriteMotion';
import type { ISpriteMotionMove } from '@Type/sprite/ISpriteMotionMove';
import type { ISpriteMotionPoint } from '@Type/sprite/ISpriteMotionPoint';
import type { ISpriteMotionPosition } from '@Type/sprite/ISpriteMotionPosition';
import type { ISprite } from '@Type/sprite';
import type { ISpriteMotionDirection } from '@Type/sprite/ISpriteMotionDirection';
import type { ISpriteMotionRotation } from '@Type/sprite/ISpriteMotionRotation';
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