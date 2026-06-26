import type { IMonitor } from "./monitor";
import { MonitoringVars } from "./monitoring";

/**
 * Monitors
 */
export interface SMonitors{
    /**
     * モニターを追加する.
     * @param vars 
     */
    addVar(vars: MonitoringVars):void;
    /**
     * モニターを再配置する
     */
    allReposition(): void;
    /**
     * 指定したIDのモニターを返す
     * @param monitorId {string}
     * @returns {Monitor}
     */
    getMonitor(monitorId: string): IMonitor;
    /**
     * 指定したIDのモニターを表示する
     * @param monitorId 
     */
    showMonitor(monitorId: string): void;
    /**
     * 指定したIDのモニターを隠す
     * @param monitorId {string}
     */
    hideMonitor(monitorId: string): void;

    /**
     * 全てのMonitorを描画する
     */
    drawMonitors() : void;

}
export interface IMonitors {
    /**
     * IDとラベルを指定して モニターを追加する.
     * IDが重複する場合は追加しない.
     * @param {string} monitorId - Monitor id 
     * @param {string} label - Monitor label 
     */
    add(vars: MonitoringVars): void;
    /**
     * 指定したIDのモニターを返す
     * @param monitorId {string}
     * @returns {Monitor}
     */
    get(monitorId: string): IMonitor;
    /**
     * 指定したIDのモニターを表示する
     * @param monitorId 
     */
    show(monitorId: string):void;
    /**
     * 指定したIDのモニターを隠す
     * @param monitorId {string}
     */
    hide(monitorId: string): void;
    /**
     * 全てのMonitorを描画する
     */
    draw(): void;

    /**
     * モニターを再配置する
     */
    reposition(): void;
};