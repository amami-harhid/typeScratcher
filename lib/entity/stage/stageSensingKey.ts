import { Stage} from '../stage';
import type { IEntitySensingKey } from '@Type/entity/IEntitySensingKey';
import { playground } from '../../vm/playground';
/**
 * Stage Sensing(調べる) Key
 */
export class StageSensingKey implements IEntitySensingKey {
    private entity: Stage;
    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:Stage){
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