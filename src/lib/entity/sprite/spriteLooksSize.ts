import { EventEmitter } from 'events';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Sprite } from '.';
import { SpriteLooksSizeScale } from './spriteLooksSizeScale';
import type { TBoundsEx, TScaleArr, TScaleCanEmpty } from '../../../type/common/typeCommon';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLooksSize } from '../../../type/entity/sprite/ISpriteLooksSize';

/** サイズ */
export class SpriteLooksSize extends EventEmitter implements ISpriteLooksSize{

    private entity: Sprite;
    private _scale: SpriteLooksSizeScale;
    private _w!: number;
    private _h!: number;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super();
        this.entity = entity as Sprite;
        this._scale = new SpriteLooksSizeScale(entity);
    }
    /**
     * 横サイズ
     */
    get w () : number {
        if(this._w == undefined){
            const _bounds = this.drawingSize;
            this._w = _bounds.width;
        }
        return this._w;
    }
    /**
     * 横サイズ
     */
    set w (width: number) {
        this._w = width;
        if(this.hasSkin()){
            // sprite.init()実行後でないとSkinは作成されていない
            this._updateSizeW();
        }else{
            // ここに来る条件: SKIN未作成時にセッター実行されたとき
            const _update = this._updateSizeW.bind(this);
            this.removeListener(ScratchEvent.SPRITE_INIT, _update);
            // SKIN作成後に一度実行される
            this.once(ScratchEvent.SPRITE_INIT, _update);
        }
    }
    /**
     * 縦サイズ
     */
    get h () : number {
        if(this._h == undefined){
            if(this.hasSkin()){
                const _bounds = this.drawingSize;
                this._h = _bounds.width;
            }else{
                this._h = -Infinity;
            }
        }
        return this._h;
    }
    /**
     * 縦サイズ
     */
    set h (height: number) {
        this._h = height;
        if(this.hasSkin()){
            // sprite.init()実行後でないとSkinは作成されていない
            this._updateSizeH();
        }else{
            // ここに来る条件: SKIN未作成時にセッター実行されたとき
            const _update = this._updateSizeH.bind(this);
            this.removeListener(ScratchEvent.SPRITE_INIT, _update);
            // SKIN作成後に一度実行される
            this.once(ScratchEvent.SPRITE_INIT, _update);
        }
    }
    /**
     * Skin作成後にSprite.init()の中からキックされる
     */
    sizeUpdate() {
        if(this.listenerCount(ScratchEvent.SPRITE_INIT) > 0) {
            this.emit(ScratchEvent.SPRITE_INIT);
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
     */
    get scale() : SpriteLooksSizeScale {
        return this._scale;
    }
    /**
     * 縦横サイズ
     */
    set scale( scale : TScaleArr ) {
        this.entity.Properties.scale.w = scale[0];
        this.entity.Properties.scale.h = scale[1];
    }

    /**
     * 自分自身の縦横表示サイズを得る
     * @returns bounds: {left:number, top:number, right:number, bottom:number, width: number, height: number }
     */
    get drawingSize() : TBoundsEx{
        // スケールと座標位置、角度、表示非表示をレンダー側へ渡す
        this.entity.Properties.update();
        const bounds = this.entity.render.renderer.getBounds(this.entity.drawableID);
        const _bounds: TBoundsEx = {...bounds, width: bounds.right-bounds.left, height: bounds.top - bounds.bottom};
        return _bounds;
    }

    set drawingSize( size: TScaleCanEmpty) {
        if(size.w && size.h ) {
            this._w = size.w;
            this.h = size.h;
            
        }else{
            if(size.w) {
                this.w = size.w;

            }else if(size.h){
                this.h = size.h;
            }
        }
    }

    private hasSkin() : boolean {
        const _drawable = this.entity.render.renderer._allDrawables[this.entity.drawableID];
        if(_drawable == undefined){
            return false;
        }
        if(_drawable.skin == undefined){
            return false;
        }

        return true;

    }

}
