import { playground } from '../../vm/playground';
import type { ISprite } from '../../type/sprite';
import type { IEntitySensingKey } from '../../type/entity/IEntitySensingKey';
/**
 * Sprite Sensing(調べる) Key
 */
export class SpriteSensingKey implements IEntitySensingKey {
    protected entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
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