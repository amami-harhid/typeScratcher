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
        this.entity.Properties.degree = degree;
    }
};