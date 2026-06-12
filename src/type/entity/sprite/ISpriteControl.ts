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
     * クローンされたときの動作を定義する
     * @param func {CallableFunction} 動作を記述する関数
     */
    whenCloned(func: CallableFunction): void;
    /**
     * クローンを抹消する
     */
    removeClone() : void;
    /**
     * クローンを全て削除する
     */
    removeAllClones() : void;

}