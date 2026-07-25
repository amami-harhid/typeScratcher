/**
 * Sprite Scale
 */
export interface ISpriteLooksSizeScale {
    /**
     * Scale width (%)
     * 
     * ---
     * 横の大きさ(%)
     */
    get w(): number;

    /**
     * Scale height (%)
     * 
     * ---
     * 縦の大きさ(%)
     */
    get h(): number;

    /**
     * Scale width (%)
     * 
     * ---
     * 横の大きさ(%)
     */
    set w(w:number);

    /**
     * Scale height (%)
     * 
     * ---
     * 縦の大きさ(%)
     */
    set h(h:number);

}