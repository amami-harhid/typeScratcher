import type { ISprite } from '.';
/**
 * Motion of pointing
 */
export interface ISpriteMotionPoint {
    /**
     * Face to the mouse cursor, when the mouse cursor is inside the stage.
     */
    toMouseInStage(): void;

    /**
     * Face to the mouse cursor
     */
    toMouse(): void;

    /**
     * Face to the target's position.
     * 
     * @param target {Sprite} - target
     */
    toTarget(target: ISprite): void;

    /**
     * Face the random direction
     */
    toRandom(): void ;
};