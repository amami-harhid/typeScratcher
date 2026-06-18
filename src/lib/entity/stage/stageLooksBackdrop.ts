import { EntityBackdrop } from '../entity/entityBackdrop';
import { Stage } from '.';
import { StageBackdrop } from './stageBackdrop';
import type { IStage } from '../../../type/entity/stage';
import type { IStageLooksBackdrop } from '../../../type/entity/stage/IStageLooksBackdrop';

/** サイズ */
export class StageLooksBackdrop extends EntityBackdrop implements IStageLooksBackdrop{

    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
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
        const _entity = this.entity as Stage;
        return (_entity.Backdrop as StageBackdrop).name;
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        const _entity = this.entity as Stage;
        (_entity.Backdrop as StageBackdrop).name = name;
    }
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    async switchAndWait(backdropName: string) : Promise<void>{
        const _entity = this.entity as Stage;
        await (_entity.Backdrop as StageBackdrop).switchAndWait(backdropName);
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        const _entity = this.entity as Stage;
        (_entity.Backdrop as StageBackdrop).next();
    }
    /**
     * 次の背景にして待つ
     */
    async nextAndWait(): Promise<void> {
        const _entity = this.entity as Stage;
        await (_entity.Backdrop as StageBackdrop).nextAndWait();
    }
    /**
     * 前の背景にする
     */
    previous() : void {
        const _entity = this.entity as Stage;
        (_entity.Backdrop as StageBackdrop).previous();
    }

    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {
        const _entity = this.entity as Stage
        await (_entity.Backdrop as StageBackdrop).previousAndWait();
    }
    /**
     * どれかの背景にする
     */
    random(): void {
        const _entity = this.entity as Stage
        (_entity.Backdrop as StageBackdrop).random();
        
    }
    /**
     * どれかの背景にして待つ
     */
    async randomAndWait() : Promise<void>{
        
        const _entity = this.entity as Stage
        const backdropName = this.name;
        await (_entity.Backdrop as StageBackdrop).untilBackdropEventDone(backdropName);
    }
}
