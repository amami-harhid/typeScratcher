import { StageEffect } from './stageEffect';
import { StageBackdrop } from './stageBackdrop';
import type { IStageBackdrop } from '../../../type/entity/stage/IStageBackdrop';
import type { IStageEffect } from '../../../type/entity/stage/IStageEffect';
import type { IStage } from '../../../type/entity/stage';
/**
 * Sprite Looks(見た目)
 */
export class StageLooks {
    protected entity: IStage;
    private effect: IStageEffect;
    private backdrop: IStageBackdrop;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
        this.effect = new StageEffect(entity);
        this.backdrop = new StageBackdrop(entity);
    }
    /**
     * 背景番号、背景名を取り出すためのオブジェクト
     */
    get Backdrop(): IStageBackdrop {
        return this.backdrop
    }
    /**
     * 効果
     */
    get Effect() : IStageEffect {
        return this.effect;
    }

};

