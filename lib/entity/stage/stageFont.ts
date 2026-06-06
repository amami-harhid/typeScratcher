import type { IStage } from '../../type/stage';
import type { IStageFont } from '../../type/stage/IStageFont';
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