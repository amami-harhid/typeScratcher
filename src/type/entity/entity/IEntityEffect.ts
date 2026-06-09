import type { TImageEffectiveValue } from '../ImageEffective';
import type { TEntityEffects } from './TEntityOptions';
/** 効果 */
export interface IEntityEffect {
    /** イメージ効果 */
    get(): TEntityEffects;
    /**
     * イメージ効果を指定量だけ変える。
     * @param effective {TImageEffectiveValue} - イメージ効果
     * @param value {number} - 変更量
     */
    change(effective:TImageEffectiveValue, value:number): void;
    /**
     * イメージ効果を指定量にする。
     * @param effective {TImageEffectiveValue} - イメージ効果
     * @param value {number} - 指定量
     */
    set(effective:TImageEffectiveValue, value:number): void;
    /**
     * イメージ効果をクリアする（初期値に戻す）
     */
    clear() : void;


}