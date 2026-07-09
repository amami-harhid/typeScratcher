import type {FPS} from './fps';
/**
 * 環境設定
 */
export type TEnv = {
    /**
     * FPS
     */
    fps : FPS,
    /**
     * フキダシ(Bubble)の大きさ設定
     * Trueのとき、スプライトのサイズに連動してBubbleの大きさが変わる（ ディフォルト値=false )
     */
    bubbleScaleLinkedToSprite : boolean,
    /**
     * ウインドウサイズ
     */
    readonly WindowSize : {w: number, h: number},
    /**
     * ステージサイズ
     */
    readonly StageSize: {W: number, H:number},

    /**
     * モニター表示数（縦）
     */
    MonitorMaxRowSize: number,
    /**
     * デバッグモード
     */
    debugMode: boolean;
};