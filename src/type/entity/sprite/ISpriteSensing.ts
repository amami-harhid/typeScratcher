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
     * ---
     * 端に関する操作
     */
    readonly edge: ISpriteSensingEdge;
    /**
     * Methods Related to Mouse
     * ---
     * マウスに関する操作
     */
    readonly mouse: ISpriteSensingMouse;
    /**
     * Methods Related to Color
     * ---
     * 色に関する操作
     */
    readonly color: ISpriteSensingColor;

    /**
     * Methods Related to Sprite
     * ---
     * スプライトに関する操作
     */
    readonly sprite: ISpriteSensingSprite;

    /**
     * Methods Related to Dragging
     * ---
     * ドラッグ操作
     */
    readonly dragMode :ISpriteDragMode;
};