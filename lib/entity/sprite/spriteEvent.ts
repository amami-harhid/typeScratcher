import { Sprite } from '../sprite';
import { EntityEvent } from '../entity/entityEvent';
import { Entity } from '../entity';
/**
 * Sprite Event(イベント)
 */
export class SpriteEvent extends EntityEvent {
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Entity){
        super(entity);
    }
};