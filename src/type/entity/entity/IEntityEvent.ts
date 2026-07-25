import { IImage } from "../../image";

export interface EventFunctionSetter {
    /** Setter for the event thread */
    set func(func: CallableFunction);
}

/** 
 * Event processings
 * ---
 * イベントに関する操作
 */
export interface IEntityEvent {

    /**
     * Define "flag clicked" event thread.
     * 
     * ---
     * 旗が押されたときのイベントスレッドを定義する
     * 
     * @returns thread setter
     */
    flagPresser(): EventFunctionSetter;

    /**
     * Define "Key pressed" event thread.
     * 
     * ---
     * キー押下時のイベントスレッドを定義する
     * 
     * @param key key
     * @returns thread setter
     */
    keyPresser( key: string ): {
        set func(func: CallableFunction);
    };

    /**
     * Define "pressed" event thread.
     * 
     * ---
     * 押されたときのイベントスレッドを定義する
     * 
     * @returns thread setter
     */
    clicker(): EventFunctionSetter;

    /**
     * Define "change backdrop" event thread.
     * 
     * ---
     * 背景が〇〇になったときのイベントスレッドを定義する
     * 
     * @param backdropName 
     * @returns thread setter
     */
    backdropSwitcher(backdrop: IImage) :EventFunctionSetter;

}