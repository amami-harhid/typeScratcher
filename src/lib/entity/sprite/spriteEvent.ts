import { EntityEvent } from '../entity/entityEvent';
import type { EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteEvent } from '../../../type/entity/sprite/ISpriteEvent';
import { Sprite } from '.';
import { SpriteControl } from './spriteControl';
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

    /**
     * クローンされたときイベントのセッターを返す
     * @returns イベントセッター
     */
    cloned() :EventFunctionSetter{
        const iSprite = this.entity as ISprite;
        return (iSprite.Control as SpriteControl).cloned();
    }

};