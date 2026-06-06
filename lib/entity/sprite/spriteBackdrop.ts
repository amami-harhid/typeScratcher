import type { ISpriteBackdrop } from '../../type/sprite/ISpriteBackdrop';
import type { ISprite } from '../../type/sprite';
/** 背景 */
export class SpriteBackdrop implements ISpriteBackdrop {

    protected entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
        // TODO
        return -1;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.Backdrop.no = 1;
     * ```
     */
    set no(no:number) {
        // TODO
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string {
        // TODO
        return "";
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        // TODO
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        // TODO
    }
    /**
     * 前の背景にする
     */
    previous(): void {
        // TODO
    }
    /**
     * どれかの背景にする
     */
    random(): void {
        // TODO
    }
}
