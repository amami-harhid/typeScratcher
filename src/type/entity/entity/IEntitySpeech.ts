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
 * スピーチ機能
 */
export interface IEntitySpeech {
    /** ロケール(言語) */
    locale(locale: V_SPEECH_LOCALE): NextMethodsLocale;
    /** タイプを指定 */
    type(type: string): NextMethodsType;
    /** タイプをコピー */
    typeCopyTo( type: string ): NextMethodsCopyTo;
    /** 性別 */
    gender(gender:Type_speech_gender): NextMethodsGender;
    /** 音量 */
    volume(volume: number) : NextMethodsVolume;
    /** ピッチ */
    pitch(pitch: number) : NextMethodsPitch;

    /** 音量を加える */
    addVolume(volume:number): NextMethodsAddVolume;

    /** ピッチを加える */
    addPitch(pitch: number): NextMethodsAddPitch;
    /**
     * テキストをスピーチする
     * @param words 
     */
    speech(words: string) : Promise<void>;

    /**
     * すべてのスピーチを停止する
     */
    stopAll() : void

}