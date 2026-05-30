/**
 * Runtime
 */
import { EventEmitter } from 'events';
import { ScratchEvent } from './scratchEvent';
import { default as AudioEngine} from "scratch-audio";
import { Keyboard } from './keyboad';
import type { IAudioEngine, IScratchSoundPlayer, TSoundPlayerOption } from '@Type/sound/IAudioEngine';
declare type IODEVICES = {
    keyboard: Keyboard,
}
export class Runtime extends EventEmitter {
    public scratchEvent:ScratchEvent;
    public ioDevices: IODEVICES;
    public audioEngine!: IAudioEngine;
    constructor() {
        super();
        this.scratchEvent = new ScratchEvent();
        const ioDevice:IODEVICES = {
            keyboard: new Keyboard(this),
        }
        this.ioDevices = ioDevice;
        this.scratchEvent.once(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            this.audioEngine = new AudioEngine();
            this.scratchEvent.emit(ScratchEvent.START_AUDIO_ENGINE);

        })
    }
    /**
     * 指定したキーが押されているかの判定
     * @param key {string}
     * @returns {boolean}
     */
    keyIsDown(key?: string) : boolean{
        return this.ioDevices.keyboard.keyIsDown(key);
    }

}