import type { ISprite } from '.';
/**
 * スプライトの動き（向かせる）
 */
export interface ISpriteMotionPoint {
    /**
     * マウスカーソルへ向く
     */
    toMouseInStage(): void;
    /**
     * マウスカーソルへ向く(ステージ外でもOK)
     */
    toMouse(): void;
    /**
     * ターゲットの位置へ向く
     * @param target {Sprite} - ターゲット
     */
    toTarget(target: ISprite): void;
    /**
     * どこかを向く
     */
    toRandom(): void ;
};