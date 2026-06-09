import { EntityEvent } from '../entity/entityEvent';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteEvent } from '../../../type/entity/sprite/ISpriteEvent';
/**
 * Sprite Event(イベント)
 */
export class SpriteEvent extends EntityEvent implements ISpriteEvent{
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }
};