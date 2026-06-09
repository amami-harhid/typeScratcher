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

}