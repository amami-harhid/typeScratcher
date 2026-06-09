import type { IEntityLooks } from '../entity/IEntityLooks';
import type { ISpriteCostume } from './ISpriteCostume';
import type { ISpriteBackdrop } from './ISpriteBackdrop';
import type { ISpriteSize } from './ISpriteSize';
import type { ISpriteLayer } from './ISpriteLayer';
import type { ISpriteBubble } from './ISpriteBubble';
/**
 * Sprite Looks(見た目)
 */
export interface ISpriteLooks extends IEntityLooks {
    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     */
    readonly costume: ISpriteCostume;

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
    readonly bubble : ISpriteBubble;

        /**
     * 表示する
     */
    show() : void;
    /**
     * 隠す
     */
    hide() : void;

};

