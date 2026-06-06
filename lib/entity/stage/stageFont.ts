import type { IStage } from '../../type/entity/stage';
import type { IStageFont } from '../../type/entity/stage/IStageFont';
/**
 * StageFont
 */
export class StageFont implements IStageFont {
    protected entity: IStage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
    }

    add(fontName: string) : void {
//        this.entity.$addFont(fontName);
    }

    get names() : string[] {
//        return this.entity.$getImageNames();
        return [];
    }
};