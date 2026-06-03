import { ImageBank } from '../../image/imageBank';
import { Image } from '../../image/image';
import { Entity } from '../entity';
import type { IImage } from '@Type/image/IImage';

/** メッセージ送受信 */
export class EntityImage {

    private entity: Entity;
    private _images: Image[] = [];
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:Entity){
        this.entity = entity;
    }

    add( images: Image[]): void {
        for(const img of images) {
            ImageBank.add(img);
            this._images.push(img);
        }
    }
    get images(): Image[] {
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