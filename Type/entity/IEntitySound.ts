import { type ISound } from "@Type/sound/ISound";
/** イベント */
export interface IEntitySound {
    /** 音の名前のリスト */
    readonly soundKeys: string[];
    readonly soundMap: {[key:string]: ISound};
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
    /** 音量を取得する */
    getVolume(sound: ISound) : number;
    /** 音量を変える */
    addVolume(sound: ISound, volume: number) : void;
    /** 音量を設定する */
    setVolume(sound: ISound, volume: number) : void;
    /** ピッチを取得する */
    getPitch(sound: ISound) : number;
    /** ピッチを変える */
    addPitch(sound: ISound, pitch: number) : void;
    /** ピッチを設定する */
    setPitch(sound: ISound, pitch: number) : void;

}