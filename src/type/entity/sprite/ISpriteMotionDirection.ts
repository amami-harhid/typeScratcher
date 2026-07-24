/**
 * スプライトの動き（向き)
 */
export interface ISpriteMotionDirection {
    /**
     * angle degree
     * 
     * @returns {number} - angle degree
     */
    get degree() : number;

    /**
     * angle degree
     * 
     * @param degree {number} - angle degree
     */
    set degree(degree: number);
};