import type { RotationValue } from '../RotationStyle';
/**
 * Motion of rotation
 */
export interface ISpriteMotionRotation {
    /**
     * Style of rotation
     * ---
     * 回転方法
     */
    get style(): RotationValue;

    /**
     * Style of rotation
     * ---
     * 回転方法
     */
    set style(style: RotationValue);
};