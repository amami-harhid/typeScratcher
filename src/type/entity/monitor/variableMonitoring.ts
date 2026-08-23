import { StringProxy, NumberProxy } from "./monitoring"
/**
 * モニタリングの引数
 */
export interface VariableMonitorParam  {
    [key : string]: StringProxy | NumberProxy
}

export interface SVariableMonitoring {

    new( obj : VariableMonitorParam ):IVariableMonitoring;
    
}

export interface IVariableMonitoring {
    /** 表示する */
    show(): void;
    /** 隠す */
    hide(): void;
}