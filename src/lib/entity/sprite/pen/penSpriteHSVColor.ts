import { PenSprite } from '../pen';
import type { HsvColor } from '../../../../type/entity/sprite/pen/IPenSpriteHSVColor';

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
     * 色相 [0 - 360]
     */
    get hue() : number {
        return this.penSprite._penAttributes.color4f[0];
    }
    /**
     * 色相 [0 - 360]
     * @param hue {number} - 色相 [0 - 360]
     */
    set hue(hue: number) {
        this.penSprite.setPenHue(hue);
    }
    /**
     * 彩度  [0 - 100]
     */
    get saturation() : number {
        return this.penSprite._penAttributes.color4f[1];
    }
    /**
     * 彩度 [0 - 100]
     * @param saturation {number} - 彩度 [0 - 100]
     */
    set saturation(saturation: number) {
        this.penSprite.setPenSaturation(saturation);
    }
    /**
     * 明度 [0 - 100]
     */
    get brightness() : number {
        return this.penSprite._penAttributes.color4f[2];
    }
    /**
     * 明度 [0 - 100]
     * @param brightness {number} - 明度 [0 - 100]
     */
    set brightness(brightness: number) {
        this.penSprite.setPenBrightness(brightness);
    }
    /**
     * 透明度 [0 - 100]
     */
    get transparency() : number {
        return this.penSprite._penAttributes.color4f[3];
    }
    /**
     * 透明度 [0 - 100]
     * @param transparency {number} - 透明度 [0 - 100]
     */
    set transparency(transparency: number) {
        this.penSprite.setPenTransparency(transparency);
    }

    get hsv(): HsvColor {
        const _hsv: HsvColor = {
            hue: this.hue,
            saturation: this.saturation,
            brightness: this.brightness,
            transparency: this.transparency,
        }
        return _hsv;
    }

    set hsv(color: HsvColor) {
        this.hue = color.hue;
        this.saturation = color.saturation;
        this.brightness = color.brightness;
        this.transparency = color.transparency;
    }

}