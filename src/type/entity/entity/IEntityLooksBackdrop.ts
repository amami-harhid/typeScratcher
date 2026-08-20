import { IImage } from "../../image";

/** 
 * Backdrop
 * ---
 * 背景 に関する操作
 */
export interface IEntityLooksBackdrop {
    /**
     * Background index number
     * 
     * ---
     * 背景のインデクス値
     */
    get no(): number;
    
    /**
     * Background index number
     * 
     * ---
     * 背景のインデクス値
     */
    set no(no:number);
    /**
     * Name of background
     * 
     * ---
     * 背景の名前
     */
    get name(): string;

    /**
     * Name of background
     * 
     * ---
     * 背景の名前
     */
    set name(backdropName:string);

    /**
     * Change to the next background
     * 
     * ---
     * 次の背景にする
     */
    next() : void;

    /**
     * Change to the specified background.
     * 
     * ---
     * 指定した背景にする
     * 
     * @param backdrop 
     */
    switch(backdrop: IImage): void;

    /**
     * Change to the previous background
     * 
     * ---
     * 前の背景にする
     */
    previous(): void;

    /**
     * Change to the random background
     * 
     * ---
     * ランダムな背景にする
     */
    switchRandom(): void;


}
