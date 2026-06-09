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
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    switchAndWait(name: string): Promise<void>;
    /**
     * 次の背景にして待つ
     */
    nextAndWait(): Promise<void>;

    /**
     * 前の背景にして待つ
     */
    previousAndWait(): Promise<void>;

    /**
     * ランダムな背景にして待つ
     */
    randomAndWait(): Promise<void>;
}
