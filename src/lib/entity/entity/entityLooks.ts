import { Entity } from '.';
import { EntityEffect } from './entityEffect';
import { EntityImage } from './entityImage';
import type { IEntity } from '../../../type/entity/entity';
import type { IEntityEffect } from '../../../type/entity/entity/IEntityEffect';
import type { IEntityLooks } from '../../../type/entity/entity/IEntityLooks';

/** メッセージ送受信 */
export class EntityLooks implements IEntityLooks{

    protected entity: IEntity;
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
        const _entity = this.entity as Entity;
        const _image = _entity.$image as EntityImage;
        return _image.effect;
    }

}