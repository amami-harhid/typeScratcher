import { Image } from '../../image';
import { Sprite } from '.';
import { SpriteCostume } from './spriteCostume';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteLooksCostume } from '../../../type/entity/sprite/ISpriteLooksCostume';
import { IImage } from 'src/type/image';

/** サイズ */
export class SpriteLooksCostume implements ISpriteLooksCostume {

    protected entity: ISprite;
    public currentConstumeNo: number = -1;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * コスチューム番号
     * ```ts
     *  // コスチューム番号
     *  const no = this.Looks.Costume.no;
     * ```
     */
    get no(): number {
        const _entityCostume = this.entity.Costume;
        return (_entityCostume as SpriteCostume).currentConstumeNo;
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
        const _entityCostume = this.entity.Costume as SpriteCostume;
        if(_entityCostume.currentConstumeNo != no ) {
            _entityCostume.currentConstumeNo = no;
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
            const _entityCostume = this.entity.Costume as SpriteCostume;
            if(_sprite.$image.images.length > _entityCostume.currentConstumeNo){
                const image = _sprite.$image.images[_entityCostume.currentConstumeNo];
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
        const _entityCostume = this.entity.Costume as SpriteCostume;
        const image = _sprite.$image.images[_entityCostume.currentConstumeNo];
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
        const _entityCostume = this.entity.Costume as SpriteCostume;
        let no = -1;
        for(const image of _sprite.$image.images) {
            no += 1;
            if( image.name == name) {
                _entityCostume.no = no;
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
        const _entityCostume = this.entity.Costume as SpriteCostume;
        if( _entityCostume.currentConstumeNo < 0 || (length-1) < _entityCostume.currentConstumeNo ) {
            _entityCostume.currentConstumeNo = 0;
        }else{
            _entityCostume.currentConstumeNo += 1;
            _entityCostume.currentConstumeNo = _entityCostume.currentConstumeNo % length;
        }
    }

    switch(costume: IImage): void {
        this.name = costume.name;
    }

}
