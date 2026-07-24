import type { TSoundPlayerOption } from '../../sound/IAudioEngine';

/** Speech */
export interface ISpriteTextToSpeech {

    /**
     * Speech
     * @param words {string} - text
     * @param propertyType {string} - Speech property type
     */
    speech(words: string, propertyType: string ): void;
    /**
     * Wait until the speech is over.
     * @param words {string} - text
     * @param propertyType {string} - Speech property type
     */
    speechAndWait(words: string, propertyType: string ): Promise<void>;
    /**
     * Assign an identification type and set properties.
     * @param type {string} - Property identification type
     * @param properties {TSoundPlayerOption} - Property
     * @param gender {string} - Gender ( male/female )
     * @param locale {string} - locale
     */
    setSpeechProperties(type:string, properties?: TSoundPlayerOption, gender?:string, locale?:string): void;
}
