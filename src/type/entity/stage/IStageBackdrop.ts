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
    
    add(image: IImage): void;

    switchAndWait(name: string): Promise<void>;

    nextAndWait(): Promise<void>;

    previousAndWait(): Promise<void>;

    randomAndWait(): Promise<void>;
}
