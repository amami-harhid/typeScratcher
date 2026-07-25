import type { IImage } from "../../image";

/** 
 * Sprite Costume 
 */
export interface ISpriteLooksCostume {

    /**
     * Current costume skin id
     * 
     * ---
     * コスチュームのSkinId
     */
    //get currentSkinId() : number;

    /**
     * Costume index number
     * 
     * ---
     * コスチュームのインデクス番号
     */
    get no(): number;

    /**
     * Costume index number
     * 
     * ---
     * コスチュームのインデクス番号
     */
    set no(no:number);

    /**
     * Costume name
     * 
     * ---
     * コスチュームのイメージの名前
     */
    get name(): string;

    /**
     * Costume name
     * 
     * ---
     * コスチュームのイメージの名前
     */
    set name(name:string);

    /**
     * Change to the next costume
     * 
     * ---
     * 次のコスチュームにする
     */
    next(): void;
    
    /**
     * Change to the specified costume
     * 
     * ---
     * 指定したコスチュームにする
     * 
     * @param costume 
     */
    switch(costume: IImage): void;
}
