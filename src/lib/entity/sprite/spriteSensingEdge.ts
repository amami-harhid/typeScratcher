import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteSensingEdge } from '../../../type/entity/sprite/ISpriteSensingEdge';
/**
 * Sprite Sensing(調べる) Edge
 */
export class SpriteSensingEdge implements ISpriteSensingEdge {
    protected entity: ISprite;
    private _touchingEdge:boolean;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this._touchingEdge = false;
    }
    /**
     * 枠に触っていることの判定
     * @returns 
     */
    get isTouching() : boolean {
        const touch = this.isTouchingEdge();
        return touch.touch;
    }
    /**
     * 縦の枠に触っていることを判定する
     * @returns 
     */
    get isTouchingVirtical() : boolean {
        const touch = this.isTouchingEdge();
        if( touch.touch === false) {
            return false;
        }
        const nearestEdge = touch.judge.nearestEdge;
        if(nearestEdge == 'bottom' || nearestEdge == 'top') {
            return false;
        }
        return true;
    }
    /**
     * 水平方向の枠に触っていることを判定する
     */
    get isTouchingHorizontal(): boolean {
        const touch = this.isTouchingEdge();
        if( touch.touch === false) {
            return false;
        }
        const nearestEdge = touch.judge.nearestEdge;
        if(nearestEdge == 'right' || nearestEdge == 'left') {
            return false;
        }
        return true;
    }
    /**
     * スプライトがステージの枠に触っているか否かを判定する
     * @param _callback 
     */
    public isTouchingEdge() : {touch:boolean, judge:{'minDist': number, 'nearestEdge': string}}  {
        const judge = this.onEdgeBounds();
        if(judge  == null )  {
            return {touch:false, judge:judge};
        }
        const nearestEdge = judge.nearestEdge;
        if(nearestEdge == '') {
            return {touch:false, judge:judge};
        }
        return {touch:true, judge:judge};
    }
    /**
     * スプライトが触っているステージの枠を返す
     */
    private onEdgeBounds(): {'minDist': number, 'nearestEdge': string} {
        const drawableID = this.entity.drawableID;
        const render = this.entity.render;
        const renderer = render.renderer;
        const drawable = renderer._allDrawables[drawableID];
        if( drawable == null || drawable.skin == null) 
            return {'minDist': 0, 'nearestEdge': ''};
        const bounds = renderer.getBounds(drawableID);
        if (!bounds) 
            return {'minDist': 0, 'nearestEdge': ''};
        const stageWidth = render.stageWidth;
        const stageHeight = render.stageHeight;
        const distLeft = Math.max(0, (stageWidth / 2) + bounds.left);
        const distTop = Math.max(0, (stageHeight / 2) - bounds.top);
        const distRight = Math.max(0, (stageWidth / 2) - bounds.right);
        const distBottom = Math.max(0, (stageHeight / 2) + bounds.bottom);
        // find nearest edge
        let nearestEdge = '';
        let minDist = Infinity;
        if (distLeft < minDist) {
            minDist = distLeft;
            nearestEdge = 'left';
        }
        if (distTop < minDist) {
            minDist = distTop;
            nearestEdge = 'top';
        }
        if (distRight < minDist) {
            minDist = distRight;
            nearestEdge = 'right';
        }
        if (distBottom < minDist) {
            minDist = distBottom;
            nearestEdge = 'bottom';
        }
        if (minDist > 0) {
            return {'minDist': 0, 'nearestEdge': ''}// Not touching any edge
        }
        return {'minDist': minDist, 'nearestEdge':nearestEdge};
    }
};