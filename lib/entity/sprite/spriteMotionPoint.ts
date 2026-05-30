import { Sprite } from '../sprite';
import { ISprite } from '@Type/sprite';
import { ISpriteMotionPoint } from '@Type/sprite/ISpriteMotionPoint';
import { Element } from '../../gui/element';
import { MathUtil } from '../../utils/math-util';
import { Playground } from '../../vm/playground';
export class SpriteMotionPoint implements ISpriteMotionPoint{
    private entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        this.entity = entity;
    }
    /**
     * マウスカーソルへ向く
     */
    toMouseInStage(): void {
        const stage = Playground.getStage();
        const canvas = Element.getScratchCanvas();
        const render = this.entity.render;
        const rateX = render.stageWidth / canvas.width;
        const rateY = render.stageHeight / canvas.height;
        const mouseX = (stage.mouse.x - canvas.width/2 ) * rateX;
        const mouseY = (canvas.height/2 - stage.mouse.y ) * rateY;
        const dx = mouseX - this.entity.Properties.position.x;
        const dy = mouseY - this.entity.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(direction > 180) {
            direction -= 360;
        }
        this.entity.Properties.degree = direction;
    }
    toMouse(): void {
        const stage = Playground.getStage();
        const canvas = Element.getScratchCanvas();
        const rect = canvas.getBoundingClientRect();
        const canvasGlobalCenterX = rect.x + rect.width/2;
        const canvasGlobalCenterY = rect.y + rect.height/2;
        const pageX = stage.mouse.pageX;
        const pageY = stage.mouse.pageY;
        const _mouseXG = (pageX - canvasGlobalCenterX );
        const _mouseYG = (canvasGlobalCenterY - pageY);

        const render = this.entity.render;
        const rateX = render.stageWidth / canvas.width;
        const rateY = render.stageHeight / canvas.height;
        const targetX = (_mouseXG) * rateX;
        const targetY = (_mouseYG) * rateY;
        const dx = targetX - this.entity.Properties.position.x;
        const dy = targetY - this.entity.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(direction > 180) {
            direction -= 360;
        }
        this.entity.Properties.degree = direction;
    }
    /**
     * ターゲットの位置へ向く
     * @param target {Sprite} - ターゲット
     */
    toTarget(target: ISprite): void {

    }
};