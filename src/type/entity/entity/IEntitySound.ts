import { type ISound } from "../../sound";
/** 
 * Event processings
 * ---
 * イベントに関する操作 
 */
export interface IEntitySound {
    /**
     * Add sound data
     * 
     * ---
     * サウンドデータ配列を追加する
     * 
     * @param soundName {string} - name of sound
     */
    add(sounds: ISound[]) : void;

    /**
     * Play the sound.
     * 
     * ---
     * 指定したサウンドを鳴らす
     * 
     * @param sound {ISound} - sound data
     */
    play(sound: ISound): void;
 
    /**
     * Play the sound until it finishes.
     * 
     * ---
     * 指定したサウンドを鳴らし終わるまで待つ
     * 
     * @param sound {ISound} - sound data
     */
    playUntilDone(sound: ISound): Promise<void>;

    /**
     * Clear sound options
     * 
     * ---
     * サウンド効果を初期化する
     */
    clearEffects(): Promise<void>;

    /**
     * Stop the sound that is playing.
     * 
     * ---
     * 鳴っているサウンドを止める
     */
    stop(): void;

    /**
     * Stop immediately the sound that is playing.
     * 
     * ---
     * 鳴っているサウンドをすぐに止める
     */
    stopImmediately(): void;

    /** 
     * Volume 
     * 
     * ---
     * 音量
     */
    getVolume(sound: ISound) : number;

    /** 
     * Add volume 
     * 
     * ---
     * 音量を指定量だけ変える
     */
    addVolume(sound: ISound, volume: number) : void;

    /** 
     * Set volume 
     * 
     * ---
     * 音量を設定する
     */
    setVolume(sound: ISound, volume: number) : void;

    /** 
     * Pitch 
     * 
     * ---
     * ピッチ
     */
    getPitch(sound: ISound) : number;

    /** 
     * Add pitch 
     * 
     * ---
     * ピッチを指定量だけ変える
     */
    addPitch(sound: ISound, pitch: number) : void;

    /** 
     * Set pitch 
     * 
     * ---
     * ピッチを設定する
     */
    setPitch(sound: ISound, pitch: number) : void;

}