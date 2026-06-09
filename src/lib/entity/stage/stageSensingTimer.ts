import { engine, Engine } from '../../engine';
import type { IStage } from '../../../type/entity/stage';
import type { IEntitySensingTimer } from '../../../type/entity/entity/IEntitySensingTimer';

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
        return (engine as Engine).timer;
    }
    /**
     * タイマーリセット
     */
    reset() {
        (engine as Engine).resetTimer();
    }

};