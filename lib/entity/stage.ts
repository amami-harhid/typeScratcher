/**
 * Stage
 */
import { Entity } from "./entity";
import { StageLayering } from '@Type/stage/CStageLayering';
import { playground } from "../vm/playground";
import { StageProperties } from "./stage/stageProperties";

export class Stage extends Entity {
    protected _properties: StageProperties;
    constructor() {
        super();
        this.createDrawable(StageLayering.BACKGROUND_LAYER);
        this._name = 'STAGE';
        this._properties = new StageProperties(this);
        this._isSprite = false; // これはスプライトではありません。
        playground.setStage(this);
    }
    
    get Properties() {
        return this._properties;
    }
    update() {
        this._properties.update(); 
    }

}