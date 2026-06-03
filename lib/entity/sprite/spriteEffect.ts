import type { ISprite } from '@Type/sprite';
import { EntityEffect } from '../entity/entityEffect';
import type {ISpriteEffect} from '@Type/sprite/ISpriteEffect';

/** 効果 */
export class SpriteEffect extends EntityEffect implements ISpriteEffect {

    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }

}