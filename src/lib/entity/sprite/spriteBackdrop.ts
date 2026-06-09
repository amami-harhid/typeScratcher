import { Engine, engine } from '../../engine';
import { Entity } from '../entity';
import { EntityBackdrop } from '../entity/entityBackdrop';
import { Stage } from '../stage';
import { Utils } from '../../utils/utils';
import type { ISpriteBackdrop } from '../../../type/entity/sprite/ISpriteBackdrop';
import type { ISprite } from '../../../type/entity/sprite';

/** 
 * 背景 
 **/
export class SpriteBackdrop extends EntityBackdrop implements ISpriteBackdrop {

    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }
    /**
     * 背景名の配列
     */
    get names() : string[] {
        const _entity = (engine as Engine).getStage() as Stage
        if( _entity ) {
            return _entity.Backdrop.names;
        }
        return [];
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
        const _entity = (engine as Engine).getStage() as Stage
        if(_entity) {
            return _entity.Backdrop.no;    
        }
        return -1;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.Backdrop.no = 1;
     * ```
     */
    set no(no:number) {
        const _entity = (engine as Engine).getStage() as Stage
        if( _entity ) {
            _entity.Backdrop.no = no;
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
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity){
            return _entity.Backdrop.name;
        }
        return '';
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity){
            _entity.Backdrop.name = name;
        }
    }
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    async switchAndWait(backdropName: string) : Promise<void>{
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity){
            await _entity.Backdrop.switchAndWait(backdropName);
        }
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity){
            _entity.Backdrop.next();
        }
    }
    /**
     * 次の背景にして待つ
     */
    async nextAndWait(): Promise<void> {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity) {
            await _entity.Backdrop.nextAndWait();
        }
    }
    /**
     * 前の背景にする
     */
    previous() : void {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity) {
            _entity.Backdrop.previous();
        }
    }

    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity) {
            await _entity.Backdrop.previousAndWait();
        }
    }
    /**
     * どれかの背景にする
     */
    random(): void {
        const _entity = (engine as Engine).getStage() as Stage;
        if(_entity) {
            _entity.Backdrop.random();
        }
        
    }
    /**
     * どれかの背景にして待つ
     */
    async randomAndWait() : Promise<void>{
        
        const backdropName = this.name;
        await this.untilBackdropEventDone(backdropName);
    }

}
