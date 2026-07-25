import type { IEntityLooks } from '../entity/IEntityLooks';
import type { ISpriteLooksBackdrop } from './ISpriteLookaBackdrop';
import type { ISpriteLooksSize } from './ISpriteLooksSize';
import type { ISpriteLayer } from './ISpriteLayer';
import type { ISpriteLooksBubble } from './ISpriteLooksBubble';
import type { ISpriteLooksCostume } from './ISpriteLooksCostume';
/**
 * Sprite Looks Appearance
 */
export interface ISpriteLooks extends IEntityLooks {
    /**
     * Sprite costume
     * ---
     * スプライトコスチュームに関する処理
     */
    readonly costume: ISpriteLooksCostume;
    /**
     * Stage Backdrop
     * ---
     * 背景に関する処理
     */
    readonly backdrop: ISpriteLooksBackdrop;

    /**
     * Size processings
     * ---
     * サイズの操作
     */
    readonly size : ISpriteLooksSize;

    /**
     * Sprite layer
     * ---
     * スプライト階層に関する処理
     */
    readonly layer : ISpriteLayer;

    /**
     * Sprite bubble
     * ---
     * スプライト吹き出しに関する処理
     */
    readonly bubble : ISpriteLooksBubble;

    /**
     * Visibility
     * ---
     * 可視性の操作
     */
    readonly visible: {show:()=>void, hide:()=>void};
};

