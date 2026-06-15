import type { SoundArgStringObject } from "../../type/sound";
import type { IEntity } from "../../type/entity/entity";
import { EntitySound } from "../entity/entity/entitySound";
import { Sound } from "../sounds";
import { TSoundPlayerOption } from "src/type/sound/IAudioEngine";
import { Engine, engine } from "../engine";
import { SoundPlayer } from "../sounds/soundPlayer";

export class SpeechSound {
    private _soundPlayer!: SoundPlayer;
    constructor() {
    }

    async setSound(name: string, soundData: Uint8Array<ArrayBuffer>, properties:TSoundPlayerOption) : Promise<SoundPlayer>{
        const data = soundData;
        const audioEngine = (engine as Engine).runtime.audioEngine;
        const _soundPlayer = await audioEngine.decodeSoundPlayer({data});
        const _effects = audioEngine.createEffectChain();
        const _options = properties;
        _options.effects = _effects;
        const soundPlayer = new SoundPlayer(name, _soundPlayer, _options);
        soundPlayer.connect();
        this._soundPlayer = soundPlayer;
        return soundPlayer;
    }
}