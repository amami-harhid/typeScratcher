import { playground } from '../../vm/playground';
import type { IStage } from '@Type/stage';
import type { IEntitySensingTimer } from '@Type/entity/IEntitySensingTimer';
/**
 * Stage Sensing(調べる) Timer
 */
export class StageSensingTimer implements IEntitySensingTimer {
    protected entity: IStage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
    }
    /**
     * タイマー値
     */
    get timer() {
        return playground.timer;
    }
    /**
     * タイマーリセット
     */
    reset() {
        playground.resetTimer();
    }

};