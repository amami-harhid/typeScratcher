/**
 * Entity Sensing(調べる) Timer
 */
export interface IEntitySensingTimer {

    /**
     * timer ( ms )
     */
    readonly timer : number;
    /**
     * reset timer
     */
    reset(): void;
};