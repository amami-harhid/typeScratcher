/**
 * Sprite Sensing(調べる) Edge
 */
export interface ISpriteSensingEdge{
 
     /**
     * Detection of contact with the frame
     * @returns 
     */
    readonly isTouching : boolean;

    /**
     * Determine whether it is touching the vertical frame.
     * @returns 
     */
    readonly isTouchingVirtical : boolean;

    /**
     * Determine whether contact is being made with a horizontal frame.
     */
    readonly isTouchingHorizontal: boolean;

    /**
     * 端タッチ情報を取得する
     */
    //isTouchingEdge(): {touch:boolean, judge:{'minDist': number, 'nearestEdge': string}};

};