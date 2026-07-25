import type { ISprite } from '.';
/**
 * Motion of pointing
 */
export interface ISpriteMotionPoint {
    /**
     * Face to the mouse cursor, when the mouse cursor is inside the stage.
     * 
     * ---
     * マウスカーソルがステージ内にあるとき、マウスカーソルの方向に向かせる
     */
    toMouseInStage(): void;

    /**
     * Face to the mouse cursor
     * 
     * ---
     * マウスカーソルの方向に向かせる
     */
    toMouse(): void;

    /**
     * Face to the target's position.
     * 
     * ---
     * 指定した相手スプライトの方向へ向かせる
     * 
     * @param target {Sprite} - target
     */
    toTarget(target: ISprite): void;

    /**
     * Face the random direction
     * 
     * ---
     * ランダムな方向を向く
     */
    toRandom(): void ;
};