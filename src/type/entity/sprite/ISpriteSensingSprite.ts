import type { IEntitySensingSprite } from '../entity/IEntitySensingSprite';
import type { ISprite } from '.';
/**
 * Sprite Sensing(調べる)Sprite
 */
export interface ISpriteSensingSprite extends IEntitySensingSprite{

    /**
     * Detect contact with a sprite (including clones)<br>
     * When `includeClone` is false, the check is performed without including clones.
     * 
     * @param sprites 
     * @param includeClone falseのときはクローンを含めずに検査する
     */
    isTouching(sprites: ISprite[], includeClone?: boolean): boolean;

    /**
     * Get an array of sprites touching the object.
     * 
     * @param targets 
     * @returns 
     */
    getTouching(target?: ISprite[]) : ISprite[];

    /**
     * Distance to the specified sprite.
     * 
     * @param to 
     */
    distance(to: ISprite): number;

    /**
     * Direction to the specified sprite.
     * 
     * @param to
     */
    degree( to: ISprite ): number;
    
};