import { ImageBank } from '../../image/imageBank';
import type { IImage } from '@Type/image/IImage';
import type { IEntity } from '@Type/entity/IEntity';

/** メッセージ送受信 */
export class EntityImage {

    protected entity: IEntity;
    private _images: IImage[] = [];
    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
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
            if( _img.loadCompleted === false ){
                return false;
            }
        }
        return true;
    }
}