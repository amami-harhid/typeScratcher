import type { IEntityLooks } from '../entity/IEntityLooks';
import type { ISpriteLooksBackdrop } from './ISpriteLookaBackdrop';
import type { ISpriteSize } from './ISpriteSize';
import type { ISpriteLayer } from './ISpriteLayer';
import type { ISpriteLooksBubble } from './ISpriteLooksBubble';
import type { ISpriteLooksCostume } from './ISpriteLooksCostume';
/**
 * Sprite Looks(見た目)
 */
export interface ISpriteLooks extends IEntityLooks {
    /**
     * コスチュームを操作する
     */
    readonly costume: ISpriteLooksCostume;
    /**
     * 背景を操作する
     */
    readonly backdrop: ISpriteLooksBackdrop;

    /**
     * サイズ
     */
    readonly size : ISpriteSize;

    /**
     * 階層
     * 
     * {@link Layer}
     */
    readonly layer : ISpriteLayer;

    /**
     * フキダシ
     */
    readonly bubble : ISpriteLooksBubble;

        /**
     * 表示する
     */
    show() : void;
    /**
     * 隠す
     */
    hide() : void;

};

