/**
 * Sprite
 */
import { Element } from "../gui/element";
import { Entity } from "./entity";
import { StageLayering } from '@Type/stage/CStageLayering';
import type { TMouse } from "@Type/mouse";
import { Playground } from "../vm/playground";
import { StageProperties } from "./stage/stageProperties";

export class Stage extends Entity {
    public mouse!: TMouse;
    protected _properties: StageProperties;
    constructor() {
        super();
        this.createDrawable(StageLayering.BACKGROUND_LAYER);
        this._name = 'STAGE';
        this._properties = new StageProperties(this);
        Playground.addStage(this);
        this.mouseEventStart();
    }
    mouseEventStart() {
        this.mouse = {scratchX:0, scratchY:0, x:0, y:0, down: false, pageX: 0, pageY: 0, clientX: 0, clientY: 0};
        const canvas = Element.getScratchCanvas();
        const me = this;
        canvas.addEventListener('mousemove', (e:MouseEvent)=>{
            me.mouse.x = e.offsetX;
            me.mouse.y = e.offsetY;

            me.mouse.clientX = e.clientX;
            me.mouse.clientY = e.clientY;
            
            me.mouse.scratchX = e.offsetX - canvas.width/2;
            me.mouse.scratchY = canvas.height/2 - e.offsetY;
        }, {});
    }
    get Properties() {
        return this._properties;
    }
    update() {
        this._properties.update(); 
    }

}