import type { Hue, Saturation, Brightness, Transparency } from '../../../common/hsv';

export type HsvColor = {hue: number, saturation: number, brightness: number, transparency: number};

/**
 * PenSpriteHSVColor
 */
export interface IPenSpriteHSVColor {

    /**
     * HSV Color
     * ---
     * HSV カラー
     * 
     * @returns {hue: number, saturation: number, brightness: number, transparency: number}
     */
    get hsv(): HsvColor;

    /** 
     * HSV Color
     * ---
     * HSVカラー
     * 
     * @param color: {hue: number, saturation: number, brightness: number, transparency: number}
     */
    set hsv(color: HsvColor);

    /**
     * Hue [0 - 360]
     * ---
     * 色相
     */
    get hue() : number;

    /**
     * Hue [0 - 360]
     * ---
     * 色相
     * 
     * @param hue {Hue} - hue [0 - 360]
     */
    set hue(hue: Hue);

    /**
     * Saturation [0 - 100]
     * ---
     * 彩度
     */
    get saturation() : number;
    /**
     * Saturation [0 - 100]
     * ---
     * 彩度
     * 
     * @param saturation {number} - Saturation [0 - 100]
     */
    set saturation(saturation: Saturation);

    /**
     * Brightness [0 - 100]
     * ---
     * 明るさ
     */
    get brightness() : number;

    /**
     * Brightness  [0 - 100]
     * ---
     * 明るさ
     * 
     * @param brightness {Brightness} - Brightness [0 - 100]
     */
    set brightness(brightness: Brightness);

    /**
     * Transparency [0 - 100]
     * ---
     * 透明度
     */
    get transparency() : number;

    /**
     * Transparency  [0 - 100]
     * ---
     * 透明度
     * 
     * @param transparency {Transparency} - Transparency [0 - 100]
     */
    set transparency(transparency: Transparency);
}