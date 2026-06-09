import { engine, Engine } from '../../engine';
import { Sprite } from '../sprite';
import type { ISprite } from '../../../type/entity/sprite';
import type { IEntitySensingKey } from '../../../type/entity/entity/IEntitySensingKey';
/**
 * Sprite Sensing(調べる) Key
 */
export class SpriteSensingKey implements IEntitySensingKey {
    protected entity: Sprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
    }

    /**
     * キーが押されていることの判定
     * @param key {string}
     * @returns {boolean} キー押下判定
     */
    isDown(key: string) : boolean {
        return (engine as Engine).runtime.keyIsDown(key);
    }
    /**
     * キーが押されていないことの判定
     * @param key {string}
     * @returns {boolean} キー押下判定
     */
    isNotDown(key: string) : boolean {
        const down = (engine as Engine).runtime.keyIsDown(key);
        return !down;
    }
};