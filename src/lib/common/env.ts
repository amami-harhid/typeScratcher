import type { TEnv } from "../../type/common/env";
import type { FPS } from "../../type/common/fps";
const fps:FPS = 30;
/**
 * Environment
 * ---
 * 環境設定
 */
export const Env: TEnv = {
    /**
     * FPS value
     * 
     * ---
     * FPS値
     */
    fps : fps,

    /**
     * Synchronize the speech bubble size with the sprite.
     * 
     * ---
     * 吹き出しサイズをスプライト側と連動させる
     */    
    bubbleScaleLinkedToSprite : false,

    /**
     * Monitor display count (vertical)
     * 
     * ---
     * モニター表示数（縦）
     */
    MonitorMaxRowSize: 8,

    /**
     * Window size
     * 
     * ---
     * ウィンドウサイズ
     */
    WindowSize : {w: innerWidth, h: innerHeight} as const,

    /**
     * Stage size
     * 
     * ---
     * ステージサイズ
     */
    StageSize : { W: 480, H: 360} as const,

    /**
     * Debug mode
     * 
     * ---
     * デバッグモード
     */
    debugMode : false,
};