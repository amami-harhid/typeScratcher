import { SpriteSensingDistance } from './spriteSensingDistance';
import { MathUtil } from '../../utils/math-util';
import { Element } from '../../gui/element';
import type { ISprite } from '../../type/entity/sprite';
import type { ISpriteSensingMouse } from '../../type/entity/sprite/ISpriteSensingMouse';
import type { ISpriteSensingDistance } from '../../type/entity/sprite/ISpriteSensingDistance';
/**
 * Sprite Sensing(調べる) Mouse
 */
export class SpriteSensingMouse implements ISpriteSensingMouse {
    protected entity: ISprite;
    private Distance: ISpriteSensingDistance;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this.Distance = new SpriteSensingDistance(entity);
    }
    /**
     * マウスが押されていることの判定
     * @returns {boolean} - マウスが押されている判定
     */
    get isDown() : boolean {
        return this.entity.Mouse.down;
    }
    /**
     * マウス情報(x座標)
     */
    get x() {
        return this.entity.Mouse.x;
    }
    /**
     * マウス情報(y座標)
     */
    get y() {
        return this.entity.Mouse.y;
    }
    /**
     * 距離
     * 使用例：マウスポインターとの距離 
     * this.Sensing.Distance.mousePointer
     * 使用例：他スプライトとの距離
     * this.Sensing.Distance.to( otherSprite )
     */
    get distance(): number {
        return this.Distance.mousePointer();
    }
    /**
     * マウスカーソルへの向き
     */
    get degree(): number {
        const canvas = Element.getScratchCanvas();
        const rect = canvas.getBoundingClientRect();
        const canvasGlobalCenterX = rect.x + rect.width/2;
        const canvasGlobalCenterY = rect.y + rect.height/2;
        const pageX = this.entity.Mouse.pageX;
        const pageY = this.entity.Mouse.pageY;
        const _mouseXG = (pageX - canvasGlobalCenterX );
        const _mouseYG = (canvasGlobalCenterY - pageY);

        const render = this.entity.render;
        const rateX = render.stageWidth / canvas.width;
        const rateY = render.stageHeight / canvas.height;
        const targetX = (_mouseXG) * rateX;
        const targetY = (_mouseYG) * rateY;
        const dx = targetX - this.entity.Properties.position.x;
        const dy = targetY - this.entity.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg( Math.atan2(dy, dx));
        if(direction > 180) {
            direction -= 360;
        }
        return direction;    
    }
    /**
     * マウスタッチしていないことの判定
     * @returns 
     */
    get isNotTouching() : boolean {
        return !this.isTouching;
    }
    /**
     * マウスタッチしていることの判定
     * @returns 
     */
    get isTouching(): boolean {
        const mouseX = this.entity.Mouse.x +1; // TODO: +1 は暫定、理由不明
        const mouseY = this.entity.Mouse.y +1; // TODO: +1 は暫定、理由不明
        // 自分自身だけを対象にしてマウスタッチしているDrawableのIDを取得する
        // マウスタッチしていれば自分自身のDrawableIDが返るはず。
        const touchDrawableId = this.entity.render.renderer.pick(mouseX,mouseY, 2, 2, [this.entity.drawableID]);
        if(this.entity.drawableID == touchDrawableId){
            return true;
        }
        return false;
    }
};