/**
 * Sensing Keyboard
 * ---
 * 『調べる』キーボード
 */
export interface IEntitySensingKey {
    /**
     * Detecting whether a key is pressed
     * 
     * ---
     * キーが押されたことを調べる
     * 
     * @param key {string}
     * @returns {boolean} result
     */
    isDown(key: string) : boolean;
    /**
     * Determining that no key is pressed
     * 
     * ---
     * キーが押されていないことを調べる
     * 
     * @param key {string}
     * @returns {boolean} result
     */
    isNotDown(key: string) : boolean;

};