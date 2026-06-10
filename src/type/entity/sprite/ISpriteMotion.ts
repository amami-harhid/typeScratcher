import type { ISpriteMotionPosition } from './ISpriteMotionPosition';
import type { ISpriteMotionMove } from './ISpriteMotionMove';
import type { ISpriteMotionPoint } from './ISpriteMotionPoint';
import type { ISpriteMotionDirection} from './ISpriteMotionDirection';
import type { ISpriteMotionRotation } from './ISpriteMotionRotation';
import type { IEntityMotion } from '../entity/IEntityMotion';
/**
 * スプライトの動き
 */
export interface ISpriteMotion extends IEntityMotion {
    /** 位置 */
    get position(): ISpriteMotionPosition;

    /** 向き */
    get direction(): ISpriteMotionDirection;
    
    /** 回転 */
    get rotation() : ISpriteMotionRotation;

    /** 動き */
    get move(): ISpriteMotionMove;

    /** 方向へ向く */
    get point(): ISpriteMotionPoint;

};