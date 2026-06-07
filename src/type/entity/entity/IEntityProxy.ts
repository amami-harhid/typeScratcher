/**
 * プロキシ
 */
import { IEntity } from '.';
export interface IEntityProxy extends IEntity {
    readonly isProxyTest:boolean;
    entity:IEntity;
    threadId:string;
    threadName: string;
    threadCounter: number;
    /** このスクリプトを止めるスイッチを設定する */
    setStopThisScriptSwitch(stop:boolean): void;
    /** このスクリプトを止めるスイッチ */
    getStopThisScriptSwitch(): boolean;
    /** 強制終了 */
    throwForceStopThisScripts(): void;

}