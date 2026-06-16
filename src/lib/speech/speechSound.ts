/**
 * SpeechSound
 */
import { TSoundPlayerOption } from "src/type/sound/IAudioEngine";
import { Engine, engine } from "../engine";
import { SoundPlayer } from "../sounds/soundPlayer";
import { SpeechPlayer } from "./speechPlayer";

export class SpeechSound {
    private _speechPlayer!: SpeechPlayer;
    constructor() {
    }

    async setSound(soundData: Uint8Array<ArrayBuffer>, properties:TSoundPlayerOption) : Promise<SpeechPlayer>{
        const data = soundData;
        const audioEngine = (engine as Engine).runtime.audioEngine;
        const _soundPlayer = await audioEngine.decodeSoundPlayer({data});
        const _effects = audioEngine.createEffectChain();
        const _options = properties;
        _options.effects = _effects;
        const speechPlayer = new SpeechPlayer(_soundPlayer, _options);
        speechPlayer.connect();
        this._speechPlayer = speechPlayer;
        return speechPlayer;
    }
}