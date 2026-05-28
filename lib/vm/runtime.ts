/**
 * Runtime
 */
import { EventEmitter } from 'events';
import { default as AudioEngine} from "scratch-audio";
import { Keyboard } from './keyboad';
import type { IAudioEngine, IScratchSoundPlayer, TSoundPlayerOption } from '@Type/sound/IAudioEngine';
declare type IODEVICES = {
    keyboard: Keyboard,
}
export class Runtime extends EventEmitter {

    public ioDevices: IODEVICES;
    public audioEngine: IAudioEngine;
    constructor() {
        super();
        const ioDevice:IODEVICES = {
            keyboard: new Keyboard(this),
        }
        this.ioDevices = ioDevice;
        this.audioEngine = new AudioEngine();
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