import { EventEmitter } from "events";
import { ScratchElement } from "../gui/scratchElement";
import { Engine, engine } from ".";

/**
 * Scratch Event
 */
export class ScratchEvent extends EventEmitter {

    static get GREEN_FLAG_CLICKED() : string {
        return "GREEN_FLAG_CLICKED";
    }
    static get START_AUDIO_ENGINE(): string {
        return "START_AUDIO_ENGINE";
    }
    static get READY_AUDIO_ENGINE(): string {
        return "READY_AUDIO_ENGINE";
    }
    static get PAUSE_CLICKED() : string {
        return "PAUSE_CLICKED";
    }
    static get RESTART_CLICKED() : string {
        return "RESTART_CLICKED";
    }
    static get STOP_CLICKED() : string {
        return "STOP_CLICKED";
    }
    static get CANVAS_CLICKED() : string {
        return "CANVAS_CLICKED";
    }

    private _running:boolean;
    private _restart:boolean;
    private _keyPressedPool: string[];
    private _messageReceiverIdsPool: string[];
    constructor() {
        super();
        this._running= false;
        this._restart= false;
        this.on(ScratchEvent.GREEN_FLAG_CLICKED,()=>{
            this._running = true;
        });
        this.on(ScratchEvent.STOP_CLICKED,()=>{
            this._running = false;
        });
        this._messageReceiverIdsPool = [];
        this._keyPressedPool = [];
    }
    public get running(): boolean {
        return this._running;
    }
    public stageFirstClick() {
        const main = ScratchElement.getMain();
        const overlay = ScratchElement.getOverlay();
        const me = this;
        const f = (event:MouseEvent)=>{
            me.emit(ScratchEvent.START_AUDIO_ENGINE);
            event.stopPropagation();
            main.removeChild(overlay);
            overlay.removeEventListener('click', f);
        }
        overlay.addEventListener('click', f);
    }
    public greenFlagClick() {
        const greenFlag = ScratchElement.getGreenFlag();
        const stopMark = ScratchElement.getControlStopMark();
        const pauseMark = ScratchElement.getControlPauseMark();
        const me = this;
        greenFlag.classList.remove('not-ready');
        greenFlag.addEventListener('click',(event:MouseEvent)=>{
            stopMark.classList.remove('is-not-active');
            pauseMark.classList.remove('is-not-active');
            stopMark.classList.add('is-active');
            pauseMark.classList.add('is-active');
            ScratchElement.changeToPauseMarkActive(pauseMark);
            me._restart = false;
            me.emit(ScratchEvent.GREEN_FLAG_CLICKED);
            greenFlag.classList.remove('running');
            event.stopPropagation();
            // for sprite 
            for(const s of (engine as Engine).getSprites()) {
                s.Event.flagPresserKick();
            }
            const stage = (engine as Engine).getStage();
            if(stage) {
                stage.Event.flagPresserKick();
            }
        });

        this.pauseMarkClick();
        this.stopMarkClick();
        this.spliteClick();

    }
    public stopMarkClick() {
        const stopMark = ScratchElement.getControlStopMark();
        const pauseMark = ScratchElement.getControlPauseMark();
        const me = this;
        stopMark.addEventListener('click',(event:MouseEvent)=>{
            stopMark.classList.remove('is-active');
            stopMark.classList.add('is-not-active');
            ScratchElement.changeToPauseMarkActive(pauseMark);
            me._restart = false;
            me.emit(ScratchEvent.STOP_CLICKED);
            event.stopPropagation();
        })

    }
    public pauseMarkClick() {
        const pauseMark = ScratchElement.getControlPauseMark();
        const me = this;
        //let restart = false;
        pauseMark.addEventListener('click',(event:MouseEvent)=>{
            if(this._restart===true){
                me.emit(ScratchEvent.RESTART_CLICKED);
                ScratchElement.changeToPauseMarkActive(pauseMark);
            }else{
                me.emit(ScratchEvent.PAUSE_CLICKED);
                ScratchElement.changeToRestartMark(pauseMark);
            }
            event.stopPropagation();
            me._restart = !this._restart;
        })

    }
    public spliteClick() {
        const canvas = ScratchElement.getScratchCanvas();
        const me = this;
        canvas.addEventListener('click', (event:MouseEvent)=>{
            //me.emit(ScratchEvent.CANVAS_CLICKED);
            const sprites = (engine as Engine).getSprites();
            for(const s of sprites){
                s.Event.clickEventerKick();
            }            
            event.stopPropagation();
        })
    }
    public keyClick(key: string) {
        const f = (pressedKey: string) => {
            let _key;
            if(key.length == 1) {
                _key = key.toUpperCase();
            }else{
                _key = key; 
            }
            if( _key == pressedKey ) {
                const sprites = (engine as Engine).getSprites();
                for(const s of sprites) {
                    s.Event.keyPresserKick(key);
                }
                const stage = (engine as Engine).getStage();
                if(stage){
                    stage.Event.keyPresserKick(key);
                }
            }
        };        
        if( !this._keyPressedPool.includes(key)) {
            (engine as Engine).runtime.on("KEY_PRESSED", f);
        }
    }
    public messageReceiverRegist(messageId: string): void {
        if( !this._messageReceiverIdsPool.includes(messageId)){
            // 登録されていないとき
            // 登録する
            this._messageReceiverIdsPool.push(messageId);
            // イベント登録
            this._onMessageReceiverKick(messageId);
        }
    }
    private _onMessageReceiverKick(messageId: string) {
        this.on(messageId, ()=> {
            const sprites = (engine as Engine).getSprites();
            for(const s of sprites) {
                s.Broadcast.broadcastReceivedKick(messageId);
            }
            const stage = (engine as Engine).getStage();
            if(stage){
                stage.Broadcast.broadcastReceivedKick(messageId);
            }
        })
    }
}