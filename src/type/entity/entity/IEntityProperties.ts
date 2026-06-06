import { ScratchRenderProperties } from "../../render/IRenderWebGL";
import type { RotationValue } from "../RotationStyle";

/** 座標 */
export interface IPosition {
    x: number;
    y: number;
}
/** スケール */
export interface IScale {
    w: number;
    h: number;
}
/** プロパティ */
export interface IEntityProperties {
    /** 座標 */
    position: IPosition;
    /** スケール */
    scale: IScale;
    /** 角度 */
    degree: number;
    /** 表示・非表示 */
    visible: boolean;
    /** 回転方法 */
    rotationStyle: RotationValue;
    /** プロパティをレンダラーへ反映 */
    update():void;
    /** プロパティをレンダラーへ反映 */
    updateDrawableProperties(prop: ScratchRenderProperties):void;
}