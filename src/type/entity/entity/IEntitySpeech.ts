import { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";
import type { Type_speech_gender } from "../../speech";


export interface NextMethods {
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddVolume;
    /** 
     * Type of speech
     * 
     * ---
     * スピーチのタイプ
     */
    type(type:string): IEntitySpeech;
    /**
     * Speech text
     * 
     * ---
     * テキストをスピーチする
     * 
     * @param text 
     */
    speech( words: string): Promise<void>;
}

export interface NextMethodsLocale {
    /** 
     * Type of speech
     * 
     * ---
     * スピーチのタイプ
     */
    type(type:string): NextMethodsType;
}
export interface NextMethodsCopyTo {
    /** 
     * Gender
     * 
     * ---
     * 声の性別 
     */
    gender(gender:Type_speech_gender): NextMethodsGender;
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;
}
export interface NextMethodsGender {
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;

}
export interface NextMethodsType {
    /** 
     * Copy and create type
     * 
     * ---
     * 既存のスピーチタイプをコピーして新しいタイプを作る
     */
    typeCopyTo(type: string): NextMethodsCopyTo;
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;
}
export interface NextMethodsPitch {
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;
}
export interface NextMethodsVolume {
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;
}
export interface NextMethodsAddVolume {
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;
}
export interface NextMethodsAddPitch {
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume:number): NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number): NextMethodsPitch;
    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;
}


/**
 * Speech
 */
export interface IEntitySpeech {
    /** 
     * Language locale
     * 
     * ---
     * 言語ロケール(地域・国) 
     */
    locale(locale: V_SPEECH_LOCALE): NextMethodsLocale;
    /** 
     * Type of speech
     * 
     * ---
     * スピーチのタイプ
     */
    type(type: string): NextMethodsType;
    /** 
     * Copy and create type
     * 
     * ---
     * 既存のスピーチタイプをコピーして新しいタイプを作る
     */
    typeCopyTo( type: string ): NextMethodsCopyTo;
    /** 
     * Gender
     * 
     * ---
     * 声の性別 
     */
    gender(gender:Type_speech_gender): NextMethodsGender;
    /** 
     * Volume
     * 
     * ---
     * スピーチの音量 
     */
    volume(volume: number) : NextMethodsVolume;
    /** 
     * Pitch
     * 
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number) : NextMethodsPitch;

    /** 
     * Add volume 
     * 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;

    /** 
     * Add pitch 
     * 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;

    /**
     * Speech text
     * 
     * ---
     * テキストをスピーチする
     * 
     * @param text 
     */
    speech(text: string) : Promise<void>;

    /**
     * Stop all speech
     * 
     * ---
     * スピーチを全て停止する
     */
    stopAll() : void

}