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
     * Speech Bubble Size Settings
     * 
     * When True, the Bubble size changes in conjunction with the sprite size (default value = false).
     */
    bubbleScaleLinkedToSprite : boolean,
    /**
     * Window size
     */
    readonly WindowSize : {w: number, h: number},
    /**
     * Stage size
     */
    readonly StageSize: {W: number, H:number},

    /**
     * Monitor display count (vertical)
     */
    MonitorMaxRowSize: number,
    /**
     * Debug mode
     */
    debugMode: boolean;
};