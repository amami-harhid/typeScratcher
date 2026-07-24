import type { RotationValue } from '../RotationStyle';
/**
 * Motion of rotation
 */
export interface ISpriteMotionRotation {
    /**
     * Style of rotation
     */
    get style(): RotationValue;
    /**
     * Style of rotation
     */
    set style(style: RotationValue);
};