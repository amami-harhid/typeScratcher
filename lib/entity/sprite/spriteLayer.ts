import { StageLayering } from '@Type/stage/CStageLayering';
import { Sprite } from '../sprite';
import type { ISprite } from '@Type/sprite';

/** 階層 */
export class SpriteLayer {
 
    private entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }

    /**
     * @internal
     * 最前面にする
     */
    gotoFront() : void {
        this.entity.render.renderer.setDrawableOrder(this.entity.drawableID, Infinity, StageLayering.SPRITE_LAYER, true);
    }
    /**
     * @internal
     * 最背面にする
     */
    gotoBack() : void {
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