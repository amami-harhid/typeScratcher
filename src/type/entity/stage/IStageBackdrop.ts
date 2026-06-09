/** 背景 */
import type { IEntityBackdrop } from "../entity/IEntityBackdrop";
import type { IImage } from "../../image";
/**
 * StageBackdrop
 */
export interface IStageBackdrop extends IEntityBackdrop {
    /**
     * コスチューム名 配列
     */
    readonly names : string[];
    /**
     * 現在のSkinID
     */
    readonly currentSkinId: number;
    /**
     * イメージを追加する
     * @param images 
     */
    add(images: IImage[]): void;

}
