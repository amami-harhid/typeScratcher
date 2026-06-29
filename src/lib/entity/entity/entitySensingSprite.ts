import { MathUtil } from "../../utils/math-util";
import { Sprite } from "../sprite";
import type { IEntity } from "../../../type/entity/entity";
import type { IEntitySensingSprite } from "../../../type/entity/entity/IEntitySensingSprite";
import type { ISprite } from "../../../type/entity/sprite";

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
     * 第二パラメータがtrueのときは クローンを含めて検査する
     * @param targets 
     * @param includesClone
     * @returns 
     */
    protected isTouchingTargetToTarget(targets: ISprite[], includesClone:boolean = false) {
        const targetIds: number[] = [];
        for(const t of targets){
            const _s = t as Sprite;
            if(_s.Properties.visible === true) {
                const targetDrawableID = _s.drawableID;
                targetIds.push(targetDrawableID);
            }
            if(includesClone === true && _s.isClone === false){
                for(const _clone of _s.clones) {
                    const _cloneSprite = _clone as Sprite;
                    if(_cloneSprite.Properties.visible === true){
                        targetIds.push(_cloneSprite.drawableID);
                    }
                }
            }
        }
        if(targetIds.length>0){
            const me:Sprite = this.entity as Sprite;
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
        const me = this.entity as Sprite;
        const _target = target as Sprite;
        let dx = _target.Properties.position.x - me.Properties.position.x;
        let dy = _target.Properties.position.y - me.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg(Math.atan2(dy, dx));
        if(direction > 180){
            direction -= 360;
        }
        return direction;
    }

    getTouchingTarget(targets: ISprite[]) : ISprite[]{
        const touchings: ISprite[] = [];
        const me = this.entity as Sprite;
        for(const t of targets){
            const _t = t as Sprite;
            if(me.id != _t.id) {
                const touch = this.isTouchingTargetToTarget([t]);
                if( touch === true ) {
                    touchings.push(t);
                }
            }
        }
        return touchings;
    }

}