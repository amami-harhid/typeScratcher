import { NumberProxy, StringProxy } from "./monitoring";

/**
 * Variable-Storing Proxy Generation
 */
export interface SVar {

    /**
     * Numeric-type Proxy Generation
     * 
     * ---
     * 数値型の変数を定義
     * 
     * @param value 
     */
    number(value:number) : NumberProxy;

    /**
     * String-type proxy generation
     * 
     * ---
     * 文字列型の変数を定義
     * 
     * @param text
     */
    string(text:string) : StringProxy;
}