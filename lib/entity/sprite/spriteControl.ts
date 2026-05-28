import { Sprite } from '../sprite';
import type { TEntityOptions } from '@Type/entity/TEntityOptions';
import { Timer } from '../../utils/timer';
import * as Until from '../../utils/wait';
/**
 * Sprite Control(制御)
 */
export class SpriteControl {
    private entity: Sprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
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
    stopThisScript() : void {
        
    }
    /**
     * このスプライトの他のスクリプトを停止する
     */
    stopOtherScripts(proxy:Sprite) : void {

    }

};