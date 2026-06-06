import { Bubble } from './bubble';
import { Timer } from '../../utils/timer';
import type { BubbleProperties } from '../../type/sprite/TBubble';
import type { ISprite } from '../../type/sprite';
import type { ISpriteBubble } from '../../type/sprite/ISpriteBubble';
/** 吹き出し */
export class SpriteBubble implements ISpriteBubble{

    protected entity: ISprite;
    private bubble: Bubble;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
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
        await Timer.wait(sec);
        this.bubble.destroyBubble();
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
        await Timer.wait(sec);
        this.bubble.destroyBubble();
    }

}
