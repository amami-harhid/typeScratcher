import { IStageBackdrop } from '@Type/stage/IStageBackdrop';
import { Stage } from '../stage';

/** サイズ */
export class StageBackdrop implements IStageBackdrop {

    private entity: Stage;
    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:Stage){
        this.entity = entity;
    }
    /**
     * 背景名の配列
     */
    get names() : string[] {
        return [];
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
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

    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string {
        return '';
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {

    }
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    async switchAndWait(name: string) : Promise<void>{

    }

    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {

    }
    /**
     * 次の背景にして待つ
     */
    async nextAndWait(): Promise<void> {

    }
    /**
     * 前の背景にする
     */
    previous() : void {

    }
    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {

    }
    /**
     * どれかの背景にする
     */
    random(): void {

    }
    /**
     * どれかの背景にして待つ
     */
    async randomAndWait() : Promise<void>{

    }
}
