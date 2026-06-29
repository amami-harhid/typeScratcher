import { Sprite } from '.';
import type { TBounds, TBoundsEx, TScaleArr } from '../../../type/common/typeCommon';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLooksSize } from '../../../type/entity/sprite/ISpriteLooksSize';

/** サイズ */
export class SpriteLooksSize implements ISpriteLooksSize{

    private entity: Sprite;

    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
    }
    /**
     * 横サイズ
     * ```ts
     *  const width = this.Looks.Size.w;
     * ```
     */
    get w () : number {
        return this.entity.Properties.scale.w;
    }
    /**
     * 横サイズ
     * ```ts
     *  this.Looks.Size.w = 150; // 150%
     *  this.Looks.Size.w += 10; // 10ずつ増やす
     * ```
     */
    set w (width: number) {
        this.entity.Properties.scale.w = width;
    }
    /**
     * 縦サイズ
     * ```ts
     *  const height = this.Looks.Size.h;
     * ```
     */
    get h () : number {
        return this.entity.Properties.scale.h;
    }
    /**
     * 縦サイズ
     * ```ts
     *  this.Looks.Size.h = 150; // 150%
     *  this.Looks.Size.h += 10; // 10ずつ増やす
     * ```
     */
    set h (height: number) {
        this.entity.Properties.scale.h = height;
    }
    /**
     * 縦横サイズ
     * ```ts
     *  // 横150%, 縦100% にする
     *  const scale = this.Looks.Size.scale;
     *  console.log('横', scale.w);
     *  console.log('縦', scale.h);
     * ```
     */
    get scale() : {w:number,h:number} {
        return {w:this.entity.Properties.scale.w, h:this.entity.Properties.scale.h};
    }
    /**
     * 縦横サイズ
     * ```ts
     *  // 横150%, 縦100% にする
     *  this.Looks.Size.scale = {w:150, h:100};
     * ```
     * ```ts
     *  // 横10,縦20 ずつ増やす
     *  const scale = this.Looks.Size.scale;
     *  this.Looks.Size.scale = {w:scale.w +10, h:scale.h +20};
     * ```
     */
    set scale( scale : TScaleArr ) {
        this.entity.Properties.scale.w = scale[0];
        this.entity.Properties.scale.h = scale[1];
    }

    /**
     * 自分自身の縦横表示サイズを得る
     * @returns dimensions {w: number, h: number}
     * ```ts
     *  // スプライトの表示サイズを得る
     *  const {w,h} = this.Looks.Size.drawingSize;
     * ```
     */
    get drawingSize() : TBoundsEx{
        const bounds = this.entity.render.renderer.getBounds(this.entity.drawableID);
        const _bounds: TBoundsEx = {...bounds, width: bounds.right-bounds.left, height: bounds.top - bounds.bottom};
        return _bounds;
    }

}
