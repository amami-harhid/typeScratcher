import { EntityEffect } from '../entity/entityEffect';
import { IStageEffect } from '../../../type/entity/stage/IStageEffect';
import type { IStage } from '../../../type/entity/stage';

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