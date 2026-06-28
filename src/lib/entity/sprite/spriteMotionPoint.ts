import { MathUtil } from '../../utils/math-util';
import { ScratchElement } from '../../gui/scratchElement';
import { Sprite } from '../sprite';
import { Utils } from '../../utils/utils';
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
        const _degree = me.Sensing.mouse.degree;
        this.entity.Properties.degree = _degree;
    }
    toMouse(): void {
        const pageX = this.entity.mouse.pageX;
        const pageY = this.entity.mouse.pageY;
        const stagePosition = ScratchElement.pageToScratchStagePosition(pageX, pageY);
        const dx = stagePosition.scratchX - this.entity.Properties.position.x;
        const dy = stagePosition.scratchY - this.entity.Properties.position.y;
        let _degree = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(_degree > 180) {
            _degree -= 360;
        }
        this.entity.Properties.degree = _degree;
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
        let _degree = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(_degree > 180) {
            _degree -= 360;
        }
        this.entity.Properties.degree = _degree;
    }
    /**
     * どこかを向く
     */
    toRandom(): void {
        const _degree = Utils.randomValue(-179, 180); // -179 ≦ 角度 ≦ 180
        this.entity.Properties.degree = _degree;
    }
};