import { EntityLooks } from '../entity/entityLooks';
import { Sprite } from '../sprite';
import { SpriteLooksBubble } from './spriteLooksBubble';
import { SpriteLooksBackdrop } from './spriteLooksBackdrop';
import { SpriteLayer } from './spriteLayer';
import { SpriteLooksCostume } from './spriteLooksCostume';
import { SpriteLooksSize } from './spriteLooksSize';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLooksSize } from '../../../type/entity/sprite/ISpriteLooksSize';
import type { ISpriteLooksBackdrop } from '../../../type/entity/sprite/ISpriteLookaBackdrop';
import type { ISpriteLooksBubble } from '../../../type/entity/sprite/ISpriteLooksBubble';
import type { ISpriteLayer } from '../../../type/entity/sprite/ISpriteLayer';
import type { ISpriteLooks } from '../../../type/entity/sprite/ISpriteLooks';
import type { ISpriteLooksCostume } from '../../../type/entity/sprite/ISpriteLooksCostume';

/**
 * Sprite Looks(見た目)
 */
export class SpriteLooks extends EntityLooks implements ISpriteLooks{
    private _layer: ISpriteLayer;
    private _size : ISpriteLooksSize;
    private _bubble: ISpriteLooksBubble;
    private _costume: ISpriteLooksCostume;
    private _backdrop: ISpriteLooksBackdrop;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        super(entity);
        this._layer = new SpriteLayer(entity);
        this._size = new SpriteLooksSize(entity);
        this._bubble = new SpriteLooksBubble(entity);
        this._costume = new SpriteLooksCostume(entity);
        this._backdrop = new SpriteLooksBackdrop(entity);
    }
    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     */
    get costume() : ISpriteLooksCostume {
        return this._costume;
    }
    // /**
    //  * 背景番号、背景名を取り出すためのオブジェクト
    //  */
    get backdrop(): ISpriteLooksBackdrop{
        return this._backdrop;
    }
    /**
     * サイズ
     */
    get size() : ISpriteLooksSize {
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
    get bubble() : ISpriteLooksBubble {
        return this._bubble;
    }

    /**
     * 表示する
     */
    show() : void {
        const sprite = this.entity as Sprite;
        sprite.Properties.visible = true;
        sprite.render.renderer.updateDrawableVisible(sprite.drawableID, true);
    }
    /**
     * 隠す
     */
    hide() : void {
        const sprite = this.entity as Sprite;
        sprite.Properties.visible = false;
        sprite.render.renderer.updateDrawableVisible(sprite.drawableID, false);
    }

};

