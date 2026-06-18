/** 背景 */
import { IEntityLooksBackdrop } from "../entity/IEntityLooksBackdrop";
/**
 * StageBackdrop
 */
export interface IStageLooksBackdrop extends IEntityLooksBackdrop {

    /**
     * 現在のSkinID
     */
    readonly currentSkinId: number;


}
