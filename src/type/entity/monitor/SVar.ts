import { NumberProxy, StringProxy } from "./monitoring";

/**
 * Variable-Storing Proxy Generation
 */
export interface SVar {

    /**
     * Numeric-type Proxy Generation
     * @param value 
     */
    number(value:number) : NumberProxy;
    /**
     * String-type proxy generation
     * @param text
     */
    string(text:string) : StringProxy;
}