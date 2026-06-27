import { Engine, engine } from "../../engine";
import { Env } from "../../common/env";
import { Monitor } from "./monitor";
import { Render } from "../../render";
import { S3MonitorSkin } from "./s3MonitorSkin";
import type { IMonitors } from "../../../type/entity/monitor";
import type { IRenderWebGL } from "../../../type/render/IRenderWebGL"; 
import { MonitoringVars } from "../../../type/entity/monitor/monitoring";
import { IMonitor } from "../../../type/entity/monitor/monitor";
/**
 * Monitors
 */
export class Monitors implements IMonitors{

    private static _instance: Monitors;
    private static getInstance(): Monitors {
        if(Monitors._instance == undefined) {
            Monitors._instance = new Monitors();
        }
        return Monitors._instance;
    }
    public static addVar(vars: MonitoringVars): void {
        const instance = Monitors.getInstance();
        instance.add(vars);
    }
    public static allReposition(): void {
        const instance = Monitors.getInstance();
        instance.reposition();
    }
    public static getMonitor(monitorId: string): IMonitor {
        const instance = Monitors.getInstance();
        return instance.get(monitorId);
    }
    public static showMonitor(monitorId: string): void {
        const instance = Monitors.getInstance();
        instance.show(monitorId);
    }
    public static hideMonitor(monitorId: string): void {
        const instance = Monitors.getInstance();
        instance.hide(monitorId);
    }
    public static drawMonitors() : void {
        const instance = Monitors.getInstance();
        instance.draw();
    }
    private _renderer: IRenderWebGL;
    private _monitors: Monitor[];
    private _render: Render;
    /**
     * @constructor
     */
    constructor() {
        this._monitors = [];
        this._render = (engine as Engine).render;
        this._renderer = this._render.renderer;
        const me = this;
        /**
         * (独自関数) monitorSkin を作成する
         * @param drawableID {number}
         * @param label {string}
         * @returns SkinId (number)
         */
        function s3CreateMonitorSkin(drawableID: number, label: string) :number {
            const skinId = me._renderer._nextSkinId++;
            const newSkin = new S3MonitorSkin(skinId, me._renderer, label );
            const drawable = me._renderer._allDrawables[drawableID];
            me._renderer._allSkins[skinId] = newSkin;
            drawable.skin = newSkin;
            return skinId;
        }
        /**
         * (独自関数) monitorSkin を取得する
         * @param skinId {number}
         * @returns {S3MonitorSkin}
         */
        function getS3Skin(skinId: number) : S3MonitorSkin{
            return me._renderer._allSkins[skinId] as S3MonitorSkin;
        }
        me._renderer.s3CreateMonitorSkin = s3CreateMonitorSkin;
        me._renderer.getS3Skin = getS3Skin;
    }
    /**
     * IDとラベルを指定して モニターを追加する.
     * IDが重複する場合は追加しない.
     * @param {string} monitorId - Monitor id 
     * @param {string} label - Monitor label 
     */
    add(vars: MonitoringVars): void {
        for(const [monitorId, monitoring] of Object.entries(vars)){
            for(const _monitor of this._monitors){
                if(monitorId === _monitor.monitorId) {
                    return;
                }
            }
            const monitor = new Monitor(monitorId, monitoring);
            monitor.createTextSkin();
            monitor.scale = {w: 100, h:100};
            this._monitors.push(monitor);
            this.reposition();
            break;
        }
    }
    /**
     * 表示中のモニターを選び再配置する
     */
    reposition() : void {
        let counter = 0;
        for(let _idx = 0; _idx < this._monitors.length; _idx++){
            const monitor = this._monitors[_idx];
            if(monitor.visible === true){
                this._reposition(monitor, counter);
                counter+=1;
            }
        }
        this.draw();
    }
    private _reposition(monitor: Monitor, index: number) : void {
        const _column = Math.floor( (index) / Env.MonitorMaxRowSize);
        const _row = (index) % Env.MonitorMaxRowSize;
        monitor.position.x = 0;
        const size = index+1;
        const sWidth = this._render.stageWidth;
        const sHeight = this._render.stageHeight;
        const startRowPos = 5;
        const startColumnPos = 5;
        const rowFiller = 5;
        const columnFiller = 5;
        if(_column == 0) {
            // 1列目の場合
            const x = startColumnPos - Math.floor(sWidth/2);
            if( _row == 0 ) {
                // 1行目の場合
                const y = Math.floor(sHeight/2) - startRowPos;
                monitor.position.x = x;
                monitor.position.y = y;
            }else{
                // 2行目以降の場合
                const preMonitor = this._monitors[size-2];
                // 1つ前のモニターのy座標
                const preMonitorY = preMonitor.position.y;
                const preMonitorDrawableId = preMonitor.drawableID;
                const bounds = this._renderer.getBounds(preMonitorDrawableId);
                // 1つ前のモニターの高さ
                const h = Math.abs( bounds.top - bounds.bottom ); //*preMonitor.scale.h/100;
                monitor.position.x = x;
                const y = preMonitorY - h - rowFiller;
                monitor.position.y = y;
            }
        }else{
            // ひとつ前の列の同じ行のモニター
            const idx = size - Env.MonitorMaxRowSize;
            const preColumnMonitor = this._monitors[idx-1];
            // X 座標
            const preColumnMonitorX = preColumnMonitor.position.x;
            const preColumnMonitorId = preColumnMonitor.drawableID;
            const bounds = this._renderer.getBounds(preColumnMonitorId);
            // 幅
            const w = Math.abs(bounds.right - bounds.left); //*preColumnMonitor.scale.w/100;
            // 新X
            monitor.position.x = preColumnMonitorX + w + columnFiller;
            if( _row == 0 ) {
                monitor.position.y = Math.floor(sHeight/2) - startRowPos;
            }else{
                // ひとつ前
                const preMonitor = this._monitors[size-2];
                // 1つ前のモニターのy座標
                const preMonitorY = preMonitor.position.y;
                const preMonitorDrawableId = preMonitor.drawableID;
                const bounds = this._renderer.getBounds(preMonitorDrawableId);
                // 1つ前のモニターの高さ
                const h = Math.abs( bounds.top - bounds.bottom ); //*preMonitor.scale.h/100;
                const y = preMonitorY - h - rowFiller;
                monitor.position.y = y;
            }

        }

    }
    /**
     * 指定したIDのモニターを返す
     * @param monitorId {string}
     * @returns {IMonitor}
     */
    get(monitorId: string): IMonitor{
        for(const _monitor of this._monitors){
            if(monitorId === _monitor.monitorId){
                return _monitor;
            }
        }
        throw `指定した${monitorId}のMonitorはありません`;
    }
    /**
     * 指定したIDのモニターを表示する
     * @param monitorId 
     */
    show(monitorId: string): void{
        console.log(this._monitors);
        for(const _monitor of this._monitors){
            if(monitorId === _monitor.monitorId){
                _monitor.show();
                _monitor.draw();
                return;
            }
        }
        throw `指定した${monitorId}のMonitorはありません`;
    }
    /**
     * 指定したIDのモニターを隠す
     * @param monitorId {string}
     */
    hide(monitorId: string): void{
        for(const _monitor of this._monitors){
            if(monitorId === _monitor.monitorId){
                _monitor.hide();
                _monitor.draw();
                return;
            }
        }
        throw `指定した${monitorId}のMonitorはありません`;
    }
    /**
     * 全てのMonitorを描画する
     */
    draw() {
        for(const _monitor of this._monitors){
            _monitor.draw();
        }
    }
};