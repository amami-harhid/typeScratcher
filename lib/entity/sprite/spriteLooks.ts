import { Sprite } from '../sprite';
import { SpriteSize } from './spriteSize';
import { SpriteLayer } from './spriteLayer';
import { SpriteEffect } from '../sprite/spriteEffect';
import { SpriteBubble } from './spriteBubble';
import { SpriteBackdrop } from './spriteBackdrop';
import { SpriteCostume } from './spriteCostume';
import type { ISpriteEffect } from '@Type/sprite/ISpriteEffect';
import type { ISpriteSize } from '@Type/sprite/ISpriteSize';
import type { ISprite } from '@Type/sprite';
import type { ISpriteBubble } from '@Type/sprite/ISpriteBubble';
import type { ISpriteLooks } from '@Type/sprite/ISpriteLooks';
import type { ISpriteCostume } from '@Type/sprite/ISpriteCostume';
import type { ISpriteBackdrop } from '@Type/sprite/ISpriteBackdrop';

/**
 * Sprite Looks(見た目)
 */
export class SpriteLooks implements ISpriteLooks{
    private entity: ISprite;
    private layer: SpriteLayer;
    private effect: ISpriteEffect;
    private _size : ISpriteSize;
    private bubble: ISpriteBubble;
    private costume: SpriteCostume;
    private backdrop: ISpriteBackdrop;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this.layer = new SpriteLayer(entity);
        this.effect = new SpriteEffect(entity);
        this._size = new SpriteSize(entity);
        this.bubble = new SpriteBubble(entity);
        this.costume = new SpriteCostume(entity);
        this.backdrop = new SpriteBackdrop(entity);
    }
    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     */
    get Costume() : ISpriteCostume {
        return this.costume;
    }
    // /**
    //  * 背景番号、背景名を取り出すためのオブジェクト
    //  */
    get Backdrop(): ISpriteBackdrop{
        return this.backdrop;
    }
    /**
     * サイズ
     */
    get Size() : ISpriteSize {
        return this._size;
    }
    /**
     * 表示する
     */
    show() : void {
        this.entity.render.renderer.updateDrawableVisible(this.entity.drawableID, true);
    }
    /**
     * 隠す
     */
    hide() : void {
        this.entity.render.renderer.updateDrawableVisible(this.entity.drawableID, false);
    }
    /**
     * 階層
     * 
     * {@link Layer}
     */
    get Layer() : SpriteLayer {
        return this.layer;
    }
    /**
     * 効果
     */
    get Effect() : ISpriteEffect {
        return this.effect;
    }
    /**
     * フキダシ
     */
    get Bubble() : ISpriteBubble {
        return this.bubble;
    }

};

