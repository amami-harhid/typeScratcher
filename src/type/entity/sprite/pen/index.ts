import type { IPenSpriteSize } from './IPenSpriteSize';
import type { IPenSpriteHSVColor } from './IPenSpriteHSVColor';
/**
 * PenSprite
 * ---
 * ペンスプライト
 */
export interface IPenSprite {

    /**
     * Clear pen drawings
     * 
     * ---
     * ペン描画を消去する
     */
    penClear(): void;

    /**
     * Lift the pen.
     * 
     * ---
     * ペンを上げる
     */
    penUp(): void;

    /**
     * Lower the pen.
     * 
     * ---
     * ペンを下げる
     */
    penDown(): void;

    /**
     * HSV color
     * ---
     * HSVカラー
     */
    readonly HSVColor : IPenSpriteHSVColor;

    /**
     * Stamp
     * 
     * ---
     * スタンプする
     */
    stamp(): void;

    /**
     * Size
     * 
     * ---
     * サイズ
     */
    readonly size: IPenSpriteSize;
}