import type { EventFunctionSetter, IEntityEvent } from '../entity/IEntityEvent';
/**
 * Sprite Event
 */
export interface ISpriteEvent extends IEntityEvent {

    /**
     * Returns the thread setter when cloned.
     * @returns Thread setter
     */
    cloned() :EventFunctionSetter;
}