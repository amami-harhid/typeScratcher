import type { ISprite } from '../../type/sprite';
import type { ISpriteMotionPosition } from '../../type/sprite/ISpriteMotionPosition';

export class SpriteMotionPosition implements ISpriteMotionPosition {
    private entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    get x() : number {
        return this.entity.Properties.position.x;
    }
    get y() : number {
        return this.entity.Properties.position.y;
    }
    get xy() : {x:number, y:number} {
        return {x: this.entity.Properties.position.x, y: this.entity.Properties.position.y };
    }
    set x(x: number) {
        this.entity.Properties.position.x = x;
    }
    set y(y: number) {
        this.entity.Properties.position.y = y;
    }
    set xy( xy: {x:number, y:number})  {
        this.entity.Properties.position.x = xy.x;
        this.entity.Properties.position.y = xy.y;
    }

};