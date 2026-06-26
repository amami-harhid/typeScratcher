import { MonitoringNumber , MonitoringString } from "./monitoring";

/**
 * 変数格納プロキシ生成
 */
export interface SVar {

    /**
     * 数値プロキシ生成
     * @param obj 
     */
    num(obj:MonitoringNumber) : MonitoringNumber;
    /**
     * 文字列プロキシ生成
     * @param obj 
     */
    str(obj:MonitoringString) : MonitoringString;
}