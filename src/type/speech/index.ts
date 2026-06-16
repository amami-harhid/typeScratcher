/**
 * Language ids. The value for each language id is a valid Scratch locale.
 */

export const SPEECH_LOCAL = {
    ENGLISH: 'en',
    JAPANESE: 'ja',
    JAPANESE_HIRA: 'ja-hira',
} as const;
export type Type_speech_local = typeof SPEECH_LOCAL[keyof typeof SPEECH_LOCAL]

export const SPEECH_GENDER = {
    MALE: 'male',
    FEMALE: 'female',
} as const;

export type Type_speech_gender = typeof SPEECH_GENDER[keyof typeof SPEECH_GENDER]

export type Type_properties = {[type:string]: {gender:Type_speech_gender, volume:number, pitch:number}};
