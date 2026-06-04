import type { IEntitySensingMouse } from '@Type/entity/IEntitySensingMouse';
import type { IStage } from '@Type/stage';
/**
 * Stage Sensing(調べる) Mouse
 */
export class StageSensingMouse implements IEntitySensingMouse {
    protected entity: IStage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
    }
    /**
     * マウスが押されていることの判定
     * @returns {boolean} - マウスが押されている判定
     */
    get isDown() : boolean {
        return this.entity.Mouse.down;
    }

    /**
     * マウス情報 (x座標)
     */
    get x() : number {
        return this.entity.Mouse.x;
    }
    /**
     * マウス情報 (y座標)
     */
    get y() : number {
        return this.entity.Mouse.y;
    }
};