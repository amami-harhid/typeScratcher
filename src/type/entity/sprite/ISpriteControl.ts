import type { IEntityControl } from '../entity/IEntityControl';
/**
 * Sprite Control(制御)
 */
export interface ISpriteControl extends IEntityControl {

    /**
     * クローンを作る
     */
    clone(): void;
    /**
     * クローンを削除する
     */
    removeClone() : void;
    /**
     * クローンを全て削除する
     */
    removeAllClones() : void;

}