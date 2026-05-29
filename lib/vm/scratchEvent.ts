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
    constructor() {
        super();
    }

    public greenFlagClick() {
        const greenFlag = Element.getGreenFlag();

        greenFlag.addEventListener('click',(event:MouseEvent)=>{
            this.emit(ScratchEvent.GREEN_FLAG_CLICKED);
            event.stopPropagation();
        })
    }

}