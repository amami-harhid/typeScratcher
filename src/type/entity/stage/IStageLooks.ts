import type { IEntityLooks } from '../entity/IEntityLooks';
import type { IStageLooksBackdrop } from './IStageLooksBackdrop';
/**
 * Sprite Looks(見た目)
 */
export interface IStageLooks extends IEntityLooks {
    /**
     * 背景
     */
    readonly backdrop: IStageLooksBackdrop;
}

