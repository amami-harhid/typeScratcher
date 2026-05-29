import { Sprite } from '../sprite';

export class SpriteMotionDirection {
    private entity: Sprite;
    private _degree: number = 90;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        this.entity = entity;
    }
    /**
     * 向き
     * @returns {number} - 向き
     */
    get degree() : number {
        return this.entity.Properties.degree;
    }
    /**
     * 向き
     * @param degree {number} - 向き
     */
    set degree(degree: number) {
        let _degree = degree % 360;
        if( _degree > 180 ) {
            _degree -= 360; // 179 => 180 => -179 => -178
        }
        this.entity.Properties.degree = _degree;
    }
};