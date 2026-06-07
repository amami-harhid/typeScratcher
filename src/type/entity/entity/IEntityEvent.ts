import type { IEntityBroadCast } from './IEntityBroadcast';
/** イベント */
export interface IEntityEvent {

    /** BroadCast */
    readonly Broadcast: IEntityBroadCast;
    /**
     * 旗が押されたイベントのセッターを返す
     * @returns イベントセッター
     */
    flagPresser(): {
        set func(func: CallableFunction);
    };
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
    clicker(): {
        set func(func: CallableFunction);
    };
    /**
     * 背景が〇〇になったときのイベントセッターを返す
     * @param backdropName 
     * @returns イベントセッター
     */
    backdropSwitcher(backdropName: string) : {
        set func(func: CallableFunction);
    };

    /** クリックされたときのイベント起動 */
    clickEventer(): Promise<void>;

    
}