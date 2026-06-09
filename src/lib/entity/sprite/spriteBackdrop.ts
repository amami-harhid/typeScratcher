import { engine, Engine } from '../../engine';
import { Stage } from '../stage';
import type { ISpriteBackdrop } from '../../../type/entity/sprite/ISpriteBackdrop';
import type { ISprite } from '../../../type/entity/sprite';

/** 
 * 背景 
 **/
export class SpriteBackdrop implements ISpriteBackdrop {

    protected entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.backdrop.no;
     * ```
     */
    get no(): number {
        const _stage = (engine as Engine).getStage() as Stage;
        if(_stage) {
            return _stage.Backdrop.no;
        }
        return -1;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.backdrop.no = 1;
     * ```
     */
    set no(no:number) {
        const _stage = (engine as Engine).getStage() as Stage;
        if(_stage) {
            _stage.Backdrop.no = no;
        }        
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string {
        const _stage = (engine as Engine).getStage() as Stage;
        return _stage.Backdrop.name;
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        const _stage = (engine as Engine).getStage() as Stage;
        _stage.Backdrop.name = name;
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        const _stage = (engine as Engine).getStage() as Stage;
        _stage.Backdrop.next();
    }
    /**
     * 前の背景にする
     */
    previous(): void {
        const _stage = (engine as Engine).getStage() as Stage;
        _stage.Backdrop.previous();
    }
    /**
     * どれかの背景にする
     */
    random(): void {
        const _stage = (engine as Engine).getStage() as Stage;
        _stage.Backdrop.random();
    }
}
