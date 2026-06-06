import type { ISpriteMotionPosition } from '../entity/sprite/ISpriteMotionPosition';
import type { ITextSpriteMotionMove } from './ITextSpriteMotionMove';
import type { ISpriteMotionDirection} from '../entity/sprite/ISpriteMotionDirection';
/**
 * テキストの動き
 */
export interface ITextSpriteMotion {

    get Position(): ISpriteMotionPosition;

    get Direction(): ISpriteMotionDirection;
    
    get Move(): ITextSpriteMotionMove;

};