import { SPEECH_GENDER, SPEECH_LOCAL, type Type_properties, type Type_speech_gender, type Type_speech_local } from "../../type/speech/ITextToSpeech";
import { SpeechPlayer } from "./speechPlayer";
import { SpeechSound } from "./speechSound";
import { VoiceLoader } from "./voiceLoader";

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

export const VOICE_INFO : Type_properties= {
    [ALTO_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 1
    },
    [TENOR_ID]: {
        gender: SPEECH_GENDER.MALE,
        volume: 100,
        pitch: 1
    },
    [SQUEAK_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 1.19 // +3 semitones
    },
    [GIANT_ID]: {
        gender: SPEECH_GENDER.MALE,
        volume: 100,
        pitch: 0.84 // -3 semitones
    },
    [KITTEN_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 1.41 // +6 semitones
    }
} as const;
export type VOICE_INFO_ELEMENT = typeof VOICE_INFO.type;
export const VOICE_TYPE = {
    [ALTO_ID]: ALTO_ID,
    [TENOR_ID]: TENOR_ID,
    [SQUEAK_ID]: SQUEAK_ID,
    [GIANT_ID]: GIANT_ID,
    [KITTEN_ID]: KITTEN_ID,
} as const;
export type VOICE_TYPE_KEY = keyof typeof VOICE_TYPE;
/**
 * the url of the synthesis server.
 */
const SERVER_HOST = 'https://synthesis-service.scratch.mit.edu';

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
export const LANGUAGE_INFO: Type_language_info = {
    [ENGLISH_ID]: {
        name: 'English',
        locales: ['en'],
        speechSynthLocale: 'en-US'
    },
    [JAPANESE_ID]: {
        name: 'Japanese',
        locales: ['ja'],
        speechSynthLocale: 'ja-JP'
    },
} as const;

export const VOICE_LOCALE = {
    [ENGLISH_ID]: 'en-EN',
    [JAPANESE_ID]: 'ja-JP',
} as const;

type TYPE_VOICE_LOCALE = typeof VOICE_LOCALE[keyof typeof VOICE_LOCALE];

/**
 * Voice
 * スピーチする文字列に対応したSpeechPlayerが１対１で存在する
 */
export class Voice {
    private _volume: number;
    private _pitch: number;
    private _locale: TYPE_VOICE_LOCALE;
    private _gender: Type_speech_gender;
    private _speechPlayer!: SpeechPlayer;
    private _text: string;
    constructor(text: string) {
        this._volume = 100;
        this._pitch = 0; // <== scratchPitch
        this._locale = VOICE_LOCALE[JAPANESE_ID];
        this._gender = SPEECH_GENDER.FEMALE;
        this._text = text;
    }
    setType( type : VOICE_TYPE_KEY ) {
        const element = VOICE_INFO[type];
        this._gender = element.gender;
        this._volume = element.volume;
        this._pitch = element.pitch;
    }
    setProperties(prop: VOICE_INFO_ELEMENT) {
        this._gender = prop.gender;
        this._volume = prop.volume;
        this._pitch = prop.pitch;
    }
    set gender( gender: Type_speech_gender) {
        this._gender = gender;
    }
    set volume( volume: number) {
        this._volume = volume;
    }
    set pitch( pitch: number ) {
        this._pitch = pitch;
    }
    public getSoundUrl(text : string) : string {
        let path = `${SERVER_HOST}/synth?locale=${this._locale}&gender=${this._gender}&text=${text}`;
        return path;
    }
    public async getVoiceData(text:string): Promise<Uint8Array<ArrayBuffer>> {
        const path = this.getSoundUrl(text);
        const data = await VoiceLoader.load(path);
        return data;
    }
    public async getSoundPlayer() : Promise<SpeechPlayer> {
        const data = await this.getVoiceData(this._text);
        const sound = new SpeechSound();
        const speechPlayer = await sound.setSound(data, {});
        speechPlayer.volume = this._volume;
        speechPlayer.pitch = this._pitch;
        this._speechPlayer = speechPlayer;
        return speechPlayer;
    }

    public async speech() : Promise<void> {
        if(this._speechPlayer == undefined) {
            await this.getSoundPlayer();
        }
        await this._speechPlayer.startSoundUntilDone();
    }

}