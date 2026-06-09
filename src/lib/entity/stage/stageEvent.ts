import { EntityEvent } from '../entity/entityEvent';
import type { IStage } from '../../../type/entity/stage';
/**
 * Stage Event(イベント)
 */
export class StageEvent extends EntityEvent {
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
    }
};