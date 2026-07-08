import type { IEntity } from '../entity';
import type { TEntityOptions } from '../entity/TEntityOptions';
import type { ISpriteControl } from './ISpriteControl';
import type { ISpriteCostume } from './ISpriteCostume';
import type { ISpriteDragMode } from './ISpriteDragMode';
import type { ISpriteEvent } from './ISpriteEvent';
import type { ISpriteLooks } from './ISpriteLooks';
import type { ISpriteMotion } from './ISpriteMotion';
import type { ISpriteSound } from './ISpriteSound';
import type { ISpriteSensing } from './ISpriteSensing';
import type { IPenSprite } from './pen';
/**
 * Sprite
 */

export interface SSprite{
    /**
     * @param name
     * @param options 
     */
    new(name:string, options?:TEntityOptions):ISprite;

};
export interface ISprite extends IEntity {
    /**
     * スプライト名
     */
    readonly name: string;

    /**
     * 動き
     */
    readonly Motion: ISpriteMotion;

    /**
     * PEN
     */
    readonly Pen: IPenSprite;

    /**
     * コスチューム番号、コスチューム名を取り出すためのオブジェクト
     * 使用例：this.Costume.no, this.Costume.name
     * @returns
     */
    readonly Costume: ISpriteCostume;
    /**
     * 見た目
     */
    readonly Looks: ISpriteLooks;
    /**
     * 制御
     */
    readonly Control: ISpriteControl;
    /**
     * 調べる
     */
    readonly Sensing: ISpriteSensing;
    /**
     * イベント
     */
    readonly Event: ISpriteEvent;

    /**
     * サウンド
     */
    readonly Sound: ISpriteSound;

    /**
     * Font
     */
    //readonly Font : ISpriteFont;
    /**
     * SvgText
     */
    //readonly SvgText: ISvgText;

    /**
     * 音声合成
     */
    //readonly TextToSpeech: ISpriteTextToSpeech;

    /**
     * DragModeを設定するためのオブジェクト
     */
    readonly DragMode: ISpriteDragMode;

    /**
     * ペン機能
     */
    //readonly Pen : ISpritePen;

    /**
     * クローンの配列
     */
    //clones : ISprite[];

    //isClone: boolean;

    
};