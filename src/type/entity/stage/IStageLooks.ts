import type { IEntityLooks } from '../entity/IEntityLooks';
import type { IStageLooksBackdrop } from './IStageLooksBackdrop';
/**
 * Stage Looks
 * ---
 * ステージの見た目
 */
export interface IStageLooks extends IEntityLooks {
    /**
     * Backdrop
     * ---
     * 背景に関する処理
     */
    readonly backdrop: IStageLooksBackdrop;
}

