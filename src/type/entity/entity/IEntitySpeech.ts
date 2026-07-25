import { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";
import type { Type_speech_gender } from "../../speech";


export interface NextMethods {
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddVolume;
    type(type:string): IEntitySpeech;
    speech( words: string): Promise<void>;
}

export interface NextMethodsLocale {
    type(type:string): NextMethodsType;
    speech( words: string): Promise<void>;
}
export interface NextMethodsCopyTo {
    gender(gender:Type_speech_gender): NextMethodsGender;
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;
}
export interface NextMethodsGender {
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;

}
export interface NextMethodsType {
    typeCopyTo(type: string): NextMethodsCopyTo;
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;
}
export interface NextMethodsPitch {
    volume(volume:number): NextMethodsVolume;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;
}
export interface NextMethodsVolume {
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;
}
export interface NextMethodsAddVolume {
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addPitch(pitch: number): NextMethodsAddPitch;
    speech( words: string): Promise<void>;
}
export interface NextMethodsAddPitch {
    volume(volume:number): NextMethodsVolume;
    pitch(pitch: number): NextMethodsPitch;
    addVolume(volume:number): NextMethodsAddVolume;
    speech( words: string): Promise<void>;
}


/**
 * Speech
 */
export interface IEntitySpeech {
    /** 
     * Language locale
     * ---
     * 言語ロケール(地域・国) 
     */
    locale(locale: V_SPEECH_LOCALE): NextMethodsLocale;
    /** 
     * Type of speech
     * ---
     * スピーチのタイプ
     */
    type(type: string): NextMethodsType;
    /** 
     * Copy and create type
     * ---
     * 既存のスピーチタイプをコピーして新しいタイプを作る
     */
    typeCopyTo( type: string ): NextMethodsCopyTo;
    /** 
     * Gender
     * ---
     * 声の性別 
     */
    gender(gender:Type_speech_gender): NextMethodsGender;
    /** 
     * Volume
     * ---
     * スピーチの音量 
     */
    volume(volume: number) : NextMethodsVolume;
    /** 
     * Pitch
     * ---
     * スピーチのピッチ 
     */
    pitch(pitch: number) : NextMethodsPitch;

    /** 
     * Add volume 
     * ---
     * スピーチの音量を指定量、変える 
     */
    addVolume(volume:number): NextMethodsAddVolume;

    /** 
     * Add pitch 
     * ---
     * スピーチのピッチを指定量、変える 
     */
    addPitch(pitch: number): NextMethodsAddPitch;

    /**
     * Speech text
     * ---
     * スピーチするテキスト
     * 
     * @param text 
     */
    speech(text: string) : Promise<void>;

    /**
     * Stop all speech
     * ---
     * スピーチを全て停止する
     */
    stopAll() : void

}