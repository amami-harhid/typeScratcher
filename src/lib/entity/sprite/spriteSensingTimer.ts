import { engine, Engine } from '../../engine';
import { Sprite } from '../sprite';
import type { IEntitySensingTimer } from '../../../type/entity/entity/IEntitySensingTimer';
import type { ISprite } from '../../../type/entity/sprite';
/**
 * Sprite Sensing(調べる) Timer
 */
export class SpriteSensingTimer implements IEntitySensingTimer {
    protected entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
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