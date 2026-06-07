import type { IScratchSoundPlayer, TEffectChain } from "./IAudioEngine";

/**
 * SoundPlayer
 */
export interface ISoundPlayer {
    /** 再生状態 */
    readonly isPlaying: boolean;
    /** ピッチ */
    pitch : number;
    /** ボリューム */
    volume: number;
    /** Scratch SoundPlayer */
    readonly soundPlayer: IScratchSoundPlayer;
    /** 名称 */
    readonly name: string;
    /** エフェクトチェイン */
    effects: TEffectChain;
    /** 接続 */
    connect(): void;
    /** 再生 */
    play(): void;
    /** 再生して終わるまで待つ */
    startSoundUntilDone(): Promise<void>;
    /** 停止する */
    stop(): void;
    /** 即時に停止する */
    stopImmediately(): void;
}