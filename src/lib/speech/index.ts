import { VOICE_INFO } from "../../type/speech/IVoice";
import { SpeechSound } from "./speechSound";
import { SPEECH_LOCALE, type V_SPEECH_LOCALE } from "../../type/speech/IVoice";
import { VoiceLoader } from "./voiceLoader";
import type { T_VOICE_INFO_ELEMENT } from "../../type/speech/IVoice";

/**
 * the url of the synthesis server.
 */
const SERVER_HOST = 'https://synthesis-service.scratch.mit.edu';

/**
 * Speech.getInstance().addProperties("CAT", prop);
 * Speech.getInstance().use( "CAT" ).play();
 */
export class Speech {
    private static instance: Speech;
    public static getInstance(): Speech {
        if(Speech.instance == undefined) {
            Speech.instance = new Speech();
        }
        return Speech.instance;
    }
    private _propertiesBank : Map<string, T_VOICE_INFO_ELEMENT> = new Map<string, T_VOICE_INFO_ELEMENT>;
    private _defaultProperties: T_VOICE_INFO_ELEMENT;
    private static _soundBank: Map<string, SpeechSound>;
    private _type!: string;
    private _locale!: V_SPEECH_LOCALE;
    constructor() {
        this._defaultProperties = VOICE_INFO.ALTO;
        for(const type of Object.keys(VOICE_INFO)) {
            if( !this._propertiesBank.has(type) ){
                const element = VOICE_INFO[type];
                this._propertiesBank.set(type, element);
            }            
        }
        Speech._soundBank = new Map<string, SpeechSound>();
    }
    addProperties(type: string, prop: T_VOICE_INFO_ELEMENT): void {
        if( !this._propertiesBank.has(type) ){
            this._propertiesBank.set(type, prop);
        }
    }
    getProperties(type: string): T_VOICE_INFO_ELEMENT {
        const prop = this._propertiesBank.get(type);
        if(prop) {
            return prop;
        }else{
            return this._defaultProperties;
        }
    }
    private _getSoundUrl(locale:string, gender:string, words : string) : string {
        const text = encodeURIComponent(words.substring(0, 128));
        let path = `${SERVER_HOST}/synth?locale=${locale}&gender=${gender}&text=${text}`;
        return path;
    }
    public locale(locale: V_SPEECH_LOCALE) : Speech{
        this._locale = locale;
        return this;
    }
    public use(type: string) : Speech{
        this._type = type;
        return this;
    }
    public play(words: string) : Promise<void>{
        return new Promise<void>(async(resolve)=>{
            const prop = this.getProperties(this._type);
            const locale = this._locale || SPEECH_LOCALE.JAPANESE;
            const _path = this._getSoundUrl(locale, prop.gender, words);
            const sound = Speech._soundBank.get(_path);
            if(sound) {
                const soundPlayer = sound.soundPlayer;
                sound.setPitch(soundPlayer, prop.pitch);
                sound.setVolume(soundPlayer, prop.volume);
                await sound.playUntilDone(soundPlayer);
            }else{
                const _data = await VoiceLoader.load(_path);
                const _sound = new SpeechSound({data: _data});
                const soundPlayer = await _sound.makeSoundPlayer();
                _sound.setPitch(soundPlayer, prop.pitch);
                _sound.setVolume(soundPlayer, prop.volume);
                Speech._soundBank.set(_path, _sound);
                await _sound.playUntilDone(soundPlayer);
            }
            resolve();
        });
    }
    setVolume(volume: number): Speech {
        const prop = this.getProperties(this._type);
        prop.volume = volume;
        return this;
    }
    addVolume(volume: number): Speech {
        const prop = this.getProperties(this._type);
        prop.volume += volume;
        return this;
    }
    setPitch(pitch:number): Speech {
        const prop = this.getProperties(this._type);
        prop.pitch = pitch;        
        return this;
    }
    addPitch(pitch:number): Speech {
        const prop = this.getProperties(this._type);
        prop.pitch += pitch;        
        return this;
    }

    stopAll(): void {
        for( const key of Speech._soundBank.keys()) {
            const sound = Speech._soundBank.get(key);
            if(sound){
                sound.forceStop();
            }
        }
    }
}