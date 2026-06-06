import type { IImage } from "../../image";

/** コスチューム */
export interface ISpriteCostume {
    /**
     * 画像を追加
     * @param image 
     */
    add(image: IImage) : void;

    /**
     * コスチューム名 配列
     */
    readonly names : string[]
    /**
     * コスチューム番号
     * ```ts
     *  // コスチューム番号
     *  const no = this.Looks.Costume.no;
     * ```
     */
    get no(): number;

    /**
     * 現在のSkinID
     */
    get currentSkinId() : number;

    /**
     * コスチューム番号
     * ```ts
     *  // コスチューム番号
     *  this.Looks.Costume.no = 1;
     * ```
     */
    set no(no:number);
    /**
     * コスチューム名
     * ```ts
     *  // コスチューム名
     *  const name = this.Looks.Costume.name;
     * ```
     */
    get name(): string;
    /**
     * コスチューム名
     * ```ts
     *  // コスチューム名
     *  this.Looks.Costume.name = "Cat01";
     * ```
     */
    set name(name:string);

    /**
     * 次のコスチュームにする
     */
    next(): void;

}
