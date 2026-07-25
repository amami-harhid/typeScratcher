import type { BubbleProperties } from '../TBubble';

/** 
 * Sprite Bubble 
 */
export interface ISpriteLooksBubble {

    /**
     * "Saying" bubble
     * 
     * ---
     * フキダシ『言う』
     * 
     * @param text -text
     * @param properties - properties
     */
    say(text: string, properties?: BubbleProperties) :void;

    /**
     * "Saying" bubble for the specified number of seconds.
     * 
     * ---
     * フキダシ『言う』を指定秒数だけ表示して待つ
     * 
     * @param text -text
     * @param sec - seconds
     * @param properties - properties
     */
    sayForSecs(text: string, sec:number, properties?: BubbleProperties): Promise<void>;

    /**
     * "Thinking" bubble
     * 
     * ---
     * フキダシ『考える』
     * 
     * @param text -text
     * @param properties - properties
     */
    think(text: string, properties?: BubbleProperties) : void;

    /**
     * "Thinking" bubble for the specified number of seconds.
     * 
     * ---
     * フキダシ『考える』を指定秒数だけ表示して待つ
     * 
     * @param text -text
     * @param sec - seconds
     * @param properties - properties
     */
    thinkForSecs(text: string, sec: number, properties?: BubbleProperties): Promise<void>;
}
