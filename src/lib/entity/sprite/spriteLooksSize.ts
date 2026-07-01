import { engine, Engine } from '../../engine';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Sprite } from '.';
import { SpriteLooksSizeScale } from './spriteLooksSizeScale';
import type { TBoundsEx, TScaleArr } from '../../../type/common/typeCommon';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLooksSize } from '../../../type/entity/sprite/ISpriteLooksSize';

/** サイズ */
export class SpriteLooksSize implements ISpriteLooksSize{

    private entity: Sprite;
    private _scale: SpriteLooksSizeScale;
    private _w!: number;
    private _h!: number;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
        this._scale = new SpriteLooksSizeScale(entity);
    }
    /**
     * 横サイズ
     * ```ts
     *  const width = this.Looks.Size.w;
     * ```
     */
    get w () : number {
        if(this._w == undefined){
            //const _org_w = this.entity.Properties.scale.w;
            //this.entity.Properties.scale.w = 100;
            const _bounds = this.drawingSize;
            this._w = _bounds.width;
            //this.entity.Properties.scale.w = _org_w;
        }
        return this._w;
    }
    /**
     * 横サイズ
     * ```ts
     *  this.Looks.Size.w = 150; // 150%
     *  this.Looks.Size.w += 10; // 10ずつ増やす
     * ```
     */
    set w (width: number) {
        this._w = width;
        if(this.hasSkin()){
            this._updateSizeW();
        }else{
            const scratchEvent = (engine as Engine).runtime.scratchEvent;
            const _update = this._updateSizeW.bind(this);
            scratchEvent.removeListener(ScratchEvent.SPRITE_INIT, _update);
            scratchEvent.once(ScratchEvent.SPRITE_INIT, _update);
        }
    }
    /**
     * 縦サイズ
     * ```ts
     *  const height = this.Looks.Size.h;
     * ```
     */
    get h () : number {
        if(this._h == undefined){
            //const _org_h = this.entity.Properties.scale.h;
            //this.entity.Properties.scale.h = 100;
            if(this.hasSkin()){
                const _bounds = this.drawingSize;
                this._h = _bounds.width;
            }else{
                this._h = -Infinity;
            }
            //this.entity.Properties.scale.h = _org_h;
        }
        return this._h;
    }
    /**
     * 縦サイズ
     * ```ts
     *  this.Looks.Size.h = 150; // 150%
     *  this.Looks.Size.h += 10; // 10ずつ増やす
     * ```
     */
    set h (height: number) {
        this._h = height;
        // sprite.init()実行後でないとSkinは作成されていない
        if(this.hasSkin()){
            this._updateSizeH();
        }else{
            const scratchEvent = (engine as Engine).runtime.scratchEvent;
            const _update = this._updateSizeH.bind(this);
            scratchEvent.removeListener(ScratchEvent.SPRITE_INIT, _update);
            scratchEvent.once(ScratchEvent.SPRITE_INIT, _update);
        }
    }
    sizeUpdate() {
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        if(scratchEvent.listenerCount(ScratchEvent.SPRITE_INIT) > 0) {
            scratchEvent.emit(ScratchEvent.SPRITE_INIT);
        }
    }
    private _updateSizeW(): void {
        const width = this._w;
        this.entity.Properties.scale.w = 100;
        const _bounds = this.drawingSize;
        const _scale = width / _bounds.width * 100;
        this.entity.Properties.scale.w = _scale;    
    }
    private _updateSizeH(): void {
        const height = this._h;
        this.entity.Properties.scale.h = 100;
        const _bounds = this.drawingSize;
        const _scale = height / _bounds.height * 100;
        this.entity.Properties.scale.h = _scale;
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
    get scale() : SpriteLooksSizeScale {
        return this._scale;
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
        // スケールと座標位置、角度、表示非表示をレンダー側へ渡す
        this.entity.Properties.update();
        // this.entity.render.renderer.updateDrawableScale(this.entity.drawableID, [this.entity.Properties.scale.w, this.entity.Properties.scale.h]);
        const bounds = this.entity.render.renderer.getBounds(this.entity.drawableID);
        const _bounds: TBoundsEx = {...bounds, width: bounds.right-bounds.left, height: bounds.top - bounds.bottom};
        return _bounds;
    }
    private hasSkin() : boolean {
        const _drawable = this.entity.render.renderer._allDrawables[this.entity.drawableID];
        if(_drawable == undefined)
            return false;
        if(_drawable.skin == undefined)
            return false;

        return true;

    }

}
