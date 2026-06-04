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
export class SpriteMotion implements ISpriteMotion {
    protected entity: ISprite;
    private move: SpriteMotionMove;
    private point: SpriteMotionPoint;
    private position: SpriteMotionPosition;
    private direction: SpriteMotionDirection;
    private rotation: SpriteMotionRotation;
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
    get Direction(): SpriteMotionDirection {
        return this.direction;
    }
    get Rotation() {
        return this.rotation;
    }
    get Move(): ISpriteMotionMove {
        return this.move;
    }
    get Point(): ISpriteMotionPoint {
        return this.point;
    }
};