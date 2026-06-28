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
     * 次の背景にして待つ
     */
    nextAndWait(): Promise<void>
    /**
     * 前の背景にする
     * ```ts
     *  this.Looks.Backdrop.previous();
     * ```
     */
    previous(): void;
    /**
     * 前の背景にして待つ
     */
    previousAndWait(): Promise<void>;
    /**
     * どれかの背景にする
     */
    switchRandom(): void;
    /**
     * どれかの背景にして待つ
     */
    switchRandomAndWait(): Promise<void>;
    /**
     * 背景を変えて待つ
     * @param backdropName 
     */
    switchAndWait(backdropName: string): Promise<void>;


}
