import type { TImageEffectiveValue } from '../ImageEffective';
import type { TEntityEffects } from './TEntityOptions';
/** 効果 */
export interface IEntityEffect {
    /** get image effect  */
    get(): TEntityEffects;
    /**
     * Change the image effect by a specified amount.
     * @param effective {TImageEffectiveValue} - Image effect
     * @param value {number} - Amount of change
     */
    change(effective:TImageEffectiveValue, value:number): void;
    /**
     * Set the image effect to a specified amount.
     * @param effective {TImageEffectiveValue} - Image effect
     * @param value {number} - Amount of change
     */
    set(effective:TImageEffectiveValue, value:number): void;
    /**
     * Clear image effects (reset to default values)
     */
    clear() : void;


}