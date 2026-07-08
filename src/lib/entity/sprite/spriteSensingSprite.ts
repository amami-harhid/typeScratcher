import { SpriteSensingDistance } from './spriteSensingDistance';
import { EntitySensingSprite } from '../entity/entitySensingSprite';
import { engine, Engine } from '../../engine';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteSensingSprite } from '../../../type/entity/sprite/ISpriteSensingSprite';
import type { ISpriteSensingDistance } from '../../../type/entity/sprite/ISpriteSensingDistance';
import { Sprite } from '.';
/**
 * Sprite Sensing(調べる) Sprite
 */
export class SpriteSensingSprite extends EntitySensingSprite implements ISpriteSensingSprite {
    private Distance: ISpriteSensingDistance;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        super(entity);
        this.Distance = new SpriteSensingDistance(entity);
    }
    isTouching(sprites: ISprite[], includeClone: boolean = true): boolean {
        const _entity = this.entity as Sprite;
        _entity.Properties.update(); 
        //_entity.render.renderer.updateDrawableScale(_entity.drawableID, [_entity.Properties.scale.w, _entity.Properties.scale.h]);
        return this.isTouchingTargetToTarget(sprites, includeClone);
    }
    /**
     * スプライトまでの距離
     * @param target 
     * @returns 
     */
    distance(target:ISprite) : number {
        const _entity = this.entity as Sprite;
        _entity.render.renderer.updateDrawableScale(_entity.drawableID, [_entity.Properties.scale.w, _entity.Properties.scale.h]);
        return this.Distance.to(target)
    }
    /**
     * スプライトへの向き
     * @param target 
     */
    degree(target:ISprite): number {
        const _entity = this.entity as Sprite;
        _entity.render.renderer.updateDrawableScale(_entity.drawableID, [_entity.Properties.scale.w, _entity.Properties.scale.h]);
        const _target:ISprite = target as unknown as ISprite;
        return this.degreeToTarget(_target);
    }
    /**
     * 自分に触れているスプライトを配列にして返す
     * @param targets 
     * @returns 
     */
    getTouching(targets?: ISprite[]) : ISprite[] {
        const _entity = this.entity as Sprite;
        _entity.render.renderer.updateDrawableScale(_entity.drawableID, [_entity.Properties.scale.w, _entity.Properties.scale.h]);
        if( targets ) {
            const targetSprites: ISprite[] = [];
            for(const _target of targets){
                const __target = _target as Sprite;
                targetSprites.push(_target);
                targetSprites.push(...__target.clones);
            }
            const entities = this.getTouchingTarget(targetSprites);
            return entities;

        }else{
            const targetSprites = (engine as Engine).getSprites();
            const entities = this.getTouchingTarget(targetSprites);
            return entities;
        }
    }
};