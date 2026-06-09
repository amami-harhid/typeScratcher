import { EntityLooks } from '../entity/entityLooks';
import { StageBackdrop } from './stageBackdrop';
import type { IStageBackdrop } from '../../../type/entity/stage/IStageBackdrop';
import type { IStage } from '../../../type/entity/stage';
import type { IStageLooks } from '../../../type/entity/stage/IStageLooks';
/**
 * Sprite Looks(見た目)
 */
export class StageLooks extends EntityLooks implements IStageLooks{
    private _backdrop: IStageBackdrop;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
        this._backdrop = new StageBackdrop(entity);
    }
    /**
     * 背景番号、背景名を取り出すためのオブジェクト
     */
    get backdrop(): IStageBackdrop {
        return this._backdrop
    }

};

