//import { Utils } from '../../utils/utils';
import { Sprite } from '../sprite';
import type { TBounds, TScaleArr } from '@Type/common/typeCommon';
import type { ISprite } from '@Type/sprite';
import type { ISpriteSize } from '@Type/sprite/ISpriteSize';

/** サイズ */
export class SpriteSize implements ISpriteSize{

    private entity: ISprite;
    private _w: number = 100;
    private _h: number = 100;

    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
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
        return {w: this.entity.Properties.scale.w, h: this.entity.Properties.scale.h};
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
    set scale( scale : { w:number, h:number} ) {
        this.entity.Properties.scale.w = scale.w;
        this.entity.Properties.scale.h = scale.h;
    }

    /**
     * 自分自身の縦横表示サイズを得る
     * @returns dimensions {w: number, h: number}
     * ```ts
     *  // スプライトの表示サイズを得る
     *  const {w,h} = this.Looks.Size.drawingSize;
     * ```
     */
    get drawingSize() : TBounds{
        const bounds = this.entity.render.renderer.getBounds(this.entity.drawableID);
        return bounds;
    }

}
