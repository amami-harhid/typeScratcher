import type { ISpriteMotionPosition } from './ISpriteMotionPosition';
import type { ISpriteMotionMove } from './ISpriteMotionMove';
import type { ISpriteMotionPoint } from './ISpriteMotionPoint';
import type { ISpriteMotionDirection} from './ISpriteMotionDirection';
import type { ISpriteMotionRotation } from './ISpriteMotionRotation';
/**
 * スプライトの動き
 */
export interface ISpriteMotion {
    /** 位置 */
    get Position(): ISpriteMotionPosition;

    /** 向き */
    get Direction(): ISpriteMotionDirection;
    
    /** 回転 */
    get Rotation() : ISpriteMotionRotation;

    /** 動き */
    get Move(): ISpriteMotionMove;

    /** 方向へ向く */
    get Point(): ISpriteMotionPoint;

};