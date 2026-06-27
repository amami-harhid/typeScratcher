import { NumberProxy, StringProxy } from "./monitoring";

/**
 * 変数格納プロキシ生成
 */
export interface SVar {

    /**
     * 数値プロキシ生成
     * @param value 
     */
    number(value:number) : NumberProxy;
    /**
     * 文字列プロキシ生成
     * @param text
     */
    string(text:string) : StringProxy;
}