/**
 * Sound
 */
export type SoundArgStringObject = { [key:string]:string };
export interface SSound{
    /**
     * @param image {SoundArgStringObject}
     */
    new(image:SoundArgStringObject):ISound;

};
export interface ISound {
    /** 音の名前 */
    readonly name: string;
}