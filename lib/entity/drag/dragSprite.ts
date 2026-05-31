import { Sprite } from '../sprite';
import { StageLayering } from '../../../Type/stage/CStageLayering';
import { playground } from '../../vm/playground';
import { Element } from '../../gui/element';
/**
 * DragSprite
 */
export class DragSprite {
    /** @internal */
    static PROPERTIES_CHANGE = "properties_change";
    private sprite: Sprite;
    /**
     * draggable {boolean} - trueのときDragできる。デフォルト値はfalse.
     * 
     * ```ts
     *   sprite.dragSprite.draggable = true;
     * ```
     */
    public draggable: boolean;
    private drag : Generator|null;
    private moveDistance?: {x:number, y:number};
    /**
     * dragging {boolean} - Drag中のときTrue.
     * 
     * ```ts
     *   if( sprite.dragSprite.dragging === true ) {
     *       console.log('Drag中です');
     *   }
     * ```
     */
    public dragging: boolean;
    
    /**
     * @internal
     * @constructor
     */
    constructor(sprite: Sprite) {
        this.sprite = sprite;
        this.draggable = false;
        this.drag = null;
        this.dragComplete();
        this.dragging = false;
    }
    /**
     * @internal
     * ドラッグ開始処理
     */
    dragStart(): void {
        const sprite = this.sprite;
        // DROP開始したスプライトは階層最上位にする
        sprite.render.renderer.setDrawableOrder(sprite.drawableID, Infinity, StageLayering.SPRITE_LAYER, true);
        // マウスが触った場所とスプライト中心との差分（位置関係）を記録する。
        // スプライト DROP時に利用する
        const renderRate = playground.renderRate;
        
        // body 基準のマウスの位置
        const mouseX = this.sprite.Mouse.pageX;
        const mouseY = this.sprite.Mouse.pageY;
        // canvasの位置
        const canvas = Element.getScratchCanvas();
        // getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const canvasX = canvasRect.x;
        const canvasY = canvasRect.y;
        // ステージの大きさ
        const stageWidthHalf = playground.renderer.stageWidth/2;
        const stageHeightHalf = playground.renderer.stageHeight/2;
        // canvas基準に直したマウス位置
        const canvasMouse = {x:mouseX-canvasX, y:mouseY-canvasY};

        const moveDistance = {
            x: canvasMouse.x*renderRate.x - stageWidthHalf - sprite.Properties.position.x,
            y: stageHeightHalf - canvasMouse.y*renderRate.y - sprite.Properties.position.y,
        };
        this.moveDistance = {
            x: moveDistance.x,
            y: moveDistance.y,
        };
        this.dragging = true;
    }
    /**
     * @internal
     * ドラッグ完了の処理（初期化としても使う）
     */
    dragComplete() {
        this.moveDistance = {x:0, y:0};
        this.dragging = false;
    }
    /**
     * @internal
     * Update処理.
     * SpriteのUpdateの中で呼ばれる前提です
     * (1) ドラッグ開始したら スプライトの画像を取り出しImgタグを追加し、スプライトを非表示にする
     * (2) ドラッグ終了したら Imgタグを削除し スプライトを表示する。
     * @param sprite {Sprite}
     * @returns 
     */
    async update() : Promise<void> {
        const sprite = this.sprite;
        if(this.draggable === false) return;
        if(this.dragging === false && sprite.Sensing.Mouse.isTouching) {
            const mouse = this.sprite.Mouse;
            if(!mouse.down) return;
            if(this.drag == null) {
                this.dragStart();
                this.drag = this.dragger();
            }
        }
        if(this.drag && this.moveDistance) {
            sprite.Motion.Position.x = this.sprite.Mouse.pageX - this.moveDistance.x;
            sprite.Motion.Position.y = this.sprite.Mouse.pageY - this.moveDistance.y;
            const ret = this.drag.next();
            if(ret.done === true) {
                sprite.Motion.Position.x = this.sprite.Mouse.pageX - this.moveDistance.x;
                sprite.Motion.Position.y = this.sprite.Mouse.pageY - this.moveDistance.y;
                this.dragComplete();
                this.drag = null;
                return;
            }
        }

    }
    /**
     * @internal
     * マウスダウンしている間、スプライト画像をドラッグする
     */
    *dragger() : Generator {
        const mouse = this.sprite.Mouse;
        while(this.draggable===true && mouse.down===true){
            yield;
        }
        this.dragging = false;
    }
}