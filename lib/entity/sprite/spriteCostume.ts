import { Sprite } from '../sprite';
import type { ISpriteCostume } from '@Type/sprite/ISpriteCostume';
import type { IImage } from '@Type/image/IImage';
import type { ISprite } from '@Type/sprite';
import { Image } from '@Lib/image/image';

/** サイズ */
export class SpriteCostume implements ISpriteCostume {

    private entity: Sprite;
    public currentConstumeNo: number = -1;
    private imageArr: Image[] = [];
    /**
     * @internal
     * @param entity {Stage}
     */
    constructor(entity:Sprite){
        this.entity = entity;
    }
    add(image: Image) {
        this.imageArr.push(image);
        if(this.currentConstumeNo == -1){
            this.currentConstumeNo = 0;
        }
    }
    get names() : string[] {
        return this.entity.Image.names;
    }

    /**
     * コスチューム番号
     * ```ts
     *  // コスチューム番号
     *  const no = this.Looks.Costume.no;
     * ```
     */
    get no(): number {
        return this.currentConstumeNo;
    }
    /**
     * コスチューム番号
     * ```ts
     *  // コスチューム番号
     *  this.Looks.Costume.no = 1;
     * ```
     */
    set no(no:number) {
        const length = this.entity.Image.images.length;
        if( no < 0 || (length-1) < no ) return;
        if(this.currentConstumeNo != no ) {
            this.currentConstumeNo = no;
            const image = this.entity.Image.images[no];
            this.entity.render.renderer.updateDrawableProperties( this.entity.drawableID, {skinId: image.skinId});
        }
    }
    /**
     * 使用中のSkinId
     */
    get currentSkinId() : number {
        if(this.currentConstumeNo == -1) return -1;
        const image = this.imageArr[this.currentConstumeNo];
        return image.skinId;
    }
    /**
     * コスチューム名
     * ```ts
     *  // コスチューム名
     *  const name = this.Looks.Costume.name;
     * ```
     */
    get name(): string {
        const image = this.imageArr[this.currentConstumeNo];
        return image.name;
    }
    /**
     * コスチューム名
     * ```ts
     *  // コスチューム名
     *  this.Looks.Costume.name = "Cat01";
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
     * 次のコスチュームにする
     * ```ts
     *  this.Looks.Costume.next();
     * ``
     */
    next(): void {
        const length = this.entity.Image.images.length;
        if( this.currentConstumeNo < 0 || (length-1) < this.currentConstumeNo ) {
            this.currentConstumeNo = 0;
        }else{
            this.currentConstumeNo += 1;
            this.currentConstumeNo = this.currentConstumeNo % length;
        }
    }

}
