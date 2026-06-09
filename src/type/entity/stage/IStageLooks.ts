import type { IEntityLooks } from '../entity/IEntityLooks';
import type { IStageBackdrop } from './IStageBackdrop';
import type { IStageEffect } from './IStageEffect';
/**
 * Sprite Looks(見た目)
 */
export interface IStageLooks extends IEntityLooks{
    /**
     * 背景番号、背景名を取り出すためのオブジェクト
     * ```ts
     *  // 次の背景にする
     *  this.Looks.Backdrop.next();
     * ```
     */
    get backdrop(): IStageBackdrop;

};

