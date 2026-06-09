import { engine, Engine } from '../../engine';
import { threadManager } from '../../engine/thread/threads';
import { Timer } from '../../utils/timer';
import * as Until from '../../utils/wait';
import type { TEntityOptions } from '../../../type/entity/entity/TEntityOptions';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteControl } from '../../../type/entity/sprite/ISpriteControl';
import type { IEntityProxy } from '../../../type/entity/entity/IEntityProxy';
import { ScratchEvent } from '../../engine/scratchEvent';

/**
 * Sprite Control(制御)
 */
export class SpriteControl implements ISpriteControl {
    protected entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
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
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    async waitUntil(condition: Until.ConditionFunction): Promise<void> {
        await Until.untilCondition(condition);
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
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    async waitWhile(condition: Until.ConditionFunction): Promise<void> {
        await Until.whileCondition(condition);
    }
    /**
     * クローンを作る
     * @param options? {TEntityOptions} - オプション 
     */
    clone(options?:TEntityOptions): void {

    }
    /**
     * クローンを全て削除する
     */
    removeAllClones() : void {
        
    }
    /**
     * クローンされたときの動作を定義する
     * @param func {CallableFunction} 動作を記述する関数
     */
    whenCloned(func: CallableFunction): void {
        
    }
    /**
     * 全てのスプライトの動作を停止する
     */
    stopAll() : void {
        (engine as Engine).runtime.scratchEvent.emit(ScratchEvent.STOP_CLICKED);
    }
    /**
     * スプライトを抹消する
     */
    remove() : void {
        
    }
    /**
     * 生存確認結果
     * @returns {boolean} - 生存確認結果
     */
    isAlive() : boolean {
        return true;
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