/**
 * Tex to speech
 */
import { Entity } from "../entity/entity";
import { SoundLoader } from "../loader/soundLoader";
import { SpeechSound } from "./speechSound";
import { SPEECH_GENDER, SPEECH_LOCAL, type Type_properties, type Type_speech_gender, type Type_speech_local } from "../../type/speech/ITextToSpeech";
import type { IEntity } from "../../type/entity/entity";
import type { TSoundPlayerOption } from "../../type/sound/IAudioEngine";
import { EntitySpeech } from "../entity/entity/entitySpeech";

/**
 * the url of the synthesis server.
 */
const SERVER_HOST = 'https://synthesis-service.scratch.mit.edu';
/**
 * waiting time in ms before timing out requests to synthesis server
 */
const SERVER_TIMEOUT = 10000; // 10 seconds

/**
 * Volume for playback of speech sounds, as a percentage.
 */
const SPEECH_VOLUME = 250;

/**
 * An id for one of the voices.
 */
const ALTO_ID = 'ALTO';

/**
 * An id for one of the voices.
 */
const TENOR_ID = 'TENOR';

/**
 * An id for one of the voices.
 */
const SQUEAK_ID = 'SQUEAK';

/**
 * An id for one of the voices.
 */
const GIANT_ID = 'GIANT';

/**
 * An id for one of the voices.
 */
const KITTEN_ID = 'KITTEN';

/**
 * Playback rate for the tenor voice, for cases where we have only a female gender voice.
 */
const FEMALE_TENOR_RATE = 0.89; // -2 semitones

/**
 * Playback rate for the giant voice, for cases where we have only a female gender voice.
 */
const FEMALE_GIANT_RATE = 0.79; // -4 semitones


const ENGLISH_ID = SPEECH_LOCAL.ENGLISH;
const JAPANESE_ID = SPEECH_LOCAL.JAPANESE;

type Type_language_info = {
    [ENGLISH_ID]: {
        name: string;
        locales: Type_speech_local[];
        speechSynthLocale: string;
    };
    [JAPANESE_ID]: {
        name: string;
        locales: Type_speech_local[];
        speechSynthLocale: string;
    }}
type Type_Sound = {name:string, data: Uint8Array<ArrayBuffer>};

export class Speech {
    static get LANGUAGE_INFO () :Type_language_info {
        return {
            [ENGLISH_ID]: {
                name: 'English',
                locales: ['en'],
                speechSynthLocale: 'en-US'
            },
            [JAPANESE_ID]: {
                name: 'Japanese',
                locales: ['ja-JP'],
                speechSynthLocale: 'ja-JP'
            },
        };
    }
    private _entity : IEntity;
    private _gender:  Type_speech_gender;
    private _cache: Map<string, Type_Sound>;
    private _local: Type_speech_local;
    private _properties: Type_properties;
    constructor(entity: IEntity) {
        this._entity = entity;
        this._gender = SPEECH_GENDER.FEMALE;
        this._cache = new Map<string,Type_Sound>();
        this._local = SPEECH_LOCAL.JAPANESE;
        this._properties = {};
    }
    /**
     * The default state, to be used when a target has no existing state.
     * @type {Text2SpeechState}
     */
    static get DEFAULT_TEXT2SPEECH_STATE () {
        return {
            voiceId: ALTO_ID
        };
    }

    /**
     * A default language to use for speech synthesis.
     * @type {string}
     */
    get DEFAULT_LANGUAGE (){
        return JAPANESE_ID;
    }

    public setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption){
        const prop = this._properties[type];
        if(prop){
            prop.gender = gender;
            prop.locale = locale;
            prop.properties = properties;
        }else{
            this._properties[type] = {gender:gender, locale:locale, properties:properties};
        }
    }
    /**
     * テキストを音声化してスピーチする
     * @param entity 
     * @param words 
     * @param type 
     * @returns 
     */
    public async speech(words:string, type: string) {
        const _prop = this._properties[type];
        if(_prop == undefined) return;
        // 128文字までしか許容しないとする
        const text = encodeURIComponent(words.substring(0, 128));
        let path = `${SERVER_HOST}/synth?locale=${_prop.locale}&gender=${_prop.gender}&text=${text}`;
        if(!this._cache.has(path)) {
            const name = 'ScratchSpeech'; // <-- なんでもよいが、変数に使える文字であること
            const _sound = await SoundLoader.loadSound(path, name);
            await this._speechPlay(path, name, _sound.data, _prop.properties);
        }else{
            const _sound = this._cache.get(path);
            if(_sound){
                await this._speechPlay(path, _sound.name, _sound.data, _prop.properties);
            }
        }
    }

    private async _speechPlay(path: string, name: string, data: Uint8Array<ArrayBuffer>, properties: TSoundPlayerOption) {
        const entitySpeech = this._entity.Speech as EntitySpeech;
        const soundPlayer = entitySpeech.getCache(path);
        if(soundPlayer) {
            await soundPlayer.startSoundUntilDone();

        }else{
            const sound = new SpeechSound();
            const soundPlayer = await sound.setSound(name, data, properties);
            entitySpeech.addCache(path, soundPlayer);
            await soundPlayer.startSoundUntilDone();

        }
    }
}