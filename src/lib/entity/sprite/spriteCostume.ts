import { Image } from '../../image';
import { Sprite } from '../sprite';
import type { ISpriteCostume } from '../../../type/entity/sprite/ISpriteCostume';
import type { IImage } from '../../../type/image';
import type { ISprite } from '../../../type/entity/sprite';

/** サイズ */
export class SpriteCostume implements ISpriteCostume {

    protected entity: ISprite;
    public currentConstumeNo: number = -1;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    add(images: IImage[]) : void{
        const _sprite = this.entity as Sprite;
        _sprite.$image.add(images);
        if(this.currentConstumeNo == -1){
            this.currentConstumeNo = 0;
        }
    }
    get names() : string[] {
        const _sprite = this.entity as Sprite;
        return _sprite.$image.names;
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
        const _sprite = this.entity as Sprite;
        const length = _sprite.$image.images.length;
        if( no < 0 || (length-1) < no ) return;
        if(this.currentConstumeNo != no ) {
            this.currentConstumeNo = no;
            const image = _sprite.$image.images[no];
            _sprite.render.renderer.updateDrawableProperties( _sprite.drawableID, {skinId: (image as Image).skinId});
        }
    }
    /**
     * 使用中のSkinId
     */
    get currentSkinId() : number {
        if(this.currentConstumeNo > -1) {
            const _sprite = this.entity as Sprite;
            if(_sprite.$image.images.length > this.currentConstumeNo){
                const image = _sprite.$image.images[this.currentConstumeNo];
                return (image as Image).skinId;
            } 
        }
        return -1;
    }
    /**
     * コスチューム名
     * ```ts
     *  // コスチューム名
     *  const name = this.Looks.Costume.name;
     * ```
     */
    get name(): string {
        const _sprite = this.entity as Sprite;
        const image = _sprite.$image.images[this.currentConstumeNo];
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
        const _sprite = this.entity as Sprite;
        let no = -1;
        for(const image of _sprite.$image.images) {
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
        const _sprite = this.entity as Sprite;
        const length = _sprite.$image.images.length;
        if( this.currentConstumeNo < 0 || (length-1) < this.currentConstumeNo ) {
            this.currentConstumeNo = 0;
        }else{
            this.currentConstumeNo += 1;
            this.currentConstumeNo = this.currentConstumeNo % length;
        }
    }

}
