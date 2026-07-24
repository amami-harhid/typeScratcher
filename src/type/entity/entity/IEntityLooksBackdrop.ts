import { IImage } from "src/type/image";

/** 背景 */
export interface IEntityLooksBackdrop {
    /**
     * Background index number
     */
    get no(): number;
    /**
     * Background index number
     */
    set no(no:number);
    /**
     * Name of background
     */
    get name(): string;
    /**
     * Name of background
     */
    set name(backdropName:string);
    /**
     * Change to the next background
     */
    next() : void;

    /**
     * Change to the specified background.
     * @param backdrop 
     */
    switch(backdrop: IImage): void;

    /**
     * Change to the previous background
     */
    previous(): void;
    /**
     * Change to the random background
     */
    switchRandom(): void;


}
