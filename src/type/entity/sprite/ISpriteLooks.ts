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
     */
    readonly costume: ISpriteLooksCostume;
    /**
     * Stage Backdrop
     */
    readonly backdrop: ISpriteLooksBackdrop;

    /**
     * Size
     */
    readonly size : ISpriteLooksSize;

    /**
     * Sprite Layer
     */
    readonly layer : ISpriteLayer;

    /**
     * Sprite bubble
     */
    readonly bubble : ISpriteLooksBubble;

    /**
     * Visibility
     */
    readonly visible: {show:()=>void, hide:()=>void};
};

