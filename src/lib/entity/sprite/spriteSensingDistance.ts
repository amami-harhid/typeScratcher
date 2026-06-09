import { Sprite } from '.';
import { ISprite } from '../../../type/entity/sprite';
import { Utils } from "../../utils/utils";
import type { ISpriteSensingDistance } from '../../../type/entity/sprite/ISpriteSensingDistance';

/** 距離 */
export class SpriteSensingDistance implements ISpriteSensingDistance{

    private entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity: ISprite){
        this.entity = entity;
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
        const obj2 = {
            x: this.entity.Sensing.mouse.x,
            y: this.entity.Sensing.mouse.y,
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
        const _targetSprite: Sprite = targetSprite as unknown as Sprite;
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
