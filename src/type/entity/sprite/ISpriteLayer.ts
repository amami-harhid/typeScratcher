/** 
 * Layer 
 */
export interface ISpriteLayer {
 
    /**
     * Go to the front
     */
    gotoFront() : void;

    /**
     * Go to the back.
     */
    gotoBack() : void;

    /**
     * Move to the layer above.
     * 
     * @param nLayer {number} - number of layer 
     */
    goForwardLayers(nLayer: number) : void;

    /**
     * Move to the layer below.
     * 
     * @param nLayer {number} - number of layer
     */
    goBackwardLayers(nLayer: number) : void;

}