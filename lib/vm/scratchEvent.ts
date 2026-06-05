/**
 * Scratch Event
 */
import { EventEmitter } from "events";
import { Element } from "../gui/element";

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
    constructor() {
        super();
    }
    public stageFirstClick() {
        const main = Element.getMain();
        const overlay = Element.getOverlay();
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
        const greenFlag = Element.getGreenFlag();
        const stopMark = Element.getControlStopMark();
        const pauseMark = Element.getControlPauseMark();
        const me = this;
        greenFlag.classList.remove('not-ready');
        greenFlag.addEventListener('click',(event:MouseEvent)=>{
            stopMark.classList.remove('is-not-active');
            pauseMark.classList.remove('is-not-active');
            stopMark.classList.add('is-active');
            pauseMark.classList.add('is-active');
            me.emit(ScratchEvent.GREEN_FLAG_CLICKED);
            greenFlag.classList.remove('running');
            event.stopPropagation();
        });

        this.pauseMarkClick();
        this.stopMarkClick();

    }
    public stopMarkClick() {
        const stopMark = Element.getControlStopMark();
        const me = this;
        stopMark.addEventListener('click',(event:MouseEvent)=>{
            stopMark.classList.remove('is-active');
            stopMark.classList.add('is-not-active');
            me.emit(ScratchEvent.STOP_CLICKED);
            event.stopPropagation();
        })

    }
    public pauseMarkClick() {
        const pauseMark = Element.getControlPauseMark();
        const me = this;
        let restart = false;
        pauseMark.addEventListener('click',(event:MouseEvent)=>{
            if(restart===true){
                me.emit(ScratchEvent.RESTART_CLICKED);
                Element.changeToPauseMarkActive(pauseMark);
            }else{
                me.emit(ScratchEvent.PAUSE_CLICKED);
                Element.changeToRestartMark(pauseMark);
            }
            event.stopPropagation();
            restart = !restart;
        })

    }

}