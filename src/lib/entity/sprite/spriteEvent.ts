import { EntityEvent } from '../entity/entityEvent';
import type { ISprite } from '../../../type/entity/sprite';
/**
 * Sprite Event(イベント)
 */
export class SpriteEvent extends EntityEvent {
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }
};