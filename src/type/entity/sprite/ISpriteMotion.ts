import type { ISpriteMotionPosition } from './ISpriteMotionPosition';
import type { ISpriteMotionMove } from './ISpriteMotionMove';
import type { ISpriteMotionPoint } from './ISpriteMotionPoint';
import type { ISpriteMotionDirection} from './ISpriteMotionDirection';
import type { ISpriteMotionRotation } from './ISpriteMotionRotation';
import type { IEntityMotion } from '../entity/IEntityMotion';
/**
 * Motion of sprite
 */
export interface ISpriteMotion extends IEntityMotion {
    /** Position */
    get position(): ISpriteMotionPosition;

    /** Direction */
    get direction(): ISpriteMotionDirection;
    
    /** Style of rotation */
    get rotation() : ISpriteMotionRotation;

    /** Movement */
    get move(): ISpriteMotionMove;

    /** Point */
    get point(): ISpriteMotionPoint;

};