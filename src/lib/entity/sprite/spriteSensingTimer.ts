import { playground } from '../../engine/playground';
import type { IEntitySensingTimer } from '../../../type/entity/entity/IEntitySensingTimer';
import type { ISprite } from '../../../type/entity/sprite';
/**
 * Sprite Sensing(調べる) Timer
 */
export class SpriteSensingTimer implements IEntitySensingTimer {
    protected entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
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