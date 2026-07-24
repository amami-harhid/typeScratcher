/**
 * プロキシ
 */
import { IEntity } from '.';
export interface IEntityProxy extends IEntity {
    readonly isProxyTest:boolean;
    readonly id: string;
    entity:IEntity;
    threadId:string;
    threadName: string;
    threadCounter: number;
    /** Set up a switch to stop this script. */
    setStopThisScriptSwitch(stop:boolean): void;
    /** A switch to stop this script */
    getStopThisScriptSwitch(): boolean;
    /** Forced termination */
    throwForceStopThisScripts(): void;

}