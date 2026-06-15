import type { TSoundPlayerOption } from "../../sound/IAudioEngine";
import type { Type_speech_gender, Type_speech_local } from "../../speech/ITextToSpeech";

/**
 * スピーチ機能
 */
export interface IEntitySpeech {

    /**
     * テキストをスピーチする
     * @param words 
     * @param type 
     */
    speech(words: string, type: string) : Promise<void>;

    /**
     * スピーチプロパティ設定
     * @param type 
     * @param gender 
     * @param locale 
     * @param properties 
     */
    setSpeechProperties(type:string, gender:Type_speech_gender, locale:Type_speech_local ,properties:TSoundPlayerOption): void;

}