/**
 * Sprite
 */
import { Entity } from "./entity";
import { StageLayering } from '@Type/stage/CStageLayering';

export class Stage extends Entity {

    constructor() {
        super();
        this.createDrawable(StageLayering.BACKGROUND_LAYER);
        this._name = 'STAGE';
    }

}