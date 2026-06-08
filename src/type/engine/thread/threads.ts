import { IEntity } from "../../entity/entity";
import { IEntityProxy } from "../../entity/entity/IEntityProxy";

export const ThreadStatus = {
    /** 初期化中 */
    INITIALIZING: 'INITIALIZING',
    /** 待機中 */
    YIELD: 'YIELD',
    /** 実行中 */
    RUNNING: 'RUNNING',
    /** 終了 */
    COMPLETED: 'COMPLETED',
} as const;

export type ThreadStatusType = keyof typeof ThreadStatus;

export interface IThreadObj {
    /** 完了フラグ */
    readonly done: boolean;
    /** スレッドID */
    threadId: string;
    /** ステータス */
    status: ThreadStatusType;
    /** エンティティID */
    entityId: string;
    /** プロキシ生成 */
    genProxy(): void;
    /** イベント関数を設定する */
    setFunc<T> (func: CallableFunction, ...args:T[]):void;
    /** エンティティ */
    readonly entity : IEntity;
    /** エンティティプロキシ */
    readonly proxy : IEntityProxy;
    /** 開始フラグ */
    readonly isStarted: boolean;

    
}