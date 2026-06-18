import { EntityProperties } from "../entity/entityProperties";
import type { IStage } from "../../../type/entity/stage";
import type { ScratchRenderProperties } from "../../../type/render/IRenderWebGL";
import { StageBackdrop } from "./stageBackdrop";

export class StageProperties extends EntityProperties {
    constructor(stage: IStage){
        super(stage);
    }
    update() {
        const entity = this.entity as IStage;
        const prop: ScratchRenderProperties = {
            skinId: (entity.Backdrop as StageBackdrop).currentSkinId,
            visible: this.visible,
        };
        
        this.updateDrawableProperties(prop);
    }
    
}