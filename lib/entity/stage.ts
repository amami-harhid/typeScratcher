/**
 * Stage
 */
import { Entity } from "./entity";
import { StageLayering } from '@Type/stage/CStageLayering';
import { playground } from "../vm/playground";
import { StageProperties } from "./stage/stageProperties";
import { StageLooks } from "./stage/stageLooks";
import { StageControl } from "./stage/stageControl";
import { threadId } from "node:worker_threads";
import { StageEvent } from "./stage/stageEvent";
import { StageSensing } from "./stage/stageSensing";
import type { IStage } from "@Type/stage";
import type { IStageLooks } from "@Type/stage/IStageLooks";
import type { IStageControl } from "@Type/stage/IStageControl";
import type { IStageEvent } from "@Type/stage/IStageEvent";
import type { IStageSensing } from "@Type/stage/IStageSensing";
import type { IStageBackdrop } from "@Type/stage/IStageBackdrop";
import { StageBackdrop } from "./stage/stageBackdrop";

export class Stage extends Entity implements IStage{
    protected _properties: StageProperties;
    private _looks: IStageLooks;
    private _control: IStageControl;
    private _event: IStageEvent;
    private _sensing: IStageSensing;
    private _backdrop: IStageBackdrop;
    constructor() {
        super();
        this.createDrawable(StageLayering.BACKGROUND_LAYER);
        this._name = 'STAGE';
        this._properties = new StageProperties(this);
        this._isSprite = false; // これはスプライトではありません。
        playground.setStage(this);
        this._looks = new StageLooks(this);
        this._control = new StageControl(this);
        this._event = new StageEvent(this);
        this._sensing = new StageSensing(this);
        this._backdrop = new StageBackdrop(this);
    }
    
    get Properties() {
        return this._properties;
    }
    update() {
        this._properties.update(); 
    }
    get Backdrop(): IStageBackdrop {
        return this._backdrop;
    }
    get Looks() : IStageLooks {
        return this._looks;
    }
    get Control(): IStageControl {
        return this._control;
    }
    get Event(): IStageEvent {
        return this._event;
    }
    get Sensing(): IStageSensing {
        return this._sensing;
    }

}