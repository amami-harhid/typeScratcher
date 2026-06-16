import { Speech } from "../../speech/textToSpeech";
import { SoundPlayer } from "../../sounds/soundPlayer";
import { SpeechPlayer } from "../../speech/speechPlayer";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySpeech } from "../../../type/entity/entity/IEntitySpeech";
import type { Type_speech_gender, Type_speech_local } from "../../../type/speech/ITextToSpeech";
import type { TSoundPlayerOption } from "../../../type/sound/IAudioEngine";

/**
 * スピーチ機能
 */
export class EntitySpeech implements IEntitySpeech{
    private _speechCache: Map<string,SpeechPlayer>;
    private _entity: IEntity;
    private _speech: Speech;
    constructor(entity: IEntity) {
        this._entity = entity;
        this._speech = new Speech(entity);
        this._speechCache = new Map<string,SpeechPlayer>();
    }
    public async speech(words: string, type: string): Promise<void> {
        await this._speech.speech(words, type);
    }

    public setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption):void {

    }

    public addCache(path: string, soundPlayer: SpeechPlayer) {
        if(!this._speechCache.get(path)) {
            this._speechCache.set(path, soundPlayer);
        }
    }
    public getCache(path: string) : SpeechPlayer | undefined {
        const soundPlayer = this._speechCache.get(path);
        return soundPlayer;
    }
}