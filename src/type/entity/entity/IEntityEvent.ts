import { IImage } from "../../image";

export interface EventFunctionSetter {
    set func(func: CallableFunction);
}

/** イベント */
export interface IEntityEvent {

    /**
     * 旗が押されたイベントのセッターを返す
     * @returns イベントセッター
     */
    flagPresser(): EventFunctionSetter;
    /**
     * キー押下イベントのセッターを返す
     * @param key キーの指定
     * @returns イベントセッター
     */
    keyPresser( key: string ): {
        set func(func: CallableFunction);
    };
    /**
     * クリックイベントのセッターを返す
     * @returns イベントセッター
     */
    clicker(): EventFunctionSetter;
    /**
     * 背景が〇〇になったときのイベントセッターを返す
     * @param backdropName 
     * @returns イベントセッター
     */
    backdropSwitcher(backdrop: IImage) :EventFunctionSetter;

    /** キープレスされたときのイベント起動 */
    backdropEventKick(backdropName: string): Promise<void>;

    /** 旗おされたときのイベント起動 */
    flagPresserKick(): Promise<void>;

    /** キープレスされたときのイベント起動 */
    keyPresserKick(key: string): Promise<void>;

    /** クリックされたときのイベント起動 */
    clickEventerKick(): Promise<void>;

}