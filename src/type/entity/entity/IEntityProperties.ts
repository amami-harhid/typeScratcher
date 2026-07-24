import { ScratchRenderProperties } from "../../render/IRenderWebGL";
import type { RotationValue } from "../RotationStyle";

/** Coordinate */
export interface IPosition {
    x: number;
    y: number;
}
/** Scale */
export interface IScale {
    w: number;
    h: number;
}
/** Properties */
export interface IEntityProperties {
    /** Coordinate(position) */
    position: IPosition;
    /** Scale */
    scale: IScale;
    /** angle degree */
    degree: number;
    /** visibility */
    visible: boolean;
    /** Style of rotation */
    rotationStyle: RotationValue;
    /** Apply properties to the renderer */
    update():void;
    /** Apply properties to the renderer */
    updateDrawableProperties(prop: ScratchRenderProperties):void;
}