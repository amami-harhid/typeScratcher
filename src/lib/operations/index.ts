import { Utils } from "../utils/utils";
import type { IOperations } from "../../type/operations";

class Operations implements IOperations {
    /**
     * min,max の範囲でランダム値を取得する
     * （範囲：min/max を含む）
     * min,max に少数点があるとき少数部を切り捨てて範囲とする
     * @param min 
     * @param max 
     * @returns 
     */
    randomValue(min: number, max: number): number {
        return Utils.randomValue(min, max);
    }
    /**
     * min,max の範囲でランダム値を取得する
     * minを含みmaxを含まない範囲で小数値のランダム値を返す。
     * @param min 
     * @param max 
     * @returns 
     */
    randomDecimalValue(min: number, max: number): number {
        return Utils.randomDecimalValue(min, max);
    }
}

/**
 * 演算
 */
export const operations = new Operations();