/** 背景 */
import type { IEntityLooksBackdrop } from "../entity/IEntityLooksBackdrop";
import type { IImage } from "../../image";
/**
 * StageBackdrop
 */
export interface IStageLooksBackdrop extends IEntityLooksBackdrop {

    /**
     * 現在のSkinID
     */
    readonly currentSkinId: number;

    /**
     * 次の背景にして待つ
     */
    nextAndWait(): Promise<void>
    /**
     * 前の背景にして待つ
     */
    previousAndWait(): Promise<void>;
    /**
     * どれかの背景にして待つ
     */
    switchRandomAndWait(): Promise<void>;
    /**
     * 背景を変えて待つ
     * @param backdrop
     */
    switchAndWait(backdrop: IImage): Promise<void>;

}
