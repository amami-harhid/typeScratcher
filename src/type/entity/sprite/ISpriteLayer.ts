/** 
 * Layer 
 */
export interface ISpriteLayer {
 
    /**
     * Go to the front layer.
     * ---
     * 最前面の階層にする
     */
    gotoFrontLayer() : void;

    /**
     * Go to the back layer.
     * ---
     * 最背面の階層にする
     */
    gotoBackLayer() : void;

    /**
     * Move to the layer above.
     * ---
     * 階層を指定した数分、上げる
     * 
     * @param nLayer {number} - number of layer 
     */
    goForwardLayers(nLayer: number) : void;

    /**
     * Move to the layer below.
     * ---
     * 階層を指定した数分、下げる
     * 
     * @param nLayer {number} - number of layer
     */
    goBackwardLayers(nLayer: number) : void;

}