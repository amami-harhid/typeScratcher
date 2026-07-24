import { IEntity } from "../../entity/entity";
import { IEntityProxy } from "../../entity/entity/IEntityProxy";

/** Status of thread */
export const ThreadStatus = {
    /** Initializing */
    INITIALIZING: 'INITIALIZING',
    /** Standby */
    STAND_BY: 'STAND_BY',
    /** Running */
    RUNNING: 'RUNNING',
    /** Completed */
    COMPLETED: 'COMPLETED',
} as const;

export type ThreadStatusType = keyof typeof ThreadStatus;

export interface IThreadObj<T> {
    /** Completion flag */
    readonly done: boolean;
    /** Thread ID */
    threadId: string;
    /** Thread Status type */
    status: ThreadStatusType;
    /** Entity ID */
    entityId: string;
    /** Proxy generation */
    genProxy(): void;
    /** Set function for thread */
    setFunc (func: CallableFunction, ...args:T[]):void;
    /** Entity */
    readonly entity : IEntity;
    /** Proxy for entity */
    readonly proxy : IEntityProxy;
    /** property of thread Starting */
    readonly isStarted: boolean;

    
}