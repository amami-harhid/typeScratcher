import type { IMonitor } from "./monitor";
import { MonitoringVars } from "./monitoring";

/**
 * Monitors
 */
export interface SMonitors{
    /**
     * Add a variable monitor.
     * @param vars 
     */
    addVar(vars: MonitoringVars):void;
    /**
     * Reposition the variable monitor.
     */
    allReposition(): void;
    /**
     * Returns the variable monitor for the specified ID.
     * 
     * @param monitorId {string}
     * @returns {Monitor}
     */
    getMonitor(monitorId: string): IMonitor;
    /**
     * Display the variable monitor for the specified ID.
     * 
     * @param monitorId 
     */
    showMonitor(monitorId: string): void;
    /**
     * Hide the variable monitor with the specified ID.
     * 
     * @param monitorId {string}
     */
    hideMonitor(monitorId: string): void;

    /**
     * Draw all Monitor variables.
     */
    drawMonitors() : void;

}
export interface IMonitors {
    /**
     * Add a variable monitor by specifying the ID and label.
     * Do not add if the ID is a duplicate.
     * 
     * @param {string} monitorId - Monitor id 
     * @param {string} label - Monitor label 
     */
    add(vars: MonitoringVars): void;
    /**
     * Returns the variable monitor for the specified ID.
     * 
     * @param monitorId {string}
     * @returns {Monitor}
     */
    get(monitorId: string): IMonitor;
    /**
     * Display the variable monitor for the specified ID.
     * 
     * @param monitorId 
     */
    show(monitorId: string):void;
    /**
     * Hide the variable monitor with the specified ID.
     * 
     * @param monitorId {string}
     */
    hide(monitorId: string): void;
    /**
     * Draw all Monitor variables.
     */
    draw(): void;

    /**
     * Reposition the variable monitor.
     */
    reposition(): void;
};