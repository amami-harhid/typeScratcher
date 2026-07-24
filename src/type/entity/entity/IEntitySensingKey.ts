/**
 * Entity Sensing Keyboard
 */
export interface IEntitySensingKey {
    /**
     * Detecting whether a key is pressed
     * @param key {string}
     * @returns {boolean} result
     */
    isDown(key: string) : boolean;
    /**
     * Determining that no key is pressed
     * @param key {string}
     * @returns {boolean} result
     */
    isNotDown(key: string) : boolean;

};