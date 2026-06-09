import { Sprite } from '../sprite';
import type { TPositionArray } from '../../../type/common/typeCommon';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteMotionPosition } from '../../../type/entity/sprite/ISpriteMotionPosition';

export class SpriteMotionPosition implements ISpriteMotionPosition {
    private entity: Sprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
    }
    get x() : number {
        return this.entity.Properties.position.x;
    }
    get y() : number {
        return this.entity.Properties.position.y;
    }
    get xy() : TPositionArray {
        return [this.entity.Properties.position.x, this.entity.Properties.position.y ];
    }
    set x(x: number) {
        this.entity.Properties.position.x = x;
    }
    set y(y: number) {
        this.entity.Properties.position.y = y;
    }
    set xy( xy: TPositionArray)  {
        this.entity.Properties.position.x = xy[0];
        this.entity.Properties.position.y = xy[1];
    }

};