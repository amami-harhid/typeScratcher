/**
 * Sensing Timer
 * ---
 * 『調べる』タイマー
 */
export interface IEntitySensingTimer {

    /**
     * timer value ( ms )
     * ---
     * タイマー値(ms)
     */
    readonly msValue : number;

    /**
     * reset timer
     * ---
     * タイマーをリセット
     */
    reset(): void;
};