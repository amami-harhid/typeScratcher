import type {FPS} from './fps';
/**
 * Environment
 * ---
 * 環境設定
 */
export type TEnv = {
    /**
     * FPS Value
     * ---
     * FPS値
     */
    fps : FPS,
 
    /**
     * Speech Bubble Size Settings.
     * When `true`, the Bubble size changes in conjunction with the sprite size (default value = false).
     * 
     * ---
     * 吹き出しサイズをスプライト側と連動させる
     * `true`のとき吹き出しのサイズがスプライトの大きさに連動する
     */
    bubbleScaleLinkedToSprite : boolean,

    /**
     * Window size
     * ---
     * ウィンドウサイズ
     */
    readonly WindowSize : {w: number, h: number},
    /**
     * Stage size
     * ---
     * ステージサイズ
     */
    readonly StageSize: {W: number, H:number},

    /**
     * Monitor display count (vertical)
     * 
     * ---
     * モニター表示数（縦）
     */
    MonitorMaxRowSize: number,

    /**
     * Debug mode
     * --- 
     * デバッグモード
     */
    debugMode: boolean;
};