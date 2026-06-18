import { EntityLooks } from '../entity/entityLooks';
import { StageLooksBackdrop } from './stageLooksBackdrop';
import type { IStage } from '../../../type/entity/stage';
import type { IStageLooks } from '../../../type/entity/stage/IStageLooks';
import type { IStageLooksBackdrop } from '../../../type/entity/stage/IStageLooksBackdrop';
/**
 * Sprite Looks(見た目)
 */
export class StageLooks extends EntityLooks implements IStageLooks{
    private _backdrop: IStageLooksBackdrop;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        super(entity);
        this._backdrop = new StageLooksBackdrop(entity);
    }
    /**
     * 背景番号、背景名を取り出すためのオブジェクト
     */
    get backdrop(): IStageLooksBackdrop {
        return this._backdrop
    }

};

