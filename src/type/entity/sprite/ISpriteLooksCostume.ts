import type { IImage } from "../../image";

/** 
 * Sprite Costume 
 */
export interface ISpriteLooksCostume {

    /**
     * Current costume skin id
     */
    get currentSkinId() : number;

    /**
     * Costume index number
     */
    get no(): number;

    /**
     * Costume index number
     */
    set no(no:number);

    /**
     * Costume name
     */
    get name(): string;

    /**
     * Costume name
     */
    set name(name:string);

    /**
     * Change to the next costume
     */
    next(): void;
    
    /**
     * Change to the specified costume
     * 
     * @param costume 
     */
    switch(costume: IImage): void;
}
