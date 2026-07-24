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
     * Name of sprite
     */
    readonly name: string;

    /**
     * Sprite motion
     */
    readonly Motion: ISpriteMotion;

    /**
     * Pen
     */
    readonly Pen: IPenSprite;

    /**
     * Sprite Costume
     */
    readonly Costume: ISpriteCostume;

    /**
     * Sprite Looks Appearance
     */
    readonly Looks: ISpriteLooks;

    /**
     * Sprite Control
     */
    readonly Control: ISpriteControl;

    /**
     * Sprite Sensing
     */
    readonly Sensing: ISpriteSensing;

    /**
     * Sprite Event
     */
    readonly Event: ISpriteEvent;

    /**
     * Sound
     */
    readonly Sound: ISpriteSound;

    /**
     * DragMode
     */
    readonly DragMode: ISpriteDragMode;

};