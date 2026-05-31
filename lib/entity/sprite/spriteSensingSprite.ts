import { Sprite } from '../sprite';
import type { ISprite } from '@Type/sprite';
import type { ISpriteSensingSprite } from '@Type/sprite/ISpriteSensingSprite';
import type { ISpriteSensingDistance } from '@Type/sprite/ISpriteSensingDistance';
import { SpriteSensingDistance } from './spriteSensingDistance';
import { EntitySensingSprite } from '../entity/entitySensingSprite';
import { playground } from '../../vm/playground';
/**
 * Sprite Sensing(調べる) Sprite
 */
export class SpriteSensingSprite extends EntitySensingSprite implements ISpriteSensingSprite {
    private Distance: ISpriteSensingDistance;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        super(entity);
        this.Distance = new SpriteSensingDistance(entity);
    }
    isTouching(sprites: ISprite[]): boolean {
        const _sprites = sprites as unknown as Sprite[];
        return this.isTouchingTargetToTarget(_sprites);
    }
    /**
     * スプライトまでの距離
     * @param target 
     * @returns 
     */
    distance(target:ISprite) : number {
        return this.Distance.to(target)
    }
    /**
     * スプライトへの向き
     * @param target 
     */
    degree(target:ISprite): number {
        const _target:Sprite = target as unknown as Sprite;
        return this.degreeToTarget(_target);
    }
    /**
     * 自分に触れているスプライトを配列にして返す
     * @param targets 
     * @returns 
     */
    getTouching() : ISprite[] {
        const targetSprites = playground.getSprites();
        const entities = this.getTouchingTarget(targetSprites);
        return entities as unknown as ISprite[];
    }
};