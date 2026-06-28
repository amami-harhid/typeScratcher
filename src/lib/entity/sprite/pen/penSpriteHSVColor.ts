import { PenSprite } from '../pen';
/**
 * PenSpriteHSVColor
 */
export class PenSpriteHSVColor {
    private penSprite: PenSprite;
    /**
     * @constructor
     * @param penSprite { PenSprite } 
     */
    constructor(penSprite: PenSprite){
        this.penSprite = penSprite;
    }
    /**
     * 色相
     */
    get hue() : number {
        return this.penSprite._penAttributes.color4f[0];
    }
    /**
     * 色相
     * @param hue {number} - 色相 [0 - 360]
     */
    set hue(hue: number) {
        this.penSprite.setPenHue(hue);
    }
    /**
     * 彩度
     */
    get saturation() : number {
        return this.penSprite._penAttributes.color4f[1];
    }
    /**
     * 彩度
     * @param saturation {number} - 彩度 [0 - 100]
     */
    set saturation(saturation: number) {
        this.penSprite.setPenSaturation(saturation);
    }
    /**
     * 明度
     */
    get brightness() : number {
        return this.penSprite._penAttributes.color4f[2];
    }
    /**
     * 明度
     * @param brightness {number} - 明度 [0 - 100]
     */
    set brightness(brightness: number) {
        this.penSprite.setPenBrightness(brightness);
    }
    /**
     * 透明度
     */
    get transparency() : number {
        return this.penSprite._penAttributes.color4f[3];
    }
    /**
     * 透明度
     * @param transparency {number} - 透明度 [0 - 100]
     */
    set transparency(transparency: number) {
        this.penSprite.setPenTransparency(transparency);
    }
}