/**
 * Sensing　Mouse
 * --- 
 * 『調べる』マウス
 */
export interface IEntitySensingMouse {
    /**
     * pressed mouse button
     * 
     * ---
     * マウスボタンが押されているかの判定
     * 
     * @returns {boolean} - result
     */
    readonly isDown : boolean;
    /**
     * Mouse x position
     * 
     * ---
     * マウスカーソルのＸ座標
     */
    readonly x : number;
    /**
     * Mouse y position
     * 
     * ---
     * マウスカーソルのＹ座標
     */
    readonly y : number;

};