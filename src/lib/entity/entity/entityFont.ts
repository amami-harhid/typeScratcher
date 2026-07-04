import { Entity } from '.';
import { Font } from '../../fonts';
import { Image } from '../../image';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityFont } from '../../../type/entity/entity/IEntityFont';
import type { IFont } from '../../../type/font';

/** Entity フォント */
export class EntityFont implements IEntityFont{

    protected entity: IEntity;
    private _fonts: IFont[] = [];
    /**
     * @internal
     * @param entity {IEntity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
    }
    
    add( fonts: IFont[]): void {
        for(const font of fonts) {
            this._fonts.push(font);
        }
    }
    get fonts(): IFont[] {
        return this._fonts;
    }
    get names(): string[] {
        const _names: string[] = [];
        for(const fnt of this._fonts) {
            _names.push(fnt.name);
        }
        return _names;
    }
    imageLoadCompleteAll() : boolean {
        for( const _fnt of this._fonts){
            if( (_fnt as Font).loadCompleted === false ){
                return false;
            }
        }
        return true;
    }
}