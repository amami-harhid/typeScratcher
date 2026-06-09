import { EntityBackdrop } from '../entity/entityBackdrop';
import type { IStage } from '../../../type/entity/stage';
import type { IStageBackdrop } from '../../../type/entity/stage/IStageBackdrop';

/** サイズ */
export class StageBackdrop extends EntityBackdrop implements IStageBackdrop {

    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:IStage){
        super(entity);
    }

}
