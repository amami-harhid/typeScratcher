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
    constructor() {
        super();
    }
    public stageFirstClick() {
        const body = document.body;
        const me = this;
        const f = (event:MouseEvent)=>{
            me.emit(ScratchEvent.START_AUDIO_ENGINE);
            event.stopPropagation();
            body.removeEventListener('click', f);
        }
        body.addEventListener('click', f);
    }
    public greenFlagClick() {
        const greenFlag = Element.getGreenFlag();
        const me = this;
        greenFlag.classList.remove('not-ready');
        greenFlag.classList.add('not-running');
        greenFlag.addEventListener('click',(event:MouseEvent)=>{
            me.emit(ScratchEvent.GREEN_FLAG_CLICKED);
            greenFlag.classList.remove('running');
            event.stopPropagation();
        })
    }

}