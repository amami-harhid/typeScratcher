/**
 * Sound
 */
declare const SoundBrandSymbol: unique symbol;
export type SoundArgStringObject = { [key:string]:string };
export interface SSound{
    
    // ASTから一発で特定するための型ブランド
    readonly [SoundBrandSymbol]?: "SOUND_CLASS_BRAND";

    /**
     * @param image {SoundArgStringObject}
     */
    new(image:SoundArgStringObject | string):ISound;

};
export interface ISound {
    /** 音の名前 */
    readonly name: string;
}