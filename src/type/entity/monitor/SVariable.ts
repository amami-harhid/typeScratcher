import { MonitoringVars, NumberProxy, StringProxy } from "./monitoring";

/**
 * 変数格納プロキシ生成
 */
export interface SVariable {

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

    /**
     * モニタリングする
     * @param variable 
     */
    monitoring( variable: MonitoringVars): void

    /**
     * 表示中のモニター枠を再配置する
     */
    reposition() : void;
}