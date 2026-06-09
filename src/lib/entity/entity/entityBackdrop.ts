import { Engine, engine } from '../../engine';
import { Entity } from '.';
import { EntityEvent, type BACKDROP_EVENT_ELEMENT } from './entityEvent';
import { Stage } from '../stage';
import { ThreadStatus } from '../../../type/engine/thread/threads';
import { Timer } from '../../utils/timer';
import { Utils } from '../../utils/utils';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityBackdrop } from '../../../type/entity/entity/IEntityBackdrop';
import type { IImage } from '../../../type/image';

/** サイズ */
export class EntityBackdrop implements IEntityBackdrop {

    protected entity: Entity;
    public currentBackdropNo: number = -1;
    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:IEntity){
        this.entity = entity as Entity;
    }
    add(images: IImage[]) {
        const _entity = this.entity as Entity;
        if( _entity.isSprite === false ) {
            // ステージの場合
            _entity.$image.add(images);
            if(this.currentBackdropNo == -1){
                this.currentBackdropNo = 0;
            }
        }
    }
    /**
     * 背景名の配列
     */
    get names() : string[] {
        const _entity = this.entity as Entity;
        return _entity.$image.names;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
        const _entity = this.entity as Entity;
        return this.currentBackdropNo;    
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  this.Looks.Backdrop.no = 1;
     * ```
     */
    set no(no:number) {
        const _entity = this.entity as Entity;
        const length = _entity.$image.images.length;
        if( no < 0 || (length-1) < no ) return;
        if(this.currentBackdropNo != no ) {
            this.currentBackdropNo = no;
            const image = _entity.$image.images[no];
            this.entity.render.renderer.updateDrawableProperties( this.entity.drawableID, {skinId: image.skinId});
        }
    }
    /**
     * 使用中のSkinId
     */
    get currentSkinId() : number {
        if(this.currentBackdropNo == -1) return -1;
        const _entity = this.entity as Entity;
        const image = _entity.$image.images[this.currentBackdropNo];
        return image.skinId;
    }    
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  const name = this.Looks.Backdrop.name;
     * ```
     */
    get name(): string {
        const _entity = this.entity as Entity;
        const image = _entity.$image.images[this.currentBackdropNo];
        return image.name;
    }
    /**
     * 背景名
     * ```ts
     *  // 背景名
     *  this.Looks.Backdrop.name = "backdrop";
     * ```
     */
    set name(name:string) {
        const _entity = this.entity as Entity;
        let no = -1;
        for(const image of _entity.$image.images) {
            no += 1;
            if( image.name == name) {
                this.no = no;
                break;
            }
        }
    }
    /**
     * 背景を切り替えて待つ
     * @param name 
     */
    async switchAndWait(backdropName: string) : Promise<void>{
        const _entity = this.entity as Entity;
        for(const image of _entity.$image.images) {
            if( image.name == backdropName) {
                this.name = backdropName;
                await this.untilBackdropEventDone(backdropName);                
                break;
            }
        }        
    }
    protected async untilBackdropEventDone(backdropName: string) : Promise<void> {
        const element = this.getBackdropEventElement(backdropName);
        if(element) {
            return new Promise<void>(async resolve=>{
                if(element.threadArr.length > 0){
                    (engine as Engine).runtime.scratchEvent.emit(backdropName);
                    for(;;){
                        let _allDone = true;
                        for(const f of element.threadArr){
                            if(f.status != ThreadStatus.COMPLETED){
                                // 1個でもCOMPLETEDでなければ False
                                _allDone = false;
                            }
                        }
                        if(_allDone === true) {
                            resolve();
                            break;
                        }
                        await Timer.wait(0.1/1000);                
                    }
                }else{
                    // 何もせずに終わる
                    resolve();
                }            
            });
        }
    }
    protected getBackdropEventElement(backdropName: string): BACKDROP_EVENT_ELEMENT | undefined {
        for(const element of EntityEvent.backdropEventFuncArray) {
            if(element.backdropName == backdropName) {
                return element;
            }
        }
        return undefined;
    }
    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        const _entity = this.entity as Entity;
        const length = _entity.$image.images.length;
        if( this.currentBackdropNo < 0 || (length-1) < this.currentBackdropNo ) {
            this.currentBackdropNo = 0;
        }else{
            this.currentBackdropNo += 1;
            this.currentBackdropNo = this.currentBackdropNo % length;
        }
    }
    /**
     * 次の背景にして待つ
     */
    async nextAndWait(): Promise<void> {
        this.next();
        const backdropName = this.name;
        await this.untilBackdropEventDone(backdropName);
    }
    /**
     * 前の背景にする
     */
    previous() : void {
        const _entity = this.entity as Entity;
        const length = _entity.$image.images.length;
        const currentBackdropNo = this.currentBackdropNo;
        if( 0 < currentBackdropNo  && currentBackdropNo < length ) {
            this.currentBackdropNo = currentBackdropNo - 1;
        }else{
            this.currentBackdropNo = 0;
        }
    }

    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {
        this.previous();
        const backdropName = this.name;
        await this.untilBackdropEventDone(backdropName);
    }
    /**
     * どれかの背景にする
     */
    random(): void {
        const _entity = this.entity as Stage;
        const length = _entity.$image.images.length;
        const backgroundNo = Utils.randomizeInRange(0, length-1);
        this.no = backgroundNo;
        
    }
    /**
     * どれかの背景にして待つ
     */
    async randomAndWait() : Promise<void>{
        this.random();
        const backdropName = this.name;
        await this.untilBackdropEventDone(backdropName);
    }
}
