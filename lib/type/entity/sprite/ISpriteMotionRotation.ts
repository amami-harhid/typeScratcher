import type { RotationValue } from '../RotationStyle';
/**
 * スプライトの動き（回転方法）
 */
export interface ISpriteMotionRotation {
    /**
     * 回転方法
     * 
     * {@link TypeRotationStyle}
     */
    get style(): RotationValue;
    /**
     * 回転方法
     * 
     * {@link TypeRotationStyle}
     */
    set style(style: RotationValue);
};