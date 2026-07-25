/**
 * 回転方向
 */
export const Rotation = {
    /**
     * Rotate left and right only.
     * ---
     * 左右のみ回転 
     */
    LEFT_RIGHT : 'left-right',
    
    /**
     * Do not rotate.
     * ---
     * 回転しない
     */
    DONT_ROTATE : 'do-not-rotate',
    
    /**
     * All Around.
     * --- 
     * 自由に回転 
     */
    ALL_AROUND : 'all-around',
} as const;

export type RotationStyle = typeof Rotation;
export type RotationValue = typeof Rotation[keyof RotationStyle];