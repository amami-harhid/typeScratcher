import type { EventFunctionSetter, IEntityEvent } from '../entity/IEntityEvent';
/**
 * Sprite Event
 */
export interface ISpriteEvent extends IEntityEvent {

    /**
     * Define the thread used when cloned.
     * ---
     * クローンされたときのスレッド定義
     * 
     * @returns Thread setter
     */
    cloned() :EventFunctionSetter;
}