import { Sprite } from '../sprite';
import { StageLayering } from '../../../type/entity/stage/CStageLayering';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLayer } from '../../../type/entity/sprite/ISpriteLayer';

/** 階層 */
export class SpriteLayer implements ISpriteLayer {
 
    protected entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
    }

    /**
     * @internal
     * 最前面にする
     */
    gotoFrontLayer() : void {
        this.entity.render.renderer.setDrawableOrder(this.entity.drawableID, Infinity, StageLayering.SPRITE_LAYER, true);
    }
    /**
     * @internal
     * 最背面にする
     */
    gotoBackLayer() : void {
        this.entity.render.renderer.setDrawableOrder(this.entity.drawableID, -Infinity, StageLayering.SPRITE_LAYER, true);
    }
    /**
     * @internal
     * 手前に出す
     * @param nLayer　{number} - 階層数 
     */
    goForwardLayers(nLayer: number) : void {
        this.entity.render.renderer.setDrawableOrder(this.entity.drawableID, nLayer, StageLayering.SPRITE_LAYER, true);
    }
    /**
     * 奥に下げる
     * @param nLayer {number} - 階層数
     */
    goBackwardLayers(nLayer: number) : void {
        this.entity.render.renderer.setDrawableOrder(this.entity.drawableID, -nLayer, StageLayering.SPRITE_LAYER, true);
    }

}