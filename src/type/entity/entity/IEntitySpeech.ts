import { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";
import type { TSoundPlayerOption } from "../../sound/IAudioEngine";
import type { Type_speech_gender, Type_speech_local } from "../../speech";


export interface NextMethods {
    volume(volume:number): NextMethodsD;
    pitch(pitch: number, plus?:boolean): NextMethodsC;
    type(type:string): IEntitySpeech;
    speech( words: string, type: string): Promise<void>;
}
export interface NextMethodsA {
    type(type:string): IEntitySpeech;
    speech( words: string, type: string): Promise<void>;
}
export interface NextMethodsB {
    volume(volume:number): NextMethodsD;
    pitch(pitch: number, plus?:boolean): NextMethodsC;
    speech( words: string, type: string): Promise<void>;
}
export interface NextMethodsC {
    volume(volume:number): NextMethodsD;
    speech( words: string, type: string): Promise<void>;
}
export interface NextMethodsD {
    pitch(pitch: number, plus?:boolean): NextMethodsC;
    speech( words: string, type: string): Promise<void>;
}

/**
 * スピーチ機能
 */
export interface IEntitySpeech {

    locale(locale: V_SPEECH_LOCALE): NextMethodsA;

    type(type: string): IEntitySpeech;

    volume(volume: number) : NextMethodsD;

    pitch(pitch: number, plus?:boolean) : NextMethodsC;

    addVolume(volume:number): IEntitySpeech;

    addPitch(pitch: number): IEntitySpeech;
    /**
     * テキストをスピーチする
     * @param words 
     */
    speech(words: string) : Promise<void>;

    /**
     * スピーチプロパティ設定
     * @param type 
     * @param gender 
     * @param locale 
     * @param properties 
     */
    setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption): void;

}