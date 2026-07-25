/**
 * Stage
 */
import type { IEntity } from '../entity';
import type { TEntityOptions } from '../entity/TEntityOptions';
import type { IStageLooks } from './IStageLooks';
import type { IStageControl } from './IStageControl';
import type { IStageSensing } from './IStageSensing';
import type { IStageEvent } from './IStageEvent';
import type { IStageImage } from './IStageImage';
import type { IStageSound } from './IStageSound';
import type { IStageProperties } from './IStageProperties';
import type { IStageBackdrop } from './IStageBackdrop';
//import type { ISvgText } from '@Type/svgText/ISvgText';
//import type { IStageFont } from './IStageFont';

export type TStage = IStage;
export interface SStage {
    new(options?:TEntityOptions):IStage;
}
export interface IStage extends IEntity {
    
    readonly Properties: IStageProperties;
    /**
     * Looks appearance<br>
     * 見た目
     */
    readonly Looks : IStageLooks;
    /**
     * Control<br>
     * 制御
     */
    readonly Control : IStageControl;
    /**
     * Sensing<br>
     * 調べる
     */
    readonly Sensing : IStageSensing;
    /**
     * Event
     */
    readonly Event : IStageEvent;

    /**
     * Sound<br>
     * サウンド
     */
    readonly Sound : IStageSound;
    /**
     * Backdrop
     * 背景
     */
    readonly Backdrop: IStageBackdrop;
    /**
     * Font
     */
    //readonly Font : IStageFont;
    /**
     * SvgText
     */
    //readonly SvgText: ISvgText;
};