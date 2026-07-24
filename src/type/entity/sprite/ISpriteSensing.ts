import type { ISpriteDragMode } from "./ISpriteDragMode";
import type { IEntitySensing } from "../entity/IEntitySensing";
import type { ISpriteSensingEdge } from './ISpriteSensingEdge';
import type { ISpriteSensingColor } from './ISpriteSensingColor';
import type { ISpriteSensingMouse } from './ISpriteSensingMouse';
import type { ISpriteSensingSprite } from './ISpriteSensingSprite';
/**
 * Sprite Sensing
 */
export interface ISpriteSensing extends IEntitySensing{

    /**
     * Methods Related to edge
     */
    readonly edge: ISpriteSensingEdge;
    /**
     * Methods Related to Mouse
     */
    readonly mouse: ISpriteSensingMouse;
    /**
     * Methods Related to Color
     */
    readonly color: ISpriteSensingColor;

    /**
     * Methods Related to Sprite
     */
    readonly sprite: ISpriteSensingSprite;

    /**
     * Methods Related to Dragging
     */
    readonly dragMode :ISpriteDragMode;
};