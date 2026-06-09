import { Sprite } from '../sprite';
import { ScratchElement } from '../../gui/scratchElement';
import { MathUtil } from '../../utils/math-util';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteMotionPoint } from '../../../type/entity/sprite/ISpriteMotionPoint';
export class SpriteMotionPoint implements ISpriteMotionPoint{
    private entity: Sprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
    }
    /**
     * マウスカーソルへ向く
     */
    toMouseInStage(): void {
        const me = this.entity as Sprite;
        const direction = me.Sensing.mouse.degree;
        this.entity.Properties.degree = direction;
    }
    toMouse(): void {
        const canvas = ScratchElement.getScratchCanvas();
        const rect = canvas.getBoundingClientRect();
        const canvasGlobalCenterX = rect.x + rect.width/2;
        const canvasGlobalCenterY = rect.y + rect.height/2;
        const pageX = this.entity.mouse.pageX;
        const pageY = this.entity.mouse.pageY;
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
        const _target = target as Sprite;
        const _targetPosition = _target.Properties.position;
        const dx = _targetPosition.x - this.entity.Properties.position.x;
        const dy = _targetPosition.y - this.entity.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(direction > 180) {
            direction -= 360;
        }
        this.entity.Properties.degree = direction;
  }
};