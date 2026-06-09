import { EntityLooks } from '../entity/entityLooks';
import { Sprite } from '../sprite';
import { SpriteSize } from './spriteSize';
import { SpriteLayer } from './spriteLayer';
import { SpriteBubble } from './spriteBubble';
import { SpriteBackdrop } from './spriteBackdrop';
import { SpriteCostume } from './spriteCostume';
import type { ISpriteSize } from '../../../type/entity/sprite/ISpriteSize';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteBubble } from '../../../type/entity/sprite/ISpriteBubble';
import type { ISpriteLooks } from '../../../type/entity/sprite/ISpriteLooks';
import type { ISpriteCostume } from '../../../type/entity/sprite/ISpriteCostume';
import type { ISpriteBackdrop } from '../../../type/entity/sprite/ISpriteBackdrop';
import type { ISpriteLayer } from '../../../type/entity/sprite/ISpriteLayer';

/**
 * Sprite Looks(見た目)
 */
export class SpriteLooks extends EntityLooks implements ISpriteLooks{
    private _layer: ISpriteLayer;
    private _size : ISpriteSize;
    private _bubble: ISpriteBubble;
    private _costume: ISpriteCostume;
    private _backdrop: ISpriteBackdrop;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        super(entity);
        this._layer = new SpriteLayer(entity);
        this._size = new SpriteSize(entity);
        this._bubble = new SpriteBubble(entity);
        this._costume = new SpriteCostume(entity);
        this._backdrop = new SpriteBackdrop(entity);
    }
    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     */
    get costume() : ISpriteCostume {
        return this._costume;
    }
    // /**
    //  * 背景番号、背景名を取り出すためのオブジェクト
    //  */
    get backdrop(): ISpriteBackdrop{
        return this._backdrop;
    }
    /**
     * サイズ
     */
    get size() : ISpriteSize {
        return this._size;
    }
    /**
     * 階層
     * 
     * {@link Layer}
     */
    get layer() : ISpriteLayer {
        return this._layer;
    }
    /**
     * フキダシ
     */
    get bubble() : ISpriteBubble {
        return this._bubble;
    }

    /**
     * 表示する
     */
    show() : void {
        const sprite = this.entity as Sprite;
        sprite.render.renderer.updateDrawableVisible(sprite.drawableID, true);
    }
    /**
     * 隠す
     */
    hide() : void {
        const sprite = this.entity as Sprite;
        sprite.render.renderer.updateDrawableVisible(sprite.drawableID, false);
    }

};

