/**
 * Sprite Sensing(調べる) Color
 */
export interface ISpriteSensingColor{
 
    /**
     * Detect contact with a specified color.
     * 
     * @param targetColor {string} - color
     * @returns 
     */
    isTouching(targetColor: string): boolean;

    /**
     * Detect when own color (mask) comes into contact with specified color (target).
     * 
     * @param ownColor {string} - own color
     * @param targetColor {string} - target color
     * @returns 
     */
    isTouchingBy(ownColor: string, targetColor: string): boolean;

};