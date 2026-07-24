import type { IEntityControl } from '../entity/IEntityControl';
/**
 * Sprite Control 
 */
export interface ISpriteControl extends IEntityControl {

    /**
     * Clone
     */
    clone(): void;
    /**
     * Delete the clone.
     */
    removeClone() : void;
    /**
     * Delete all clones.
     */
    removeAllClones() : void;

}