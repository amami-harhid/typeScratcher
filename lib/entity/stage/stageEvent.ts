import { EntityEvent } from '../entity/entityEvent';
import { IStage } from '@Type/stage';
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