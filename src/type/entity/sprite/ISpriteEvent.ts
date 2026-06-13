import type { EventFunctionSetter, IEntityEvent } from '../entity/IEntityEvent';
/**
 * Sprite Event(イベント)
 */
export interface ISpriteEvent extends IEntityEvent {

    /**
     * クローンされたときイベントのセッターを返す
     * @returns イベントセッター
     */
    cloned() :EventFunctionSetter;
}