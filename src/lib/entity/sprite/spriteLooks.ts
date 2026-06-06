import { SpriteSize } from './spriteSize';
import { SpriteLayer } from './spriteLayer';
import { SpriteEffect } from './spriteEffect';
import { SpriteBubble } from './spriteBubble';
import { SpriteBackdrop } from './spriteBackdrop';
import { SpriteCostume } from './spriteCostume';
import type { ISpriteEffect } from '../../../type/entity/sprite/ISpriteEffect';
import type { ISpriteSize } from '../../../type/entity/sprite/ISpriteSize';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteBubble } from '../../../type/entity/sprite/ISpriteBubble';
import type { ISpriteLooks } from '../../../type/entity/sprite/ISpriteLooks';
import type { ISpriteCostume } from '../../../type/entity/sprite/ISpriteCostume';
import type { ISpriteBackdrop } from '../../../type/entity/sprite/ISpriteBackdrop';

/**
 * Sprite Looks(見た目)
 */
export class SpriteLooks implements ISpriteLooks{
    protected entity: ISprite;
    private layer: SpriteLayer;
    private effect: ISpriteEffect;
    private _size : ISpriteSize;
    private _bubble: ISpriteBubble;
    private _costume: SpriteCostume;
    private _backdrop: ISpriteBackdrop;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this.layer = new SpriteLayer(entity);
        this.effect = new SpriteEffect(entity);
        this._size = new SpriteSize(entity);
        this._bubble = new SpriteBubble(entity);
        this._costume = new SpriteCostume(entity);
        this._backdrop = new SpriteBackdrop(entity);
    }
    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     */
    get Costume() : ISpriteCostume {
        return this._costume;
    }
    // /**
    //  * 背景番号、背景名を取り出すためのオブジェクト
    //  */
    get Backdrop(): ISpriteBackdrop{
        return this._backdrop;
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
        return this._bubble;
    }

};

