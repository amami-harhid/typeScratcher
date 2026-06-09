import { EntityEffect } from '../entity/entityEffect';
import type { ISprite } from '../../../type/entity/sprite';

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