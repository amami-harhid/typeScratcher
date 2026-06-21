export const SPEECH_LOCALE = {
    ENGLISH: 'en-EN',
    JAPANESE: 'ja-JP',
} as const;

export type V_SPEECH_LOCALE = typeof SPEECH_LOCALE[keyof typeof SPEECH_LOCALE];

import { SPEECH_GENDER, type Type_speech_gender } from ".";

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

export const VOICE_ID = {
    ALTO: ALTO_ID,
    TENOR: TENOR_ID,
    SQUEAK: SQUEAK_ID,
    GIANT: GIANT_ID,
    KITTEN: KITTEN_ID,
} as const;

export type K_VOICE_ID = keyof typeof VOICE_ID;
export type V_VOICE_ID = typeof VOICE_ID[keyof typeof VOICE_ID];
export type T_VOICE_INFO_ELEMENT = {gender: Type_speech_gender, volume:number, pitch: number};
export const VOICE_INFO : {[key in K_VOICE_ID]: T_VOICE_INFO_ELEMENT} = {
    [ALTO_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 0,  // 1
    },
    [TENOR_ID]: {
        gender: SPEECH_GENDER.MALE,
        volume: 100,
        pitch: 0,  //1
    },
    [SQUEAK_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 30,  // 1.19 // +3 semitones
    },
    [GIANT_ID]: {
        gender: SPEECH_GENDER.MALE,
        volume: 100,
        pitch: -30,  //0.84 // -3 semitones
    },
    [KITTEN_ID]: {
        gender: SPEECH_GENDER.FEMALE,
        volume: 100,
        pitch: 60,  // 1.41 // +6 semitones
    }
} as const;
