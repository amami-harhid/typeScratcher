/**
 * Sprite Sensing(調べる) Color
 */
export interface ISpriteSensingColor{
 
    /**
     * Detect contact with a specified color.
     * 
     * ---
     * 指定する色に触れたか否かの判定
     * 
     * @param targetColor {string} - color
     * @returns 
     */
    isTouching(targetColor: string): boolean;

    /**
     * Detect when own color (mask) comes into contact with specified color (target).
     * 
     * ---
     * 自分の色(mask)が指定する色(target)に触れたか否かの判定
     * 
     * @param ownColor {string} - own color
     * @param targetColor {string} - target color
     * @returns 
     */
    isTouchingBy(ownColor: string, targetColor: string): boolean;

};