import { Entity } from ".";
import { Speech } from "../../speech/textToSpeech";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySpeech } from "../../../type/entity/entity/IEntitySpeech";
import type { Type_speech_gender, Type_speech_local } from "../../../type/speech/ITextToSpeech";
import type { TSoundPlayerOption } from "../../../type/sound/IAudioEngine";
import { SoundPlayer } from "src/lib/sounds/soundPlayer";

/**
 * スピーチ機能
 */
export class EntitySpeech implements IEntitySpeech{
    private _speechCache: Map<string,SoundPlayer>;
    private entity: IEntity;
    private _speech: Speech;
    constructor(entity: IEntity) {
        this.entity = entity;
        this._speech = new Speech(entity);
        this._speechCache = new Map<string,SoundPlayer>();
    }
    public async speech(words: string, type: string): Promise<void> {
        await this._speech.speech(words, type);
    }

    public setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption):void {
        this._speech.setSpeechProperties(type, gender, locale, properties);
    }

    public addCache(path: string, soundPlayer: SoundPlayer) {
        if(!this._speechCache.get(path)) {
            this._speechCache.set(path, soundPlayer);
        }
    }
    public getCache(path: string) : SoundPlayer | undefined {
        const soundPlayer = this._speechCache.get(path);
        return soundPlayer;
    }
}