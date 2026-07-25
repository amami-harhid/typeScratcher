import type { TImageEffectiveValue } from '../ImageEffective';
import type { TEntityEffects } from './TEntityOptions';
/** 
 * 画像効果 
 */
export interface IEntityEffect {
    /** 
     * get image effect.
     * ---
     * 画像効果の設定値を取得する
     */
    get(): TEntityEffects;

    /**
     * Change the image effect by a specified amount.
     * 
     * ---
     * 画像効果を指定値分だけ変える
     * 
     * @param effective {TImageEffectiveValue} - Image effect
     * @param value {number} - Amount of change
     */
    change(effective:TImageEffectiveValue, value:number): void;

    /**
     * Set the image effect to a specified amount.
     * 
     * ---
     * 画像効果を設定する
     * 
     * @param effective {TImageEffectiveValue} - Image effect
     * @param value {number} - Amount of change
     */
    set(effective:TImageEffectiveValue, value:number): void;

    /**
     * Clear image effects (reset to default values)
     * 
     * ---
     * 画像効果をクリアする（初期値に戻す)
     */
    clear() : void;


}