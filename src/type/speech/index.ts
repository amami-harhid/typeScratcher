/**
 * Language ids. The value for each language id is a valid Scratch locale.
 */

/**
 * SPEECH LOCAL
 * ---
 * スピーチロケール(地域・国)
 */
export const SPEECH_LOCAL = {
    /**
     * ENGLISH
     * ---
     * 英語
     */
    ENGLISH: 'en',
    /**
     * JAPANESE
     * ---
     * 日本語
     */
    JAPANESE: 'ja',
    /**
     * JAPANESE_HIRA
     * ---
     * ひらがな
     */
    JAPANESE_HIRA: 'ja-hira',
} as const;
export type Type_speech_local = typeof SPEECH_LOCAL[keyof typeof SPEECH_LOCAL]

/**
 * Speech gender
 * ---
 * スピーチの声の性別
 */
export const SPEECH_GENDER = {
    /**
     * MAIL
     * ---
     * 男性の声
     */
    MALE: 'male',
    /**
     * FEMAIL
     * ---
     * 女性の声
     */
    FEMALE: 'female',
} as const;

export type Type_speech_gender = typeof SPEECH_GENDER[keyof typeof SPEECH_GENDER]

export type Type_properties = {[type:string]: {gender:Type_speech_gender, volume:number, pitch:number}};
