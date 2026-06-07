import type { IEntityBroadCast } from './IEntityBroadcast';

export interface EventFunctionSetter {
    set func(func: CallableFunction);
}

/** イベント */
export interface IEntityEvent {

    /** BroadCast */
    readonly Broadcast: IEntityBroadCast;
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
    backdropSwitcher(backdropName: string) :EventFunctionSetter;

    /** クリックされたときのイベント起動 */
    clickEventer(): Promise<void>;

    
}