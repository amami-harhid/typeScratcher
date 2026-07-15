import { IImage } from "src/type/image";

/** 背景 */
export interface IEntityLooksBackdrop {
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number;
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.Backdrop.no = 1;
     * ```
     */
    set no(no:number);
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string;
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(backdropName:string);
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.next();
     * ```
     */
    next() : void;

    /**
     * 指定した背景にする
     * @param backdrop 
     */
    switch(backdrop: IImage): void;

    /**
     * 前の背景にする
     * ```ts
     *  this.Looks.Backdrop.previous();
     * ```
     */
    previous(): void;
    /**
     * どれかの背景にする
     */
    switchRandom(): void;


}
