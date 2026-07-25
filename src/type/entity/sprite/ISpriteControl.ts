import type { IEntityControl } from '../entity/IEntityControl';
/**
 * Sprite Control 
 */
export interface ISpriteControl extends IEntityControl {

    /**
     * Clone
     * ---
     * クローン
     */
    clone(): void;
    /**
     * Delete the clone.
     * ---
     * クローンを削除する
     */
    removeClone() : void;
    /**
     * Delete all clones.
     * ---
     * 全てのクローンを削除する
     */
    removeAllClones() : void;

}