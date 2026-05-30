import { ISoundOption, SoundOption } from "./SoundOption";
import { type ISound } from "../sound/ISound";
/** イベント */
export interface IEntitySound {

    /**
     * 音を追加する
     * @param soundName {string} - 音の名前
     */
    add(soundName: string) : void;

    /**
     * 音を鳴らす
     * @param soundName {string} - 音の名前
     */
    play(sound: ISound): Promise<void>;
    /**
     * 終わるまで音を鳴らす
     * @param soundName {string} - 音の名前
     */
    playUntilDone(soundName: string): Promise<void>;
    /**
     * サウンドオプションをクリアする
     */
    clearEffects(): Promise<void>;
    /**
     * 鳴っている音を止める
     */
    stop(): void;
    /**
     * 鳴っている音を「すぐに」止める
     */
    stopImmediately(): void;
    /** 音量 */
    readonly volume: number;
    /** ピッチ */
    readonly pitch: number;
}