import { ScratchElement } from '../../gui/scratchElement';
import { Sprite } from '../sprite';
import { Utils } from "../../utils/utils";
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteSensingDistance } from '../../../type/entity/sprite/ISpriteSensingDistance';

/** 距離 */
export class SpriteSensingDistance implements ISpriteSensingDistance{

    private entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity: ISprite){
        this.entity = entity as Sprite;
    }
    /**
     * マウスカーソルとの距離
     * @returns 
     */
    mousePointer(): number {
        const obj1 = {
            x: this.entity.Properties.position.x,
            y: this.entity.Properties.position.y,
        }
        const pageX = this.entity.mouse.pageX;
        const pageY = this.entity.mouse.pageY;
        const stagePosition = ScratchElement.pageToScratchStagePosition(pageX, pageY);
        const obj2 = {
            x: stagePosition.scratchX,
            y: stagePosition.scratchY,
        }
        const _distance = Utils.distance(obj1, obj2);
        return _distance;
    }
    /**
     * 他スプライトとの距離(中心同士の距離)
     * @param otherSprite 
     * @returns 
     */
    to(targetSprite:ISprite) : number {
        const _targetSprite: Sprite = targetSprite as Sprite;
        const obj1 = {
            x: this.entity.Properties.position.x,
            y: this.entity.Properties.position.y,
        }
        const obj2 = {
            x: _targetSprite.Properties.position.x,
            y: _targetSprite.Properties.position.y,
        }
        const _distance = Utils.distance(obj1, obj2);
        return _distance;
    }
}
