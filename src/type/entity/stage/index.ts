/**
 * Stage
 */
import type { IEntity } from '../entity';
import type { TEntityOptions } from '../entity/TEntityOptions';
import type { IStageLooks } from './IStageLooks';
import type { IStageControl } from './IStageControl';
import type { IStageSensing } from './IStageSensing';
import type { IStageEvent } from './IStageEvent';
import type { IStageSound } from './IStageSound';
import type { IStageProperties } from './IStageProperties';
import type { IStageBackdrop } from './IStageBackdrop';

export type TStage = IStage;
export interface SStage {
    new(options?:TEntityOptions):IStage;
}
export interface IStage extends IEntity {

    /**
     * Properties
     * ---
     * プロパティ
     */
    readonly Properties: IStageProperties;

    /**
     * Looks
     * ---
     * 見た目
     */
    readonly Looks : IStageLooks;

    /**
     * Control
     * ---
     * 制御
     */
    readonly Control : IStageControl;

    /**
     * Sensing
     * ---
     * 調べる
     */
    readonly Sensing : IStageSensing;

    /**
     * Event
     * ---
     * イベント
     */
    readonly Event : IStageEvent;

    /**
     * Sound
     * ---
     * サウンド
     */
    readonly Sound : IStageSound;

    /**
     * Backdrop
     * ---
     * 背景
     */
    readonly Backdrop: IStageBackdrop;
};