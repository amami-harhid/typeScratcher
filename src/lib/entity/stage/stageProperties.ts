import { EntityProperties } from "../entity/entityProperties";
import type { IStage } from "../../../type/entity/stage";
import type { ScratchRenderProperties } from "../../../type/render/IRenderWebGL";

export class StageProperties extends EntityProperties {
    constructor(stage: IStage){
        super(stage);
    }
    update() {
        const entity = this.entity as IStage;
        const effect = this.entity.Image.Effect.effect;
        const prop: ScratchRenderProperties = {
            skinId: entity.Backdrop.currentSkinId,
            visible: this.visible,
        };
        
        this.updateDrawableProperties(prop);
    }
    
}