import type { IEntitySensingKey } from '@Type/entity/IEntitySensingKey';
import { Sprite } from '../sprite';
import { playground } from '../../vm/playground';
/**
 * Sprite Sensing(調べる) Key
 */
export class SpriteSensingKey implements IEntitySensingKey {
    private entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
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
        const down = playground.runtime.keyIsDown(key);
        return !down;
    }
};