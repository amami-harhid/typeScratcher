import { Utils } from "../utils/utils";
import type { IOperations } from "../../type/operations";

class Operations implements IOperations {
    /**
     * min,max の範囲でランダム値を取得する
     * min,max 両方とも整数の場合、min,maxを含む整数のランダム値を返す
     * 上記以外の場合は minを含みmaxを含まない範囲で小数値のランダム値を返す。
     * @param min 
     * @param max 
     * @returns 
     */
    randomValue(min: number, max: number): number {
        return Utils.randomizeInRange(min, max);
    }

}

/**
 * 演算
 */
export const operations = new Operations();