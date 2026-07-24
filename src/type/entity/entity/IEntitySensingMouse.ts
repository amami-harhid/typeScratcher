/**
 * Entity Sensing(調べる) Mouse
 */
export interface IEntitySensingMouse {
    /**
     * pressed mouse button 
     * @returns {boolean} - result
     */
    readonly isDown : boolean;
    /**
     * Mouse x position
     */
    readonly x : number;
    /**
     * Mouse y position
     */
    readonly y : number;

};