import type { IEntity } from '../entity';
import type { TEntityOptions } from '../entity/TEntityOptions';
import type { ISpriteControl } from './ISpriteControl';
import type { ISpriteCostume } from './ISpriteCostume';
import type { ISpriteEvent } from './ISpriteEvent';
import type { ISpriteLooks } from './ISpriteLooks';
import type { ISpriteMotion } from './ISpriteMotion';
import type { ISpriteSound } from './ISpriteSound';
import type { ISpriteSensing } from './ISpriteSensing';
import type { IPenSprite } from './pen';
/**
 * Sprite
 * ---
 * スプライト
 */
export interface SSprite{
    /**
     * @param name
     * @param options 
     */
    new(name:string, options?:TEntityOptions):ISprite;

};
/**
 * Sprite class
 * ---
 * スプライトクラス
 */
export interface ISprite extends IEntity {
    /**
     * Name of sprite
     * ---
     * スプライトの名前
     */
    readonly name: string;

    /**
     * Sprite motion processing
     * ---
     * 『動き』の処理
     */
    readonly Motion: ISpriteMotion;

    /**
     * Pen processing
     * ---
     * 『ペン』の処理
     */
    readonly Pen: IPenSprite;

    /**
     * Sprite Costume processing
     * ---
     * 『コスチューム』の処理
     */
    readonly Costume: ISpriteCostume;

    /**
     * Sprite Looks processing
     * ---
     * 『見た目』の処理
     */
    readonly Looks: ISpriteLooks;

    /**
     * Sprite Control processing
     * ---
     * 『制御』の処理
     */
    readonly Control: ISpriteControl;

    /**
     * Sprite Sensing processing
     * ---
     * 『調べる』の処理
     */
    readonly Sensing: ISpriteSensing;

    /**
     * Sprite Event processing
     * ---
     * 『イベント』の処理
     */
    readonly Event: ISpriteEvent;

    /**
     * Sound processing
     * ---
     * 『音』の処理
     */
    readonly Sound: ISpriteSound;

};