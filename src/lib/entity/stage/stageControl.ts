import { engine, Engine } from '../../engine';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Stage } from '../stage';
import { threadManager } from '../../engine/thread/threads';
import { Timer } from '../../utils/timer';
import * as Wait from '../../utils/wait';
import type { IStage } from '../../../type/entity/stage';
import type { IEntityProxy } from '../../../type/entity/entity/IEntityProxy';
import type { IStageControl } from '../../../type/entity/stage/IStageControl';

/**
 * Stage Control(制御)
 */
export class StageControl implements IStageControl{
    protected entity: Stage;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity as Stage;
    }
    /**
     * 指定秒数分、待つ。
     * @param sec 
     */
    async wait(sec: number): Promise<void>{
        await Timer.wait(sec);
    }
    /**
     * 条件が成立する迄、待つ。
     * ```ts
     * const condition = ()=>{
     *  // マウスの押下を判定
     *  return Lib.mouseIsPressed() === true;
     * };
     * // マウスが押されるまで待つ
     * await this.Control.waitUntil(condition);
     * 
     * ```
     * @param condition {Wait.ConditionFunction} - 条件結果を返す関数
     */
    async waitUntil(condition: Wait.ConditionFunction): Promise<void> {
        await Wait.untilCondition(condition);
    }
    /**
     * 条件が成立する間、待つ。
     * ```ts
     * const condition = ()=>{
     *  // マウスの押下を判定
     *  return Lib.mouseIsPressed() === true;
     * };
     * // マウスが押されている間、待つ
     * await this.Control.waitWhile(condition);
     * 
     * ```
     * @param condition {Wait.ConditionFunction} - 条件結果を返す関数
     */
    async waitWhile(condition: Wait.ConditionFunction): Promise<void> {
        await Wait.whileCondition(condition);
    }
    /**
     * 全てのスプライトの動作を停止する
     */
    stopAll() : void {
        (engine as Engine).runtime.scratchEvent.emit(ScratchEvent.STOP_CLICKED);
    }
    /**
     * このスクリプトを停止する
     */
    stopThisScript(proxy:IEntityProxy) : void {
        proxy.setStopThisScriptSwitch(true);
    }
    /**
     * このスプライトの他のスクリプトを停止する
     */
    stopOtherScripts(proxy:IEntityProxy) : void {
        threadManager.stopOtherScripts(proxy);
    }

};