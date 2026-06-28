import { Engine, engine } from '../../engine';
import { EntityProxyExt } from '../entity/entityProxyExt';
import { INTERVAL } from '../../engine/thread/interval';
import { MathUtil } from '../../utils/math-util';
import { ScratchElement } from '../../gui/scratchElement';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Sprite } from '../sprite';
import { Utils } from '../../utils/utils';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityProperties } from '../../../type/entity/entity/IEntityProperties';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteMotionMove } from '../../../type/entity/sprite/ISpriteMotionMove';

export class SpriteMotionMove implements ISpriteMotionMove {
    private entity: Sprite;
    private prop: IEntityProperties;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity as Sprite;
        this.prop = this.entity.Properties;
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
    to(x:number, y:number) : void {
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
        this.to(prop.position.x, prop.position.y);
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
    toRandom(): void {
        const width = this.entity.render.stageWidth;
        const halfWidth = Math.floor(width/2);
        const x = Utils.randomizeInRange(-halfWidth, halfWidth );
        const height = this.entity.render.stageHeight;
        const halfHeight = Math.floor(height/2);
        const y = Utils.randomizeInRange(-halfHeight, halfHeight);

        this.entity.Properties.position.x = x;
        this.entity.Properties.position.y = y;

    }
    /**
     * マウスカーソルの位置へ移動する
     */
    toMouse() : void {
        const _mouse = (engine as Engine).mouse;
        // Window全体のマウス座標をもとにCanvas上の座標へ変換する
        const stagePosition = ScratchElement.pageToScratchStagePosition(_mouse.pageX, _mouse.pageY);
        this.entity.Properties.position.x = stagePosition.scratchX;
        this.entity.Properties.position.y = stagePosition.scratchY;
        //this.entity.Properties.position.x = _mouse.pageX * _rate.x;
        //this.entity.Properties.position.y = _mouse.pageY * _rate.y;
    }
    /**
     * 指定したスプライトの位置へ移動する
     * @param target {Sprite} - 指定スプライト
     */
    toSprite(target: ISprite) : void {
        this.entity.Properties.position.x = (target as Sprite).Properties.position.x;
        this.entity.Properties.position.y = (target as Sprite).Properties.position.y;
    }
    /**
     * 
     * @param sec 
     * @param x 
     * @param y 
     * @param proxy 
     * @returns 
     */
    async glideTo(sec:number, x: number, y:number): Promise<void> {

        const _proxy = this.entity as unknown as EntityProxyExt; 

        const _x = this.entity.Properties.position.x;
        const _y = this.entity.Properties.position.y;
        const _xy = {x: _x, y: _y};
        const _count = Math.floor((sec * 1000 ) / INTERVAL);
        const _def_x = ( x - _x ) / _count;
        const _def_y = ( y - _y ) / _count;
        return new Promise<void>((resolve)=>{
            let _counter = 0;
            const _glide = () => {
                if(_counter < _count) {
                    _xy.x += _def_x;
                    _xy.y += _def_y;
                    this.entity.Properties.position.x = _xy.x;
                    this.entity.Properties.position.y = _xy.y;
                }else{
                    this.entity.Properties.position.x = x;
                    this.entity.Properties.position.y = y;
                    _proxy.removeListener(ScratchEvent.SPRITE_GLIDE, _glide);
                    resolve();
                }
                _counter+=1;
            }
            
            // このリスナーが１０個を超えるとエラーなのでProxyでリッスンしている。
            _proxy.on(ScratchEvent.SPRITE_GLIDE, _glide);
            // エンティティでリッスンすると１０個を超える場合が予想される。
            // （同じスプライトの１０個以上のスレッドで同時に「glideTo」メソッドが実行される場合）
            // Proxy(=スレッド単位)でリッスンすることにした。
            // Proxy単位であれば、「glideTo」は同時には動かない。
            
            _proxy.once(ScratchEvent.SPRITE_GLIDE_STOP, ()=>{
                // GLIDE 停止メッセージを受信したとき（ Threadより )
                _proxy.removeListener(ScratchEvent.SPRITE_GLIDE, _glide);
                resolve();
            })
        });
    }
};