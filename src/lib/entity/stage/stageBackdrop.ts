import { EntityBackdrop } from '../entity/entityBackdrop';
import type { IImage } from '../../../type/image';
import type { IStage } from '../../../type/entity/stage';
import type { IStageBackdrop } from '../../../type/entity/stage/IStageBackdrop';

/** サイズ */
export class StageBackdrop extends EntityBackdrop implements IStageBackdrop {

    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
    }
    /**
     * 背景名の配列
     */
    get names() : string[] {
        return super.names;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
        return super.no;    
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.Backdrop.no = 1;
     * ```
     */
    set no(no:number) {
        super.no = no;
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string {
        return super.name;
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        super.name = name;
    }
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    async switchAndWait(backdrop: IImage) : Promise<void>{
        await super.switchAndWait(backdrop);
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        super.next();
    }
    /**
     * 次の背景にして待つ
     */
    async nextAndWait(): Promise<void> {
        await super.nextAndWait();
    }
    /**
     * 前の背景にする
     */
    previous() : void {
        super.previous();
    }

    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {
        await super.previousAndWait();
    }
    /**
     * どれかの背景にする
     */
    switchRandom(): void {
        super.switchRandom();
        
    }
    /**
     * どれかの背景にして待つ
     */
    async switchRandomAndWait() : Promise<void>{
        const backdropName = this.name;
        await super.untilBackdropEventDone(backdropName);
    }
}
