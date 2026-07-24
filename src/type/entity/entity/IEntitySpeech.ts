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
    /** Language locale */
    locale(locale: V_SPEECH_LOCALE): NextMethodsLocale;
    /** Type of speech */
    type(type: string): NextMethodsType;
    /** Copy and create type */
    typeCopyTo( type: string ): NextMethodsCopyTo;
    /** Gender */
    gender(gender:Type_speech_gender): NextMethodsGender;
    /** Volume */
    volume(volume: number) : NextMethodsVolume;
    /** Pitch */
    pitch(pitch: number) : NextMethodsPitch;

    /** Add volume */
    addVolume(volume:number): NextMethodsAddVolume;

    /** Add pitch */
    addPitch(pitch: number): NextMethodsAddPitch;
    /**
     * Speech text
     * @param words 
     */
    speech(words: string) : Promise<void>;

    /**
     * Stop all speech
     */
    stopAll() : void

}