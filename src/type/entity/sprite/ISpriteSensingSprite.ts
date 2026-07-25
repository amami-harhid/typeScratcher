import type { IEntitySensingSprite } from '../entity/IEntitySensingSprite';
import type { ISprite } from '.';
/**
 * Sprite Sensing(調べる)Sprite
 */
export interface ISpriteSensingSprite extends IEntitySensingSprite{

    /**
     * Detect contact with a sprite (including clones)
     * 
     * ---
     * 相手スプライトに触れているか否かの判定（クローンを含める）
     * 
     * ---
     * When `includeClone` is false, the check is performed without including clones.
     * 
     * ---
     * 引数(`includeClone`)がfalseのときはクローンを含めずに検査する
     * 
     * @param sprites 
     * @param includeClone falseのときはクローンを含めずに検査する
     */
    isTouching(sprites: ISprite[], includeClone?: boolean): boolean;

    /**
     * Get an array of sprites touching the object.
     * 
     * ---
     * 自分に触れている全てのスプライトを配列にして返す
     * 
     * @param targets 
     * @returns 
     */
    getTouching(target?: ISprite[]) : ISprite[];

    /**
     * Distance to the specified sprite.
     * 
     * ---
     * 指定したスプライトまでの距離
     * 
     * @param to 
     */
    distance(to: ISprite): number;

    /**
     * Direction to the specified sprite.
     * 
     * ---
     * 指定したスプライトへの向き（角度）
     * 
     * @param to
     */
    degree( to: ISprite ): number;
    
};