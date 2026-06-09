import { EntityEvent } from '../entity/entityEvent';
import type { IStage } from '../../../type/entity/stage';
import type { IStageEvent } from '../../../type/entity/stage/IStageEvent';
/**
 * Stage Event(イベント)
 */
export class StageEvent extends EntityEvent implements IStageEvent{
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
    }
};