import { MathUtil } from '../../utils/math-util';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteMotionMove } from '../../../type/entity/sprite/ISpriteMotionMove';
import type { IEntityProperties } from '../../../type/entity/entity/IEntityProperties';

export class SpriteMotionMove implements ISpriteMotionMove {
    private entity: ISprite;
    private prop: IEntityProperties;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
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
        const degree = this.entity.Motion.direction.degree;
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
        const touch = this.entity.Sensing.edge.isTouchingEdge()
        if(touch.touch === true){
            const radians = MathUtil.degToRad(90 - this.entity.Properties.degree);
            let dx = Math.cos(radians);
            let dy = -Math.sin(radians);
            let _dx = dx;
            let _dy = dy;
            const nearestEdge = touch.judge.nearestEdge;
            if (nearestEdge === 'left') {
                _dx = Math.max(0.2, Math.abs(dx));
            } else if (nearestEdge === 'top') {
                _dy = Math.max(0.2, Math.abs(dy));
            } else if (nearestEdge === 'right') {
                _dx = 0 - Math.max(0.2, Math.abs(dx));
            } else if (nearestEdge === 'bottom') {
                _dy = 0 - Math.max(0.2, Math.abs(dy));
            }
            const newDirection = MathUtil.radToDeg(Math.atan2(_dy, _dx)) + 90;
            this.entity.Properties.degree = newDirection;
            const position = this.entity.Properties.position;
            this._keepInFence(position.x+_dx, position.y+_dy);
        }


    }
    private _keepInFence( x: number, y: number): void {
        const fencedPosition = this._keepInFencePosition(x, y);
        if(fencedPosition){
            this.entity.Properties.position.x = fencedPosition[0];
            this.entity.Properties.position.y = fencedPosition[1];
        }
    }
    private _keepInFencePosition(newX: number, newY: number): [number, number] {
        const render = this.entity.render;
        const renderer = render.renderer;
        const drawableID = this.entity.drawableID;
        const drawable = renderer._allDrawables[drawableID];
        if(drawable == undefined || drawable.skin == undefined) {
            return [newX, newY];
        }
        const bounds = renderer.getBounds(drawableID);
        if(bounds == undefined) {
            return [newX, newY];
        }
        const stageWidth = render.stageWidth;
        const stageHeight = render.stageHeight;
        const fence = {
            left: -(stageWidth/2),
            top: stageHeight/2,
            right: stageWidth/2,
            bottom: -(stageHeight/2),
        };
        // Adjust the known bounds to the target position.
        const position = this.entity.Properties.position;
        bounds.left += (newX - position.x);
        bounds.right += (newX - position.x);
        bounds.top += (newY - position.y);
        bounds.bottom += (newY - position.y);
        // Find how far we need to move the target position.
        let dx = 0;
        let dy = 0;
        if (bounds.left < fence.left) {
            dx += fence.left - bounds.left;
        }
        if (bounds.right > fence.right) {
            dx += fence.right - bounds.right;
        }
        if (bounds.top > fence.top) {
            dy += fence.top - bounds.top;
        }
        if (bounds.bottom < fence.bottom) {
            //dy += fence.bottom - bounds.bottom +hosei;
            dy += fence.bottom - bounds.bottom;
        }
        return [newX + dx , newY + dy];
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