import type { IPenSpriteSize } from './IPenSpriteSize';
import type { IPenSpriteHSVColor } from './IPenSpriteHSVColor';
/**
 * PenSprite
 * @internal
 */
export interface IPenSprite {

    /**
     * Clear pen drawings
     */
    penClear(): void;
    /**
     * Lift the pen.
     */
    penUp(): void;
    /**
     * Lower the pen.
     */
    penDown(): void;

    /**
     * HSV color
     */
    readonly HSVColor : IPenSpriteHSVColor;

    /**
     * Stamp
     */
    stamp(): void;

    /**
     * Stamp the stage
     */
    //stampStage(): void;

    /**
     * Size
     */
    readonly size: IPenSpriteSize;
}