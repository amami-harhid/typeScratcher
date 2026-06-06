/**
 * Render
 */
import type { IRenderWebGL } from './IRenderWebGL';
import { StageLayering } from '../entity/stage/CStageLayering';

export type TRender = {
    /**
     * ステージ縦横比(縦÷高さの率)
     */
    readonly WHRate: number;

    /**
     * MonitorCanvasをリサイズする
     * @param w {number} 横幅
     * @param h {number} 縦幅
     */
    monitorCanvasResize(w?: number, h?: number): void;

    /**
     * ステージの横ピクセル数(CSSピクセル)
     */
    W: number;


}

export interface IRender {
    /**
     * ステージをリサイズする
     * @param w {number} - 横
     * @param h {number} - 縦
     */
    stageResize(w?: number, h?: number): void;
    /**
     * ステージ幅
     */
    readonly stageWidth: number;
    /**
     * ステージ高さ
     */
    readonly stageHeight: number;
    /**
     * Rendererを作成する
     * @param canvas: HTMLCanvasElement
     */
    createRenderer (canvas: HTMLCanvasElement): void;
    /**
     * Drawableを作成する
     * @param layer {StageLayering} - layer name
     * @returns {number} - drawableID.
     */
    createDrawable(layer: StageLayering) : number;
    /**
     * Rendererを取得する
     */
    readonly renderer: IRenderWebGL;
    
};