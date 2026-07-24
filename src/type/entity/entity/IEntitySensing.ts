import type { IEntitySensingMouse } from './IEntitySensingMouse';
import type { IEntitySensingKey } from './IEntitySensingKey';
import type { IEntitySensingTimer } from './IEntitySensingTimer';
/**
 * Entity Sensing(調べる)
 */
export interface IEntitySensing {
    /**
     * Ask a question and wait for the answer.
     * @param question {string} - Question text
     * @returns {Promise<string>} - answer
     */
    askAndWait(question:string): Promise<string>;

    /**
     * Sensor for Mouse
     */
    readonly mouse: IEntitySensingMouse;

    /**
     * Sensor for Keyboard
     */
    readonly keyboard : IEntitySensingKey;
    /**
     * Sensor for Timer
     */
    readonly timer : IEntitySensingTimer;
};