import { type IScratchSoundPlayer, type TEffectChain } from '../sound/IAudioEngine';

/** Positon */
export declare type TPositionCanEmpty = {
    x?: number,
    y?: number,
};
export declare type TPosition = {
    x: number,
    y: number,
};
declare interface TwoNumberArray {
    0: number,
    1: number,
    length: 2,
}
export declare type TPositionArray = TwoNumberArray;
/** Scale */
export declare type TScaleCanEmpty = {
    w?: number,
    h?: number,
}
/** Scale */
export declare type TScale = {
    w: number,
    h: number,
}
export declare type TScaleArr = TwoNumberArray;

/** Size */
export declare type TSize = {
    width: number,
    height: number,
}
/** Size (X,Y) */
export declare type TSizeXY = {
    x: number,
    y: number,
}
/** Distance */
export declare type TDistance = {
    x?: number,
    y?: number,
}

/** Dimensions (top, bottom, left, and right) */
export declare type TBounds = {
    top: number,
    bottom: number,
    left: number,
    right: number,
}
/** Size (width, heigth) and Dimensions */
export interface TBoundsEx extends TBounds {
    width: number,
    height: number,
}

/** Vec3 */
export declare type TVec3 = {
    x: number,
    y: number,
    z: number,
}
export declare type S3ImageData = {name:string, data:string|HTMLImageElement, skinId:number};
export declare type S3SoundData = {name?:string, data?:Uint8Array<ArrayBuffer>, soundPlayer?: IScratchSoundPlayer;effectChain?: TEffectChain};
export declare type S3FontData = {name?:string, data?:string[]};