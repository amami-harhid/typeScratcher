import type { IStageBackdrop } from '@Type/stage/IStageBackdrop';
import { Stage } from '../stage';
import { Image } from '../../image/image';

/** サイズ */
export class StageBackdrop implements IStageBackdrop {

    private entity: Stage;
    public currentBackdropNo: number = -1;
    private imageArr: Image[] = [];
    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:Stage){
        this.entity = entity;
    }
    add(image: Image) {
        this.imageArr.push(image);
        if(this.currentBackdropNo == -1){
            this.currentBackdropNo = 0;
        }
    }
    /**
     * 背景名の配列
     */
    get names() : string[] {
        return this.entity.Image.names;
    }
    /**
     * 背景番号
     * ```ts
     *  // 背景番号
     *  const no = this.Looks.Backdrop.no;
     * ```
     */
    get no(): number {
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
        const length = this.entity.Image.images.length;
        if( no < 0 || (length-1) < no ) return;
        if(this.currentBackdropNo != no ) {
            this.currentBackdropNo = no;
            const image = this.entity.Image.images[no];
            this.entity.render.renderer.updateDrawableProperties( this.entity.drawableID, {skinId: image.skinId});
        }
    }
    /**
     * 使用中のSkinId
     */
    get currentSkinId() : number {
        if(this.currentBackdropNo == -1) return -1;
        const image = this.imageArr[this.currentBackdropNo];
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
        const image = this.imageArr[this.currentBackdropNo];
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
        let no = -1;
        for(const image of this.imageArr) {
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
    async switchAndWait(name: string) : Promise<void>{
        for(const image of this.imageArr) {
            if( image.name == name) {

                
                break;
            }
        }        
    }

    /**
     * 次の背景にする
     * ```ts
     *  this.Looks.Backdrop.nextBackdrop();
     * ```
     */
    next() : void {
        const length = this.entity.Image.images.length;
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

    }
    /**
     * 前の背景にする
     */
    previous() : void {

    }
    /**
     * 前の背景にして待つ。
     */
    async previousAndWait() : Promise<void> {

    }
    /**
     * どれかの背景にする
     */
    random(): void {

    }
    /**
     * どれかの背景にして待つ
     */
    async randomAndWait() : Promise<void>{

    }
}
