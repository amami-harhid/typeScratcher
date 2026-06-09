import { EntityEffect } from '../entity/entityEffect';
import type { ISprite } from '../../../type/entity/sprite';
import type {ISpriteEffect} from '../../../type/entity/sprite/ISpriteEffect';

/** 効果 */
export class SpriteEffect extends EntityEffect { // implements ISpriteEffect {

    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }

}