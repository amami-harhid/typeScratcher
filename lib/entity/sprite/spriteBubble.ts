import { Sprite } from '../sprite';
import { Bubble } from './bubble';
import type { BubbleProperties } from '@Type/sprite/TBubble';
import type { ISpriteBubble } from '@Type/sprite/ISpriteBubble';
/** 吹き出し */
export class SpriteBubble implements ISpriteBubble{

    private entity: Sprite;
    private bubble: Bubble;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        this.entity = entity;
        this.bubble = new Bubble(this.entity);
    }
    /**
     * 言う
     * @param text  - テキスト
     * @param properties - プロパティ 
     * @returns 
     * 
     * ```ts
     *  this.Looks.Bubble.say('こんにちは');
     * ```
     */
    say(text: string, properties?: BubbleProperties) :void {
        if(text == '') {
            this.bubble.destroyBubble();
        }else{
            this.bubble.say(text, properties);
        }
        
    }
    /**
     * 指定した秒数分、言う。
     * @param text - テキスト
     * @param sec - 秒数
     * @param properties - プロパティ
     * @returns 
     */
    async sayForSecs(text: string, sec:number, properties?: BubbleProperties): Promise<void>{
        this.say(text, properties);
        return new Promise<void>((resolve)=>{
            setTimeout(()=>{
                this.bubble.destroyBubble();
                resolve();
            }, sec * 1000);
        });
    }
    /**
     * 考える
     * @param text - テキスト 
     * @param properties - プロパティ
     * @returns
     */
    think(text: string, properties?: BubbleProperties) : void {
        if(text == '') {
            this.bubble.destroyBubble();
        }else{
            this.bubble.think(text, properties);
        }
    }
    /**
     * 指定した秒数分、考える。
     * @param text - テキスト 
     * @param sec - 秒数
     * @param properties - プロパティ
     * @returns
     */
    async thinkForSecs(text: string, sec: number, properties?: BubbleProperties): Promise<void>{
        this.think(text, properties);
        return new Promise<void>((resolve)=>{
            setTimeout(()=>{
                this.bubble.destroyBubble();
                resolve();
            }, sec*1000);
        });
    }

}
