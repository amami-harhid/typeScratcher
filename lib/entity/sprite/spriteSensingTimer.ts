import { playground } from '../../vm/playground';
import { Sprite } from '../sprite';
import type { IEntitySensingTimer } from '@Type/entity/IEntitySensingTimer';
import type { ISprite } from '@Type/sprite';
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