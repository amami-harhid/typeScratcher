/** 背景 */
import type { IEntityBackdrop } from "../entity/IEntityBackdrop";
import type { IImage } from "../../image";
/**
 * StageBackdrop
 */
export interface IStageBackdrop extends IEntityBackdrop {
    /**
     * Names of Backdrop iamges
     * 
     * ---
     * 背景のイメージ名(配列)
     */
    readonly names : string[];

    /**
     * Add Backdrop images
     * 
     * ---
     * 背景イメージを追加する
     * 
     * @param images 
     */
    add(...images: IImage[]): void;

}
