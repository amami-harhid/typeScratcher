import { IEntity } from ".";

/**
 * Entity Control
 */
export interface IEntityControl {
    /**
     * Wait for the specified number of seconds.
     * @param sec 
     */
    wait(sec: number): Promise<void>;
    /**
     * Wait until the conditions are met.
     * 
     * @param condition {CallableFunction} - Arrow function
     */
    waitUntil(condition: CallableFunction): Promise<void>;
    /**
     * Wait until the conditions are met.
     * 
     * @param condition {CallableFunction} - Arrow function
     */
    waitWhile(condition: CallableFunction): Promise<void>;
    /**
     * Stop the movement of all sprites.<br>
     * All scripts stop, including those for clones and other sprites.
     */
    stopAll() : void;
    /**
     * Stop this script
     */
    stopThisScript() : void;
    /**
     * Stop other scripts in this sprite.<br>
     * Clones derived from a parent sprite are considered to be the same sprite.<br>
     * When executing this method from a clone, other clones and the parent sprite are not considered the same sprite.<br>
     * Executing this method from the parent sprite stops the parent's other scripts as well as all scripts of the derived clones.<br>
     * When this method is executed from a clone, it stops only the other scripts of that clone.
     */
    stopOtherScripts() : void;

};