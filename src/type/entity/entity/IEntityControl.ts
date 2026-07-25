import { IEntity } from ".";

/**
 * Entity Control
 */
export interface IEntityControl {
    /**
     * Wait for the specified number of seconds.
     * 
     * ---
     * 指定した秒数分、待つ
     * 
     * @param sec 
     */
    wait(sec: number): Promise<void>;

    /**
     * Wait until the conditions are met.
     * 
     * ---
     * 条件が満たされるまで待つ
     * 
     * @param condition {CallableFunction} - Arrow function
     */
    waitUntil(condition: CallableFunction): Promise<void>;

    /**
     * Wait until the conditions are met.
     * 
     * ---
     * 条件が成立している間、待つ
     * 
     * @param condition {CallableFunction} - Arrow function
     */
    waitWhile(condition: CallableFunction): Promise<void>;

    /**
     * All scripts stop, including those for clones and other sprites.
     * 
     * ---
     * クローンや他のスプライトのスクリプトを含め、すべてのスクリプトが停止します。
     */
    stopAll() : void;

    /**
     * Stop this script
     * ---
     * このスクリプトを止める
     */
    stopThisScript() : void;

    /**
     * Stop other scripts in this sprite.
     * ---
     * このスプライトの他のスクリプトを止める
     * 
     * ---
     * If this method is executed in a parent sprite, the script stops—including in any clones generated from that sprite.
     * If this method is executed within a clone, the parent sprite's script does not stop.
     * 
     * ---
     * 親スプライトでこのメソッドを実行した場合、そのスプライトから生成したクローンを含めてスクリプトを停止します。
     * クローンのなかでこのメソッドを実行した場合は親スプライトのスクリプトは停止しません。
     */
    stopOtherScripts() : void;

};