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
    /** 再生中かどうかを返す */
    readonly isPlaying: boolean;
    /** 音データをロードする */
    load(): Promise<void>;
    /** 再生する */
    play(): Promise<void>;
    /** 停止する */
    stop(): void;
    /** すぐに停止する */
    stopImmediately(): void;
    /** 音量 */
    readonly volume: number;
    /** ピッチ */
    readonly pitch: number;
    /**
     * 音量を設定する
     * @param volume 
     */
    setVolume(volume: number): void;
    /** 音量を変化させる */
    addVolume(volume: number): void;
    /**
     * ピッチを設定する
     * @param pitch 
     */
    setPitch(pitch: number): void;
    /**
     * ピッチを変化させる
     * @param pitch 
     */
    addPitch(pitch: number): void;   
}