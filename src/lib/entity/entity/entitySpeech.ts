import { Speech } from "../../speech/";
import { SoundPlayer } from "../../sounds/soundPlayer";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySpeech, NextMethodsAddPitch, NextMethodsAddVolume, NextMethodsLocale, NextMethodsPitch, NextMethodsType, NextMethodsVolume } from "../../../type/entity/entity/IEntitySpeech";
import type { Type_speech_gender, Type_speech_local } from "../../../type/speech";
import type { TSoundPlayerOption } from "../../../type/sound/IAudioEngine";
import type { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";

/**
 * スピーチ機能
 * サウンド機能と異なり、ボリューム値変更、ピッチ変更は、次の再生から有効になる
 */
export class EntitySpeech implements IEntitySpeech{
    private _speechCache: Map<string,SoundPlayer>;
    protected _entity: IEntity;
    private _speech: Speech;
    constructor(entity: IEntity) {
        this._entity = entity;
        this._speech = new Speech();
        this._speechCache = new Map<string,SoundPlayer>();
    }
    public locale(locale: V_SPEECH_LOCALE) : NextMethodsLocale {
        this._speech.locale(locale);                
        const me = this;
        return class {
            static type(type: string) : NextMethodsType {
                return me.type(type);
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public type(type:string) : NextMethodsType{
        this._speech.use(type);
        const me = this;
        return class {
            static volume(volume:number) : NextMethodsVolume {
                return me.volume(volume);
            }
            static pitch(pitch:number) : NextMethodsPitch {
                return me.pitch(pitch); 
            }
            static addVolume(volume:number) : NextMethodsAddVolume {
                return me.addVolume(volume);
            }
            static addPitch(pitch:number) : NextMethodsAddPitch {
                return me.addPitch(pitch); 
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public addPitch(pitch: number): IEntitySpeech {
        this._speech.addPitch(pitch);
        return this;
    }
    public addVolume(volume: number): IEntitySpeech {
        this._speech.addVolume(volume);
        return this;
    }
    public pitch(pitch: number): NextMethodsPitch {
        this._speech.setPitch(pitch);
        const me = this;
        return class {
            static volume(volume:number) : NextMethodsVolume {
                return me.volume(volume);
            }
            static addVolume(volume:number) : NextMethodsAddVolume {
                return me.addVolume(volume);
            }
            static addPitch(pitch:number) : NextMethodsAddPitch {
                return me.addPitch(pitch); 
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public volume(volume: number): NextMethodsVolume {
        this._speech.setVolume(volume);
        const me = this;
        return class {
            static pitch(pitch:number) : NextMethodsPitch {
                return me.pitch(pitch);
            }
            static addVolume(volume:number) : NextMethodsAddVolume {
                return me.addVolume(volume);
            }
            static addPitch(pitch:number) : NextMethodsAddPitch {
                return me.addPitch(pitch); 
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }

    public async speech(words: string): Promise<void> {
        await this._speech.play(words);
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

    public stopAll() : void {
        this._speech.stopAll();
    }
}