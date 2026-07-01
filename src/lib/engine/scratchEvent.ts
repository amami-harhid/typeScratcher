import { Engine, engine } from ".";
import { EntityBackdrop } from "../entity/entity/entityBackdrop";
import { EntityBroadCast } from "../entity/entity/entityBroadcast";
import { EventEmitter } from "events";
import { ScratchElement } from "../gui/scratchElement";
import { Sprite } from "../entity/sprite";
import { SpriteEvent } from "../entity/sprite/spriteEvent";
import { SpriteControl } from "../entity/sprite/spriteControl";
import { StageEvent } from "../entity/stage/stageEvent";

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
    static get SPRITE_GLIDE(): string {
        return "SPRITE_CLIDE";
    }
    static get SPRITE_GLIDE_STOP(): string {
        return "SPRITE_CLIDE_STOP";
    }
    static get SPRITE_INIT(): string {
        return "SPRITE_INIT";
    }
    private _running:boolean;
    private _restart:boolean;
    private _keyPressedPool: string[];
    private _messageReceiverIdsPool: string[];
    private _backdropChangerNamesPool: string[];
    private _clonedNamesPool : string[];
    private _runningThreadCount: number;
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
        this._backdropChangerNamesPool = [];
        this._clonedNamesPool = [];
        this._runningThreadCount = 0;
    }
    public get running(): boolean {
        return this._running;
    }
    public set runningThreadCount(runningThreadCount:number) {
        this._runningThreadCount = runningThreadCount;
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
                (s.Event as SpriteEvent).flagPresserKick();
            }
            const stage = (engine as Engine).getStage();
            if(stage) {
                (stage.Event as StageEvent).flagPresserKick();
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
            if(me._runningThreadCount > 0) {
                if(me._restart===true){
                    me.emit(ScratchEvent.RESTART_CLICKED);
                    ScratchElement.changeToPauseMarkActive(pauseMark);
                }else{
                    me.emit(ScratchEvent.PAUSE_CLICKED);
                    ScratchElement.changeToRestartMark(pauseMark);
                }
                me._restart = !me._restart;        
            }
            event.stopPropagation();
        })

    }
    public spliteClick() {
        const canvas = ScratchElement.getScratchCanvas();
        const me = this;
        canvas.addEventListener('click', (event:MouseEvent)=>{
            //me.emit(ScratchEvent.CANVAS_CLICKED);
            const sprites = (engine as Engine).getSprites();
            for(const s of sprites){
                (s.Event as SpriteEvent).clickEventerKick();
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
                    (s.Event as SpriteEvent).keyPresserKick(key);
                }
                const stage = (engine as Engine).getStage();
                if(stage){
                    (stage.Event as StageEvent).keyPresserKick(key);
                }
            }
        };        
        if( !this._keyPressedPool.includes(key)) {
            (engine as Engine).runtime.on("KEY_PRESSED", f);
        }
    }
    public messageReceiverRegist(messageId: string): void {
        console.log('ScratchEvent[1] messageId=', messageId);
        if( !this._messageReceiverIdsPool.includes(messageId)){
            console.log('ScratchEvent[2] messageId=', messageId);
            // 登録されていないとき
            // 登録する
            this._messageReceiverIdsPool.push(messageId);
            // イベント登録
            this._onMessageReceiverKick(messageId);
        }
    }
    private _onMessageReceiverKick(messageId: string) {
        this.on(messageId, (...args:any)=> {
            console.log('ScratchEvent[3] messageId=', messageId);
            const sprites = (engine as Engine).getSprites();
            for(const s of sprites) {
                (s.Broadcast as EntityBroadCast).broadcastReceivedKick(messageId, ...args);
            }
            const stage = (engine as Engine).getStage();
            if(stage){
                (stage.Broadcast as EntityBroadCast).broadcastReceivedKick(messageId, ...args);
            }
        })
    }
    public backdropChangerRegist(backdropName: string): void {
        if( this.isBackdropChangerExist(backdropName) === false) {
            // 登録されていないとき
            this._backdropChangerNamesPool.push(backdropName);
            // イベント登録
            this._onBackdropChangerKick(backdropName);
        }
    }
    public isBackdropChangerExist(backdropName: string): boolean {
        if( this._backdropChangerNamesPool.includes(backdropName)) {
            return true;
        }
        return false;
    }
    private _onBackdropChangerKick(backdropName: string) {
        const eventName = EntityBackdrop.getBackdropChangeMessageId(backdropName);
        this.on(eventName, ()=>{
            const sprites = (engine as Engine).getSprites();
            for(const s of sprites) {
                (s.Event as SpriteEvent).backdropEventKick(backdropName);
            }
            const stage = (engine as Engine).getStage();
            if(stage){
                (stage.Event as StageEvent).backdropEventKick(backdropName);
            }
        })
    }
    public clonedEventRegist(sprite: Sprite): void {
        // 引数(sprite)は 親スプライトの前提
        const messageId = this.getClonedEventMessageId(sprite);
        if( this.isClonedEventExist(messageId) === false) {
            // 登録されていないとき
            this._clonedNamesPool.push(messageId);
            // イベント登録
            this._onClonedEventKick(sprite);
        }
    }
    public isClonedEventExist(messageId: string) : boolean {
        if(this._clonedNamesPool.includes(messageId)){
            return true;
        }
        return false;
    }
    private _onClonedEventKick(sprite: Sprite) : void {
        // sprite は親スプライトの前提
        if(sprite.isClone === true) {
            // クローンからの呼び出しのときは何もしない
            return;
        }
        const messageId = this.getClonedEventMessageId(sprite);
        this.on(messageId, (clone: Sprite)=>{
            (clone.Control as SpriteControl).clonedEventKick();
        });
    }
    public getClonedEventMessageId(sprite: Sprite) : string {
        // 引数(sprite)は 親スプライトの前提
        return `Cloned_${sprite.name}_${sprite.id}`;
    }
}