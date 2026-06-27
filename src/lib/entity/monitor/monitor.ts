import { engine, Engine } from "../../engine";
import { Entity } from "../entity";
import { S3MonitorSkin } from "./s3MonitorSkin";
import { ScratchElement } from "../../gui/scratchElement";
import { StageLayering } from "../../../type/entity/stage/CStageLayering";
import { Utils } from "../../utils/utils";
import type { IRenderWebGL, ScratchRenderProperties } from "../../../type/render/IRenderWebGL";
import type { TPosition, TScale, TDistance} from "../../../type/common/typeCommon";
import type { IMonitor } from "../../../type/entity/monitor/monitor";
import type { MonitoringNumber, MonitoringString, NumberProxy, StringProxy } from "../../../type/entity/monitor/monitoring";

/**
 * Monitor
 */
export class Monitor extends Entity implements IMonitor{
    static Events = {
        DROP_START: 'DropStart',
        DROP_COMPLETE: 'DropComplete'    
    }
    private _monitorId!: string;
    private _label!: string;
    private _visible: boolean;
    private _skin!: S3MonitorSkin;
    private _skinId: number;
    private _renderer: IRenderWebGL;
    private _position: TPosition;
    private _scale: TScale;
    private _dropEnabled: boolean;
    private _moveDistance: TDistance;
    private _monitoring! : MonitoringNumber | MonitoringString;
    //private _preDraw: boolean;
    /**
     * @constructor
     * @param monitorId {string}
     * @param label {string}
     */
    constructor(monitorId:string, value: NumberProxy | StringProxy){
        super();
        this._monitorId = monitorId;
        this._monitoring = value;
        this._label = monitorId;
        this.createDrawable(StageLayering.MONITOR_LAYER);
        //this._monitorId = monitorId;
        this._visible = true;
        //this._label = label;
        this._skinId = 0;
        this._renderer = this._render.renderer;
        this._position = {x: 0, y: 0};
        this._scale = {w: 100, h: 100};
        this._dropEnabled = true;
        this._moveDistance = {};
        //this._preDraw = false;
        const me = this;
        const _engine = (engine as Engine);
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        scratchEvent.on(Monitor.Events.DROP_START, (senderDrawableID:number)=>{
            if( me.drawableID === senderDrawableID) {
                // DROP開始したモニターは階層最上位にする
                me._renderer.setDrawableOrder(me.drawableID, Infinity, 
                    StageLayering.MONITOR_LAYER, true);
                // マウスが触った場所と左上隅の距離（位置関係）を記録する。モニターDROP時に利用する
                me._moveDistance = {
                    x: _engine.mouse.scratchX - me._position.x,
                    y: _engine.mouse.scratchY - me._position.y,
                };
                if(me._skin)
                    me._skin.dropping = true;
            }else{
                me._dropEnabled = false;
                me._moveDistance = {};
                if(me._skin)
                    me._skin.dropping = false;
            }
        });
        scratchEvent.on(Monitor.Events.DROP_COMPLETE, ()=>{
            me._dropEnabled = true;
            me._moveDistance = {};
            if(me._skin)
                me._skin.dropping = false;
        });

        this._monitoring.callback = () => {
            if("value" in this._monitoring){
                if( this._skin ) {
                    this._skin.value = this._monitoring.value;
                }
            
            } else if("text" in this._monitoring){
                if(this._skin){
                    // 文字列化して格納
                    this._skin.text = this._monitoring.text;
                }
            }
        }
        this._monitoring.show = () => {
            this.show();
        }
        this._monitoring.hide = () => {
            this.hide();
        }
        //this._preDraw = true;
    }
    get monitorId() {
        return this._monitorId;
    }
    get position() {
        return this._position;
    }
    set position(_position){
        if( _position != undefined && _position.x != undefined && _position.y != undefined ) {
            if(Utils.isNumber(_position.x) && Utils.isNumber(_position.y)){                
                this._position.x = _position.x;
                this._position.y = _position.y;
                this.renderDraw();
            }
        }
    }
    get scale() {
        return this._scale;
    }
    set scale(_scale){
        if( _scale != undefined && _scale.w != undefined && _scale.h != undefined ) {
            if(Utils.isNumber(_scale.w) && Utils.isNumber(_scale.h)){
                this._scale.w = _scale.w;
                this._scale.h = _scale.h;
                this.renderDraw();
            }
        }
    }
    show () {
        this._visible = true;
        if(this._skin != null){
            this._skin.show();
        }
    }
    hide () {
        this._visible = false;
        if(this._skin != null){
            this._skin.hide();
        }
    }
    get visible () : boolean {
        return this._visible;
    }
    createTextSkin(){
        const skinId = this._renderer.s3CreateMonitorSkin(this.drawableID, this._label);
        this._skinId = skinId;
        this._skin = this._renderer.getS3Skin(skinId) as S3MonitorSkin;
    }
    get skin () {
        return this._skin;
    }
    set skin( _skin ){
        this._skin = _skin;
    }
    getDefaultHeight() {
        if(this._skin){
            return this._skin.getDefaultHeight();
        }
        return 0;
    }
    getDrawingDimension(){
        let width = 0;
        let height = 0
        const drawable = this._renderer._allDrawables[this.drawableID];
        if(drawable != null) {
            const bounds = this._renderer.getBounds(this.drawableID);
            height = Math.abs(bounds.top - bounds.bottom);
            width = Math.abs(bounds.left - bounds.right);
        }
        return {w:width, h:height};
    }
    draw() {
        //this._preDraw = false;
        if(this._dropEnabled){
            this._drop();
        }
        this.renderDraw();
    }
    renderDraw() {
        if(this.drawableID != null && this._renderer != null && this._skinId != null) {
            const properties: ScratchRenderProperties = {
                skinId: this._skinId,
                position: [this._position.x, this._position.y],
                scale: [ this._scale.w, this._scale.h ],
                visible : this._visible,
            }
            this._renderer.updateDrawableProperties( this.drawableID, properties );
            this._renderer.updateDrawableSkinId(this.drawableID, this._skinId);    
        }
    }
    _isMouseTouching() : boolean {
        // scratch3 render処理の pickメソッドへ渡すマウスポインター座標( x, y )は、
        // stage(canvas)の 左上を起点とするオフセット座標である
        const pageX = this.mouse.pageX;
        const pageY = this.mouse.pageY;
        // ウィンドウ左上基準の座標を Stage(Canvas)左上基準に変換する
        const position = ScratchElement.offsetChangePageToStage(pageX, pageY);
        // 自分自身だけを対象にしてマウスタッチしているDrawableのIDを取得する
        // マウスタッチしていれば自分自身のDrawableIDが返るはず。
        // 第３、第４パラメーターはタッチ範囲（幅,高さ) 、大きくすると近づくだけでもタッチとみなされる。
        const touchDrawableId = this.render.renderer.pick(position.x, position.y, 1, 1, [this.drawableID]);
        if(touchDrawableId !== false && touchDrawableId == this.drawableID ){
            return true;
        }
        return false;
    }
    _isMouseDown() : boolean {
        return this._mouse.down;
    }
    _drop() {
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        if( this._moveDistance.x == undefined && this._moveDistance.y == undefined ) {
            if(this._isMouseTouching() && this._isMouseDown()){
                scratchEvent.emit(Monitor.Events.DROP_START, this.drawableID);
            }
        }else{
            if(this._isMouseDown() && this._moveDistance.x && this._moveDistance.y){
                this._position.x = this._mouse.scratchX - this._moveDistance.x;
                this._position.y = this._mouse.scratchY - this._moveDistance.y;
            }else{
                scratchEvent.emit(Monitor.Events.DROP_COMPLETE);
                this._moveDistance = {};
            }
        }
    }
}
