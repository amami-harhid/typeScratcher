/**
 * Sensing Timer
 * ---
 * 『調べる』タイマー
 */
export interface IEntitySensingTimer {

    /**
     * timer ( ms )
     * ---
     * タイマー値(ms)
     */
    readonly timer : number;

    /**
     * reset timer
     * ---
     * タイマーをリセット
     */
    reset(): void;
};