import { Speech } from "../../speech/";
import { SoundPlayer } from "../../sounds/soundPlayer";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySpeech, NextMethodsAddPitch, NextMethodsAddVolume, NextMethodsCopyTo, NextMethodsGender, NextMethodsLocale, NextMethodsPitch, NextMethodsType, NextMethodsVolume } from "../../../type/entity/entity/IEntitySpeech";
import type { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";
import { Type_speech_gender } from "src/type/speech";

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
            static typeCopyTo(type: string) : NextMethodsCopyTo {
                return me.typeCopyTo(type);
            }
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
    typeCopyTo( type: string) : NextMethodsCopyTo {
        const prop = this._speech.getProperties( this._speech.type );
        this._speech.addProperties( type, prop);
        const me = this;
        return class {
            static gender(gender: Type_speech_gender): NextMethodsGender {
                return me.gender(gender);
            }
            static volume(volume:number) : NextMethodsVolume {
                return me.volume(volume);
            }
            static addVolume(volume:number) : NextMethodsAddVolume {
                return me.addVolume(volume);
            }
            static pitch(pitch:number) : NextMethodsPitch {
                return me.pitch(pitch);
            }
            static addPitch(pitch:number) : NextMethodsAddPitch {
                return me.addPitch(pitch); 
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }
    }
    public gender(gender: Type_speech_gender) :NextMethodsGender {
        this._speech.setGender(gender);
        const me = this;
        return class {

            static volume(volume:number) : NextMethodsVolume {
                return me.volume(volume);
            }
            static addVolume(volume:number) : NextMethodsAddVolume {
                return me.addVolume(volume);
            }
            static pitch(pitch:number) : NextMethodsPitch {
                return me.pitch(pitch);
            }
            static addPitch(pitch:number) : NextMethodsAddPitch {
                return me.addPitch(pitch); 
            }
            static async speech(words: string) : Promise<void>{
                await me.speech(words);
            }
        }                
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