import { TVec3 } from "./type/common/typeCommon";

declare module 'twgl.js' {
    export const v3: {
        create(x:number, y:number) :TVec3;
    }
    export function createTexture(gl: WebGLRenderingContext, textureOptions: {auto: boolean, wrap: number}): WebGLTexture;

};
