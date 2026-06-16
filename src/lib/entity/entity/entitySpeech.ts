import { Speech } from "../../speech/";
import { SoundPlayer } from "../../sounds/soundPlayer";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySpeech, NextMethodsA, NextMethodsB, NextMethodsC, NextMethodsD } from "../../../type/entity/entity/IEntitySpeech";
import type { Type_speech_gender, Type_speech_local } from "../../../type/speech";
import type { TSoundPlayerOption } from "../../../type/sound/IAudioEngine";
import type { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";

/**
 * スピーチ機能
 */
export class EntitySpeech implements IEntitySpeech{
    private _speechCache: Map<string,SoundPlayer>;
    private _entity: IEntity;
    private _speech: Speech;
    constructor(entity: IEntity) {
        this._entity = entity;
        this._speech = new Speech();
        this._speechCache = new Map<string,SoundPlayer>();
    }
    public locale(locale: V_SPEECH_LOCALE) : NextMethodsA {
        this._speech.locale(locale);                
        const me = this;
        return class {
            static type(type: string) : IEntitySpeech {
                return me.type(type);
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public type(type:string) : IEntitySpeech{
        this._speech.use(type);
        const me = this;
        return this;
        // return class {
        //     static volume(volume:number) : NextMethodsD {
        //         return me.volume(volume);
        //     }
        //     static pitch(pitch:number, plus:boolean = false) : NextMethodsC {
        //         return me.pitch(pitch, plus); 
        //     }
        //     static async speech(words: string) : Promise<void>{
        //         await me.speech(words);
        //     }
        // }
    }
    public addPitch(pitch: number): IEntitySpeech {
        this._speech.addPitch(pitch);
        return this;
    }
    public addVolume(volume: number): IEntitySpeech {
        this._speech.addVolume(volume);
        return this;
    }
    public pitch(pitch: number, plus:boolean= false): NextMethodsC {
        if(plus==true){
            this._speech.addPitch(pitch);
        }else{
            this._speech.setPitch(pitch);
        }
        const me = this;
        return class {
            static volume(volume:number) : NextMethodsD {
                return me.volume(volume);
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public volume(volume: number): NextMethodsD {
        this._speech.setVolume(volume);
        const me = this;
        return class {
            static pitch(pitch:number, plus:boolean = false) : NextMethodsC {
                return me.pitch(pitch, plus);
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }

    public async speech(words: string): Promise<void> {
        await this._speech.play(words);
    }

    public setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption):void {

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