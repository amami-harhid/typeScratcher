import type { IPenSpriteSize } from './IPenSpriteSize';
import type { IPenSpriteHSVColor } from './IPenSpriteHSVColor';
/**
 * PenSprite
 * @internal
 */
export interface IPenSprite {

    /**
     * ペン描画をクリアする
     */
    penClear(): void;
    /**
     * ペンを上げる
     */
    penUp(): void;
    /**
     * ペンを下げる
     */
    penDown(): void;

    /**
     * HSVカラー
     */
    readonly HSVColor : IPenSpriteHSVColor;

    /**
     * スタンプ
     */
    stamp(): void;

    /**
     * ステージをスタンプする
     */
    //stampStage(): void;

    /**
     * サイズ
     */
    readonly Size: IPenSpriteSize;
}