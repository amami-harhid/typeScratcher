import type { IEntityLooks } from '../entity/IEntityLooks';
import type { ISpriteLooksBackdrop } from './ISpriteLookaBackdrop';
import type { ISpriteLooksSize } from './ISpriteLooksSize';
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
    readonly size : ISpriteLooksSize;

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
    //show() : void;
    /**
     * 隠す
     */
    //hide() : void;

    /**
     * 見え方
     */
    readonly visible: {show:()=>void, hide:()=>void};
};

