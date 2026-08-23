import { MonitoringVars, NumberProxy, StringProxy } from "./monitoring";

/**
 * Variable-Storing Proxy 
 */
export interface SVariable {

    /**
     * Numeric-type Proxy Generation
     * 
     * ---
     * 数値型の変数定義(Proxy)
     * 
     * @param value 
     */
    number(value:number) : NumberProxy;
    /**
     * String-type proxy generation
     * 
     * ---
     * 文字列型の変数定義(Proxy)
     * 
     * @param text
     */
    string(text:string) : StringProxy;

    // /**
    //  * monitoring
    //  * 
    //  * ---
    //  * 変数を監視対象にする
    //  * 
    //  * @param variable 
    //  */
    // monitoring( variable: MonitoringVars | NumberProxy | StringProxy): void

    /**
     * reposition monitors
     * 
     * ---
     * 変数表示の場所を再配置する
     */
    reposition() : void;
}