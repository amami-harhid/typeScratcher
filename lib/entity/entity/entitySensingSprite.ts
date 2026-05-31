import { MathUtil } from "../../utils/math-util";
import { Entity } from "../entity";
import { Sprite } from "../sprite";

export class EntitySensingSprite {

    protected entity: Entity;

    constructor(entity: Entity) {
        this.entity = entity;
    }
    /**
     * 相手スプライトのどれかに衝突しているか否かを検知する
     * @param targets 
     * @returns 
     */
    protected isTouchingTargetToTarget(targets: Sprite[]) {
        const targetIds: number[] = [];
        for(const t of targets){
            
            if(t.Properties.visible === true) {
                const targetDrawableID = t.drawableID;
                targetIds.push(targetDrawableID);
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

    degreeToTarget(target: Sprite) {
        const me = this.entity as Sprite;
        let dx = target.Properties.position.x - me.Properties.position.x;
        let dy = target.Properties.position.y - me.Properties.position.y;
        let direction = 90 - MathUtil.radToDeg(Math.atan2(dy, dx));
        if(direction > 180){
            direction -= 360;
        }
        return direction;
    }

    getTouchingTarget(targets: Sprite[]) : Sprite[]{
        const touchings: Sprite[] = [];
        const me = this.entity as Sprite;
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