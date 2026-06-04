import { EntityEffect } from '../entity/entityEffect';
import { IStageEffect } from '@Type/stage/IStageEffect';
import type { IStage } from '@Type/stage';

/** 効果 */
export class StageEffect extends EntityEffect implements IStageEffect{

    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
    }

}