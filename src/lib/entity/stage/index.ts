import { engine, Engine } from "../../engine";
import { Entity } from "../entity";
import { EntitySound } from "../entity/entitySound";
import { Image } from "../../image";
import { Sound } from "../../sounds";
import { StageBackdrop } from "./stageBackdrop";
import { StageControl } from "./stageControl";
import { StageEvent } from "./stageEvent";
import { StageLayering } from '../../../type/entity/stage/CStageLayering';
import { StageLooks } from "./stageLooks";
import { StageProperties } from "./stageProperties";
import { StageSensing } from "./stageSensing";
import { Timer } from "../../utils/timer";
import type { IStage } from "../../../type/entity/stage";
import type { IStageBackdrop } from "../../../type/entity/stage/IStageBackdrop";
import type { IStageControl } from "../../../type/entity/stage/IStageControl";
import type { IStageEvent } from "../../../type/entity/stage/IStageEvent";
import type { IStageLooks } from "../../../type/entity/stage/IStageLooks";
import type { IStageSensing } from "../../../type/entity/stage/IStageSensing";
import type { ISvgSkin } from "../../../type/render/ISvgSkin";


/**
 * Stage
 */
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
        (engine as Engine).setStage(this);
        this._looks = new StageLooks(this);
        this._control = new StageControl(this);
        this._event = new StageEvent(this);
        this._sensing = new StageSensing(this);
        this._backdrop = new StageBackdrop(this);
    }
    
    get Properties() {
        return this._properties;
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
    async init() {
        const me = this;
        return new Promise<void>((resolve)=>{
            const loadArr: Promise<void>[] = [];
            for(const img of this._image.images){
                loadArr.push((img as Image).load());
            }
            for(const sndKey of (this._sound as EntitySound).soundKeys){
                const sound = (this._sound as EntitySound).soundMap[sndKey];
                const _sound = sound as Sound;
                loadArr.push(_sound.load(me));
            }
            Promise.all(loadArr).then(async ()=>{
                // イメージごとに Skinを作る
                let _canvasRemake :HTMLCanvasElement|undefined = undefined;
                for(const img of this._image.images){
                    const svgText = (img as Image).image;
                    const skinId = this.render.renderer.createSVGSkin(svgText);
                    if(_canvasRemake == undefined){
                        _canvasRemake = document.createElement('canvas');                        
                    }
                    // willReadFrequently を設定するために SKINインスタンスを取り出し、
                    // SVGSkinのコンストラクターで実施すみの下記【A】２行をやり直す。
                    const _skin = this._render.renderer._allSkins[skinId];
                    //if(_skin._canvas) _skin._canvas.remove(); // <== 念のため削除
                    /*【A】*/const _svgSkin: ISvgSkin = _skin as ISvgSkin;
                    /*【A】*/_svgSkin._canvas = _canvasRemake;
                    /*【A】*/_svgSkin._context = _svgSkin._canvas.getContext("2d", { willReadFrequently: true });
                    await Timer.wait(0.1);
                    (img as Image).skinId = skinId;
                }
                resolve(); // 完了
            });
        })
    }
    update() {
        this._properties.update(); 
    }

}