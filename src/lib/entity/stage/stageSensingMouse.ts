import { Stage } from '../stage';
import type { IEntitySensingMouse } from '../../../type/entity/entity/IEntitySensingMouse';
import type { IStage } from '../../../type/entity/stage';
/**
 * Stage Sensing(調べる) Mouse
 */
export class StageSensingMouse implements IEntitySensingMouse {
    protected entity: Stage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity as Stage;
    }
    /**
     * マウスが押されていることの判定
     * @returns {boolean} - マウスが押されている判定
     */
    get isDown() : boolean {
        return this.entity.mouse.down;
    }

    /**
     * マウス情報 (x座標)
     */
    get x() : number {
        return this.entity.mouse.scratchX;
    }
    /**
     * マウス情報 (y座標)
     */
    get y() : number {
        return this.entity.mouse.scratchY;
    }
};