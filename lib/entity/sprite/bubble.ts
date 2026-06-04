/**
 * Bubble
 */
import { uid } from "../../utils/uid";
import { StageLayering } from "../../../Type/stage/CStageLayering";
import type { ISprite } from "@Type/sprite";
import type { TScale } from "@Type/common/typeCommon";
import type { BubbleState, BubbleProperties } from "@Type/sprite/TBubble";

export class Bubble  {
    private bubbleState: BubbleState;
    protected sprite: any;
    private _scale: TScale;
    private _direction: number;
    constructor( sprite: ISprite ) {
        this.bubbleState = this._createBubbleState();
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
    isBubbleActive(): boolean {
        if( this.bubbleState.uid == '') {
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
        if(this.bubbleState.drawableID == -1 ) {
            const bubbleDrawableID = this.sprite.renderer.createDrawable( StageLayering.SPRITE_LAYER );
            this.bubbleState.drawableID = bubbleDrawableID;
        }
    }

    async createTextSkin() {
        if(this.bubbleState.skinId == -1 ) {
            this.bubbleState.skinId = this.sprite.renderer.createTextSkin(
                this.bubbleState.type, 
                this.bubbleState.text, 
                this.bubbleState.onSpriteRight
            );
            this.bubbleState.uid = uid();    
        }
    }
    async say( text: string, properties: BubbleProperties={}): Promise<void> {
        this.bubbleState.type = 'say';
        this.bubbleState.text = text;
        await this._renderBubble(properties);
    }
    // async sayForSecs(text: string, sec:number, properties?: BubbleProperties): Promise<void>{
    //     this.say(text, properties);
    //     await Timer.wait(sec);
    //     this.destroyBubble();
    // }
    async think(text: string, properties: BubbleProperties ={}) {
        this.bubbleState.type = 'think';
        this.bubbleState.text = text;
        await this._renderBubble(properties);
    }
    // async thinkForSecs(text: string, sec: number, properties?: BubbleProperties): Promise<void> {
    //     this.think(text, properties);
    //     await Timer.wait(sec);
    //     this.destroyBubble();
    // }
    updateScale( w:number, h:number ): void { 
        if(this.bubbleState.drawableID != -1){
            if( w == 0 || h == 0 ) {
                // ゼロスケールではDrawできないので回避する。
                return;
            }
            // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
            let _w = Math.abs(w);
            let _h = Math.abs(h);
            this._scale.w = _w;
            this._scale.h = _h;
            this.sprite.renderer.updateDrawableScale ( this.bubbleState.drawableID , [_w, _h] );
       }
    }
    async _renderBubble(_properties: BubbleProperties ={}) {
        if(this.sprite.visible == false || this.bubbleState.text === '') {
            if( this.bubbleState.uid != '' ) {
                this.destroyBubble();
            }
            return;
        }
        if( this.bubbleState.uid == '' ) {
            this.createDrawable();
            await this.createTextSkin();    
            if( Object.keys(_properties).length > 0 ) {
                if( _properties.scale ) {
                    this.updateScale( _properties.scale.w, _properties.scale.h );
                }                }
            this.sprite.renderer.updateDrawableSkinId(this.bubbleState.drawableID, this.bubbleState.skinId);
        }else if(this.bubbleState.skinId) {
            if( Object.keys(_properties).length > 0 ) {
                if( _properties.scale ) {
                    this.updateScale( _properties.scale.w, _properties.scale.h );
                }
            }
            this.sprite.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
        }    
        this._positionBubble();
        return;
    }
    moveWithSprite() : void {
        this._positionBubble();
    }
    _positionBubble() : void {
        if(this.bubbleState.skinId) {
            try{
                const [_bubbleWidth, _bubbleHeight] = this.sprite.renderer.getCurrentSkinSize( this.bubbleState.drawableID );
                const bubbleWidth = _bubbleWidth * this._scale.w / 100; 
                const bubbleHeight = _bubbleHeight * this._scale.h / 100;
                const targetBounds = this.sprite.renderer.getBoundsForBubble( this.sprite.drawableID );
                const stageSize = this.sprite.renderer.getNativeSize();
                const stageBounds = {
                    left: -stageSize[0] / 2,
                    right: stageSize[0] / 2,
                    top: stageSize[1] / 2,
                    bottom: -stageSize[1] / 2
                };
                if( this.bubbleState.onSpriteRight === true 
                    && bubbleWidth + targetBounds.right > stageBounds.right && (targetBounds.left - bubbleWidth > stageBounds.left) ) {
                    if( this._scale.w > 0) {
                        this.bubbleState.onSpriteRight = false;
                    } else {
                        this.bubbleState.onSpriteRight = false;
                    }
                    this.sprite.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
                } else if( this.bubbleState.onSpriteRight === false 
                    && targetBounds.left - bubbleWidth < stageBounds.left && (bubbleWidth + targetBounds.right < stageBounds.right) ) {
                    if( this._scale.w > 0) {
                        this.bubbleState.onSpriteRight = true;
                    } else {
                        this.bubbleState.onSpriteRight = false;
                    }
                    this.sprite.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
                } else {
                    const positionX = (this.bubbleState.onSpriteRight)? 
                        (Math.max(stageBounds.left,Math.min(stageBounds.right - bubbleWidth, targetBounds.right)))
                        :(Math.min(stageBounds.right - bubbleWidth, Math.max(stageBounds.left, targetBounds.left - bubbleWidth )));
                    const positionY = Math.min(stageBounds.top, targetBounds.bottom + bubbleHeight);
                    this.sprite.renderer.updateDrawablePosition(this.bubbleState.drawableID, [positionX, positionY]);
                }
        
            } catch(e) {
                //console.log(e);
            }
        }
    }
    destroyBubble(): void {
        if(this.isBubbleActive() && this.bubbleState.drawableID > -1) {
            this.sprite.renderer.destroyDrawable( this.bubbleState.drawableID, StageLayering.SPRITE_LAYER);
            this.sprite.renderer.destroySkin( this.bubbleState.skinId )
            this._createBubbleState();

            // destroy されたので初期化
            this.bubbleState.drawableID = -1;
            this.bubbleState.skinId = -1;
            this.bubbleState.uid = '';
        }
    }
};