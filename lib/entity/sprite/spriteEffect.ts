import { EntityEffect } from '../entity/entityEffect';
import type { ISprite } from '../../type/sprite';
import type {ISpriteEffect} from '../../type/sprite/ISpriteEffect';

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