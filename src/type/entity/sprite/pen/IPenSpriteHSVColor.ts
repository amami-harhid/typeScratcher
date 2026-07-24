import type { Hue, Saturation, Brightness, Transparency } from '../../../common/hsv';

export type HsvColor = {hue: number, saturation: number, brightness: number, transparency: number};

/**
 * PenSpriteHSVColor
 */
export interface IPenSpriteHSVColor {

    /**
     * HSV Color
     * 
     * @returns {hue: number, saturation: number, brightness: number, transparency: number}
     */
    get hsv(): HsvColor;

    /** 
     * Set HSV Color
     * @param color: {hue: number, saturation: number, brightness: number, transparency: number}
     */
    set hsv(color: HsvColor);

    /**
     * Hue [0 - 360]
     */
    get hue() : number;
    /**
     * Hue [0 - 360]
     * 
     * @param hue {Hue} - hue [0 - 360]
     */
    set hue(hue: Hue);

    /**
     * Saturation [0 - 100]
     */
    get saturation() : number;
    /**
     * Saturation [0 - 100]

    * @param saturation {number} - Saturation [0 - 100]
     */
    set saturation(saturation: Saturation);

    /**
     * Brightness [0 - 100]
     */
    get brightness() : number;

    /**
     * Brightness  [0 - 100]
     * @param brightness {Brightness} - Brightness [0 - 100]
     */
    set brightness(brightness: Brightness);

    /**
     * Transparency [0 - 100]
     */
    get transparency() : number;

    /**
     * Transparency  [0 - 100]
     * @param transparency {Transparency} - Transparency [0 - 100]
     */
    set transparency(transparency: Transparency);
}