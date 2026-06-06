import { MathUtil } from "../../utils/math-util";
import type { IEntity } from "../../type/entity/entity";
import type { IEntitySensingSprite } from "../../type/entity/entity/IEntitySensingSprite";
import type { ISprite } from "../../type/entity/sprite";

/**
 * EntitySensingSprite
 */
export class EntitySensingSprite implements IEntitySensingSprite {

    protected entity: IEntity;

    constructor(entity: IEntity) {
        this.entity = entity;
    }
    /**
     * 相手スプライトのどれかに衝突しているか否かを検知する
     * @param targets 
     * @returns 
     */
    protected isTouchingTargetToTarget(targets: ISprite[]) {
        const targetIds: number[] = [];
        for(const t of targets){
            if(t.Properties.visible === true) {
                const targetDrawableID = t.drawableID;
                targetIds.push(targetDrawableID);
            }
        }
        if(targetIds.length>0){
            const me:ISprite = this.entity as ISprite;
            try{
                const touching = me.render.renderer.isTouchingDrawables(me.drawableID, targetIds);
                return touching;
            }catch(e){
                console.error(e);
            }
        }
        return false;
    }

    degreeToTarget(target: ISprite) {
        const me = this.entity as ISprite;
        let dx = target.Properties.position.x - me.Properties.position.x;
        let dy = target.Properties.position.y - me.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg(Math.atan2(dy, dx));
        if(direction > 180){
            direction -= 360;
        }
        return direction;
    }

    getTouchingTarget(targets: ISprite[]) : ISprite[]{
        const touchings: ISprite[] = [];
        const me = this.entity as ISprite;
        for(const t of targets){
            if(me.id != t.id) {
                const touch = this.isTouchingTargetToTarget([t]);
                if( touch === true ) {
                    touchings.push(t);
                }
            }
        }
        return touchings;
    }

}