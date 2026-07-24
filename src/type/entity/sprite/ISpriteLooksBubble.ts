import type { BubbleProperties } from '../TBubble';

/** 
 * Sprite Bubble 
 */
export interface ISpriteLooksBubble {

    /**
     * Display "saying" bubble
     * 
     * @param text -text
     * @param properties - properties
     */
    say(text: string, properties?: BubbleProperties) :void;
    /**
     * Display "saying" bubble for the specified number of seconds.
     * 
     * @param text -text
     * @param sec - seconds
     * @param properties - properties
     */
    sayForSecs(text: string, sec:number, properties?: BubbleProperties): Promise<void>;
    /**
     * Display "thinking" bubble
     * 
     * @param text -text
     * @param properties - properties
     */
    think(text: string, properties?: BubbleProperties) : void;

    /**
     * Display "thinking" bubble for the specified number of seconds.
     * 
     * @param text -text
     * @param sec - seconds
     * @param properties - properties
     */
    thinkForSecs(text: string, sec: number, properties?: BubbleProperties): Promise<void>;
}
