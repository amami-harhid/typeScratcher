import { playground } from '../../engine/playground';
import type { IEntitySensingKey } from '../../../type/entity/entity/IEntitySensingKey';
import type { IStage } from '../../../type/entity/stage';
/**
 * Stage Sensing(調べる) Key
 */
export class StageSensingKey implements IEntitySensingKey {
    protected entity: IStage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
    }

    /**
     * キーが押されていることの判定
     * @param key {string}
     * @returns {boolean} キー押下判定
     */
    isDown(key: string) : boolean {
        return playground.runtime.keyIsDown(key);
    }
    /**
     * キーが押されていないことの判定
     * @param key {string}
     * @returns {boolean} キー押下判定
     */
    isNotDown(key: string) : boolean {
        const down =  playground.runtime.keyIsDown(key);
        return !down;
    }

};