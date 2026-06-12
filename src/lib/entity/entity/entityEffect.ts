import { ImageEffective, type TImageEffectiveValue } from '../../../type/entity/ImageEffective';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityEffect } from '../../../type/entity/entity/IEntityEffect';
import type { TEntityEffects } from '../../../type/entity/entity/TEntityOptions';

/** 効果 */
export class EntityEffect implements IEntityEffect {

    protected entity: IEntity;
    protected _effect: TEntityEffects;

    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._effect = {};
        this.clear();
    }
    set effect( _effect: TEntityEffects) {
        this._effect = _effect;
    }
    get(): TEntityEffects {
        return this._effect;
    }
    /**
     * イメージ効果を指定量だけ変える。
     * @param effective {TImageEffectiveValue} - イメージ効果
     * @param value {number} - 変更量
     */
    change(effective:TImageEffectiveValue, value:number): void {
        if(effective == ImageEffective.COLOR){
            const v = (this._effect.color)? this._effect.color: 0;
            this._effect.color = v + value;
            this._effect.color = this._effect.color % 200;
        }else if(effective == ImageEffective.FISHEYE ){
            const v = (this._effect.fisheye)?this._effect.fisheye:0;
            this._effect.fisheye = v + value;
        }else if(effective == ImageEffective.WHIRL ){
            const v = (this._effect.whirl)?this._effect.whirl:0;
            this._effect.whirl = v + value;
        }else if(effective == ImageEffective.PIXELATE ){
            const v = (this._effect.pixelate)?this._effect.pixelate:0;
            this._effect.pixelate = v + value;
        }else if(effective == ImageEffective.MOSAIC ){
            const v = (this._effect.mosaic)?this._effect.mosaic:0;
            this._effect.mosaic = v + value;
        }else if(effective == ImageEffective.BRIGHTNESS ){
            const v = (this._effect.brightness)?this._effect.brightness:0;
            this._effect.brightness = v + value;
        }else if(effective == ImageEffective.GHOST ){
            const v = (this._effect.ghost)?this._effect.ghost:0;
            const nv = v + value;
            if(nv < 0 ){
                this._effect.ghost = 0;
            }else if(nv > 100) {
                this._effect.ghost = 100;
            }else{
                this._effect.ghost = nv;
            }
        }
    }
    /**
     * イメージ効果を指定量にする。
     * @param effective {TImageEffectiveValue} - イメージ効果
     * @param value {number} - 指定量
     */
    set(effective:TImageEffectiveValue, value:number): void {
        if(effective == ImageEffective.COLOR){
            this._effect.color = value;
        }else if(effective == ImageEffective.FISHEYE ){
            this._effect.fisheye = value;
        }else if(effective == ImageEffective.WHIRL ){
            this._effect.whirl = value;
        }else if(effective == ImageEffective.PIXELATE ){
            this._effect.pixelate = value;
        }else if(effective == ImageEffective.MOSAIC ){
            this._effect.mosaic = value;
        }else if(effective == ImageEffective.BRIGHTNESS ){
            this._effect.brightness = value;
        }else if(effective == ImageEffective.GHOST ){
            this._effect.ghost = value;
        }
    }
    /**
     * イメージ効果をクリアする（初期値に戻す）
     */
    clear() : void {
        this._effect.color = 0;
        this._effect.fisheye = 0;
        this._effect.whirl = 0;
        this._effect.pixelate = 0;
        this._effect.mosaic = 0;
        this._effect.brightness = 0;
        this._effect.ghost = 0;
    }


}