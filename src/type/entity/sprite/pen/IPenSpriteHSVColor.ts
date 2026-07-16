import type { Hue, Saturation, Brightness, Transparency } from '../../../common/hsv';

export type HsvColor = {hue: number, saturation: number, brightness: number, transparency: number};

/**
 * PenSpriteHSVColor
 */
export interface IPenSpriteHSVColor {

    /**
     * HSVカラー
     * @returns {hue: number, saturation: number, brightness: number, transparency: number}
     */
    get hsv(): HsvColor;

    /** 
     * HSVカラーを設定する
     * @param color: {hue: number, saturation: number, brightness: number, transparency: number}
     */
    set hsv(color: HsvColor);

    /**
     * 色相 [0 - 360]
     */
    get hue() : number;
    /**
     * 色相 [0 - 360]
     * @param hue {Hue} - 色相 [0 - 360]
     */
    set hue(hue: Hue);
    /**
     * 彩度 [0 - 100]
     */
    get saturation() : number;
    /**
     * 彩度 [0 - 100]
     * @param saturation {number} - 彩度 [0 - 100]
     */
    set saturation(saturation: Saturation);
    /**
     * 明度 [0 - 100]
     */
    get brightness() : number;
    /**
     * 明度  [0 - 100]
     * @param brightness {Brightness} - 明度 [0 - 100]
     */
    set brightness(brightness: Brightness);
    /**
     * 透明度 [0 - 100]
     */
    get transparency() : number;
    /**
     * 透明度  [0 - 100]
     * @param transparency {Transparency} - 透明度 [0 - 100]
     */
    set transparency(transparency: Transparency);
}