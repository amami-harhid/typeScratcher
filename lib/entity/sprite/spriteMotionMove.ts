import { Sprite } from '../sprite';
import type { ISprite } from '@Type/sprite';
import type { ISpriteMotionMove } from '@Type/sprite/ISpriteMotionMove';
import { MathUtil } from '../../utils/math-util';
import { EntityProperties } from '../entity/entityProperties';

export class SpriteMotionMove implements ISpriteMotionMove {
    private entity: Sprite;
    private prop: EntityProperties;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        this.entity = entity;
        this.prop = entity.Properties;
    }
    get x(): number {
        return this.prop.position.x
    }
    set x(x:number){
        this.prop.position.x = x;
    }
    get y(): number {
        return this.prop.position.y
    }
    set y(y:number){
        this.prop.position.y = y;
    }
    move(x:number, y:number) : void {
        const prop = this.entity.Properties;
        prop.position.x = x;
        prop.position.y = y;
        this.entity.render.renderer.updateDrawablePosition(this.entity.drawableID, [prop.position.x, prop.position.y]);
    }
    /**
     * ステップ数分、進ませる
     * @param steps {number} - ステップ数
     */
    steps(steps: number): void {
        const degree = this.entity.Motion.Direction.degree;
        const radians = MathUtil.degToRad(90 - degree);
        const dx = steps * Math.cos(radians);
        const dy = steps * Math.sin(radians);
        const prop = this.entity.Properties;
        prop.position.x += dx;
        prop.position.y += dy;
        this.move(prop.position.x, prop.position.y);
    }
    /**
     * もし端に振れたら跳ね返る
     */
    ifOnEdgeBounce(): void {

    }
    /**
     * ステージ上のランダムな位置へ移動する
     */
    randomPosition(): void {

    }
    /**
     * マウスカーソルの位置へ移動する
     */
    mousePosition() : void {

    }
    /**
     * 指定したスプライトの位置へ移動する
     * @param target {Sprite} - 指定スプライト
     */
    toSprite(target: ISprite) : void {

    }
    /**
     * 指定秒数かけて指定座標へ移動する
     * @param sec {number} - 秒数
     * @param x {number} - X座標
     * @param y {number} - Y座標
     */
    async glideTo(sec:number, x: number, y:number): Promise<void> {
  
    }

};