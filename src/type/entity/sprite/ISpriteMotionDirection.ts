/**
 * スプライトの動き（向き)
 */
export interface ISpriteMotionDirection {
    /**
     * angle degree
     * 
     * ---
     * 向きの角度
     * 
     * @returns {number} - angle degree
     */
    get degree() : number;

    /**
     * angle degree
     * 
     * ---
     * 向きの角度
     * 
     * @param degree {number} - angle degree
     */
    set degree(degree: number);
};