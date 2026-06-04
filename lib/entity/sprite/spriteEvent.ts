import { EntityEvent } from '../entity/entityEvent';
import { Entity } from '../entity';
import type { ISprite } from '@Type/sprite';
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