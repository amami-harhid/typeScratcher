import { V_SPEECH_LOCALE } from "../../../type/speech/IVoice";
import type { TSoundPlayerOption } from "../../sound/IAudioEngine";
import type { Type_speech_gender, Type_speech_local } from "../../speech";


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
export interface NextMethodsType {
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

    locale(locale: V_SPEECH_LOCALE): NextMethodsLocale;

    type(type: string): NextMethodsType;

    volume(volume: number) : NextMethodsVolume;

    pitch(pitch: number) : NextMethodsPitch;

    addVolume(volume:number): NextMethodsAddVolume;

    addPitch(pitch: number): NextMethodsAddPitch;
    /**
     * テキストをスピーチする
     * @param words 
     */
    speech(words: string) : Promise<void>;

}