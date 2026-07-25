import type { ISpriteMotionPosition } from './ISpriteMotionPosition';
import type { ISpriteMotionMove } from './ISpriteMotionMove';
import type { ISpriteMotionPoint } from './ISpriteMotionPoint';
import type { ISpriteMotionDirection} from './ISpriteMotionDirection';
import type { ISpriteMotionRotation } from './ISpriteMotionRotation';
import type { IEntityMotion } from '../entity/IEntityMotion';
/**
 * Motion of sprite
 * ---
 * スプライトの動き
 */
export interface ISpriteMotion extends IEntityMotion {
    /** 
     * Position of Sprite
     * ---
     * スプライトの座標位置
     */
    get position(): ISpriteMotionPosition;

    /** 
     * Direction of Sprite 
     * ---
     * スプライトの方向
     */
    get direction(): ISpriteMotionDirection;
    
    /** 
     * Style of rotation 
     * ---
     * スプライトの回転方法
     */
    get rotation() : ISpriteMotionRotation;

    /** 
     * Move
     * ---
     * 動かす処理 
     */
    get move(): ISpriteMotionMove;

    /** 
     * Point
     * ---
     * 向かせる処理 
     */
    get point(): ISpriteMotionPoint;

};