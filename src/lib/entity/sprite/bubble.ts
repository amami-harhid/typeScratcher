/**
 * Bubble
 */
import { ScratchElement } from "../../gui/scratchElement";
import { uid } from "../../utils/uid";
import { StageLayering } from "../../../type/entity/stage/CStageLayering";
import type { ISprite } from "../../../type/entity/sprite";
import type { TScale } from "../../../type/common/typeCommon";
import type { BubbleState, BubbleProperties } from "../../../type/entity/TBubble";
import type { ISvgSkin } from "../../../type/render/ISvgSkin";

export class Bubble  {
    private _bubbleState: BubbleState;
    protected sprite: ISprite;
    private _scale: TScale;
    private _direction: number;
    constructor( sprite: ISprite ) {
        this._bubbleState = this._createBubbleState();
        this.sprite = sprite;
        this._scale = {w:100, h:100};
        this._direction = 90;
    }
    _createBubbleState() :BubbleState {
        const state: BubbleState = {
            drawableID : -1, // 未設定
            skinId: -1, // 未設定
            text : '',
            type : 'say',
            onSpriteRight : true,
            uid : '', // <--- 使用用途不明
        }
        return state;
    }
    get bubbleState(): BubbleState {
        return this._bubbleState;
    }
    get isBubbleActive(): boolean {
        if( this._bubbleState.uid == '') {
            return false;
        }
        return true;
    }
    get direction() : number {
        return this._direction;
    }
    set direction( _direction: number ) {
        this._direction = _direction;
    }
    /**
     * Bubbleスケールを設定する
     * @param w {number} - 横スケール(%).
     * @param h {number} - 縦スケール(%).
     * @returns 
     */
    setScale( w: number, h: number ): void {
        if( w == 0 || h == 0 ) {
            // ゼロスケールではDrawできないので回避する。
            return;
        }
        // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
        let _w = Math.abs(w);
        let _h = Math.abs(h);
        this._scale.w = _w;
        this._scale.h = _h;    
    }
    async createDrawable() {
        if(this._bubbleState.drawableID == -1 ) {
            const bubbleDrawableID = this.sprite.render.renderer.createDrawable( StageLayering.SPRITE_LAYER );
            this._bubbleState.drawableID = bubbleDrawableID;
        }
    }

    async createTextSkin() {
        if(this._bubbleState.skinId == -1 ) {
            this._bubbleState.skinId = this.sprite.render.renderer.createTextSkin(
                this._bubbleState.type, 
                this._bubbleState.text, 
                this._bubbleState.onSpriteRight
            );
            // CTX willReadFrequent対応
            const _skin = this.sprite.render.renderer._allSkins[this._bubbleState.skinId];
            //if(_skin._canvas) _skin._canvas.remove(); // <== 念のため削除
            const _svgSkin: ISvgSkin = _skin as ISvgSkin;
            _svgSkin._canvas = ScratchElement.RemakeCanvasWillReadFrequentlyTrue;
            _svgSkin._context = _svgSkin._canvas.getContext("2d", { willReadFrequently: true });

            this._bubbleState.uid = uid();
        }
    }
    async say( text: string, properties: BubbleProperties={}): Promise<void> {
        this._bubbleState.type = 'say';
        this._bubbleState.text = text;
        await this._renderBubble(properties);
    }
    // async sayForSecs(text: string, sec:number, properties?: BubbleProperties): Promise<void>{
    //     this.say(text, properties);
    //     await Timer.wait(sec);
    //     this.destroyBubble();
    // }
    async think(text: string, properties: BubbleProperties ={}) {
        this._bubbleState.type = 'think';
        this._bubbleState.text = text;
        await this._renderBubble(properties);
    }
    // async thinkForSecs(text: string, sec: number, properties?: BubbleProperties): Promise<void> {
    //     this.think(text, properties);
    //     await Timer.wait(sec);
    //     this.destroyBubble();
    // }
    updateScale( w:number, h:number ): void { 
        if(this._bubbleState.drawableID != -1){
            if( w == 0 || h == 0 ) {
                // ゼロスケールではDrawできないので回避する。
                return;
            }
            // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
            let _w = Math.abs(w);
            let _h = Math.abs(h);
            this._scale.w = _w;
            this._scale.h = _h;
            this.sprite.render.renderer.updateDrawableScale ( this._bubbleState.drawableID , [_w, _h] );
       }
    }
    async _renderBubble(_properties: BubbleProperties ={}) {
        const renderer = this.sprite.render.renderer;
        if(this.sprite.Properties.visible == false || this._bubbleState.text === '') {
            if( this._bubbleState.uid != '' ) {
                this.destroyBubble();
            }
            return;
        }
        if( this._bubbleState.uid == '' ) {
            this.createDrawable();
            await this.createTextSkin();    
            if( Object.keys(_properties).length > 0 ) {
                if( _properties.scale ) {
                    this.updateScale( _properties.scale.w, _properties.scale.h );
                }                }
            renderer.updateDrawableSkinId(this._bubbleState.drawableID, this._bubbleState.skinId);
        }else if(this._bubbleState.skinId) {
            if( Object.keys(_properties).length > 0 ) {
                if( _properties.scale ) {
                    this.updateScale( _properties.scale.w, _properties.scale.h );
                }
            }
            renderer.updateTextSkin(this._bubbleState.skinId, this._bubbleState.type, this._bubbleState.text, this._bubbleState.onSpriteRight);
        }    
        this._positionBubble();
        return;
    }
    moveWithSprite() : void {
        this._positionBubble();
    }
    _positionBubble() : void {
        const renderer = this.sprite.render.renderer;
        if(this._bubbleState.skinId && this._bubbleState.skinId > -1) {
            try{
                const [_bubbleWidth, _bubbleHeight] = renderer.getCurrentSkinSize( this._bubbleState.drawableID );
                const bubbleWidth = _bubbleWidth * this._scale.w / 100; 
                const bubbleHeight = _bubbleHeight * this._scale.h / 100;
                const targetBounds = renderer.getBoundsForBubble( this.sprite.drawableID );
                const stageSize = renderer.getNativeSize();
                const stageBounds = {
                    left: -stageSize[0] / 2,
                    right: stageSize[0] / 2,
                    top: stageSize[1] / 2,
                    bottom: -stageSize[1] / 2
                };
                if( this._bubbleState.onSpriteRight === true 
                    && bubbleWidth + targetBounds.right > stageBounds.right && (targetBounds.left - bubbleWidth > stageBounds.left) ) {
                    if( this._scale.w > 0) {
                        this._bubbleState.onSpriteRight = false;
                    } else {
                        this._bubbleState.onSpriteRight = false;
                    }
                    renderer.updateTextSkin(this._bubbleState.skinId, this._bubbleState.type, this._bubbleState.text, this._bubbleState.onSpriteRight);
                } else if( this._bubbleState.onSpriteRight === false 
                    && targetBounds.left - bubbleWidth < stageBounds.left && (bubbleWidth + targetBounds.right < stageBounds.right) ) {
                    if( this._scale.w > 0) {
                        this._bubbleState.onSpriteRight = true;
                    } else {
                        this._bubbleState.onSpriteRight = false;
                    }
                    renderer.updateTextSkin(this._bubbleState.skinId, this._bubbleState.type, this._bubbleState.text, this._bubbleState.onSpriteRight);
                } else {
                    const positionX = (this._bubbleState.onSpriteRight)? 
                        (Math.max(stageBounds.left,Math.min(stageBounds.right - bubbleWidth, targetBounds.right)))
                        :(Math.min(stageBounds.right - bubbleWidth, Math.max(stageBounds.left, targetBounds.left - bubbleWidth )));
                    const positionY = Math.min(stageBounds.top, targetBounds.bottom + bubbleHeight);
                    renderer.updateDrawablePosition(this._bubbleState.drawableID, [positionX, positionY]);
                }
        
            } catch(e) {
                //console.log(e);
            }
        }
    }
    destroyBubble(): void {
        const renderer = this.sprite.render.renderer;
        if(this.isBubbleActive && this._bubbleState.drawableID > -1) {
            renderer.destroyDrawable( this._bubbleState.drawableID, StageLayering.SPRITE_LAYER);
            renderer.destroySkin( this._bubbleState.skinId )
            this._createBubbleState();

            // destroy されたので初期化
            this._bubbleState.drawableID = -1;
            this._bubbleState.skinId = -1;
            this._bubbleState.uid = '';
        }
    }
};