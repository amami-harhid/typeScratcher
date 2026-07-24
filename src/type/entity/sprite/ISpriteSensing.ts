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
     * Methods Related to Edges
     */
    readonly edge: ISpriteSensingEdge;
    /**
     * マウス関連
     */
    readonly mouse: ISpriteSensingMouse;
    /**
     * 色関連
     */
    readonly color: ISpriteSensingColor;

    /**
     * スプライト関連
     */
    readonly sprite: ISpriteSensingSprite;

    /**
     * Drag Mode
     */
    readonly dragMode :ISpriteDragMode;
};