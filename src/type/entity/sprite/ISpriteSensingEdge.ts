/**
 * Sprite Sensing(調べる) Edge
 */
export interface ISpriteSensingEdge{
 
     /**
     * Detection of contact with the frame
     * 
     * ---
     * ステージ枠に触れているか否かの判定
     * 
     * @returns 
     */
    readonly isTouching : boolean;

    /**
     * Determine whether it is touching the vertical frame.
     * 
     * ---
     * ステージ枠（縦）に触れているか否かの判定
     * 
     * @returns 
     */
    readonly isTouchingVirtical : boolean;

    /**
     * Determine whether contact is being made with a horizontal frame.
     * 
     * ---
     * ステージ枠（横）に触れているか否かの判定
     */
    readonly isTouchingHorizontal: boolean;

};