/** イメージ効果 */
export const ImageEffective = {
    /**
     * Effect of color.
     * ---
     * 色の効果
     */
    COLOR : 'color',
    /**
     * Effect of fish eye.
     * ---
     * 魚眼レンズの効果
     */
    FISHEYE : 'fisheye',
    /**
     * Effect of whirl.
     * ---
     * 渦巻きの効果
     */
    WHIRL : 'whirl',
    /**
     * Effect of pixelate.
     * ---
     * ピクセル化の効果
     */
    PIXELATE : 'pixelate',
    /**
     * Effect of mosaic.
     * ---
     * モザイクの効果
     */
    MOSAIC : 'mosaic',
    /**
     * Effect of brightness.
     * ---
     * 明るさの効果
     */
    BRIGHTNESS : 'brightness',
    /**
     * Effect of ghost.
     * ---
     * 幽霊の効果
     */ 
    GHOST : 'ghost',
} as const;
export type ImageEffectiveKeys = keyof typeof ImageEffective;
type EnumKeyFields = {[key in ImageEffectiveKeys]:string};
export type IImageEffective = EnumKeyFields;
export type ImageEffectiveType = typeof ImageEffective;
export type TImageEffectiveValue = typeof ImageEffective[keyof ImageEffectiveType];