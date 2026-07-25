/** 背景 */
import type { IEntityLooksBackdrop } from "../entity/IEntityLooksBackdrop";
import type { IImage } from "../../image";
/**
 * StageBackdrop
 */
export interface IStageLooksBackdrop extends IEntityLooksBackdrop {

    /**
     * SkinID of current backdrop.
     * 
     * ---
     * 現在の背景のSkinID
     */
    readonly currentSkinId: number;

    /**
     * Change to the next background and wait.
     * 
     * ---
     * 次の背景にして待つ
     */
    nextAndWait(): Promise<void>

    /**
     * Change to the previous background and wait.
     * 
     * ---
     * 前の背景にして待つ
     */
    previousAndWait(): Promise<void>;

    /**
     * Change to the random background and wait.
     * 
     * ---
     * どれかの背景にして待つ
     */
    switchRandomAndWait(): Promise<void>;

    /**
     * Change to the specified background and wait.
     * 
     * ---
     * 指定した背景に変えて待つ
     * 
     * @param backdrop
     */
    switchAndWait(backdrop: IImage): Promise<void>;

}
