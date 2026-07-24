import { MonitoringVars, NumberProxy, StringProxy } from "./monitoring";

/**
 * Variable-Storing Proxy 
 */
export interface SVariable {

    /**
     * Numeric-type Proxy Generation
     * 
     * @param value 
     */
    number(value:number) : NumberProxy;
    /**
     * String-type proxy generation
     * 
     * @param text
     */
    string(text:string) : StringProxy;

    /**
     * monitoring
     * @param variable 
     */
    monitoring( variable: MonitoringVars): void

    /**
     * reposition monitors
     */
    reposition() : void;
}