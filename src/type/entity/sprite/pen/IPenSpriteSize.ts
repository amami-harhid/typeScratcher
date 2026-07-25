/**
 * ペンサイズ
 */
export interface IPenSpriteSize {
    /** 
     * Thickness
     * ---
     * ペンの太さ
     */
    get thickness() : number;

    /**
     * Thickness
     * ---
     * ペンの太さ
     */
    set thickness(thickness: number);
}