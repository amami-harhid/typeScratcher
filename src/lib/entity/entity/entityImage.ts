import { EntityEffect } from './entityEffect';
import { Image } from '../../image';
import { ImageBank } from '../../image/imageBank';
import type { IImage } from '../../../type/image';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityEffect } from '../../../type/entity/entity/IEntityEffect';
import type { IEntityImage } from '../../../type/entity/entity/IEntityImage';

/** メッセージ送受信 */
export class EntityImage implements IEntityImage{

    protected entity: IEntity;
    private _images: IImage[] = [];
    protected _effects: IEntityEffect;
    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._effects = new EntityEffect(entity); 
    }
    
    get effect(): IEntityEffect {
        return this._effects;
    }

    add( images: IImage[]): void {
        for(const img of images) {
            ImageBank.add(img);
            this._images.push(img);
        }
    }
    get images(): IImage[] {
        return this._images;
    }
    get names(): string[] {
        const _names: string[] = [];
        for(const img of this._images) {
            _names.push(img.name);
        }
        return _names;
    }
    imageLoadCompleteAll() : boolean {
        for( const _img of this._images){
            if( (_img as Image).loadCompleted === false ){
                return false;
            }
        }
        return true;
    }
}