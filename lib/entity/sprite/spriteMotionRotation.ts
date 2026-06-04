import type { RotationValue } from '@Type/entity/RotationStyle';
import type { ISprite } from '@Type/sprite';
import type { ISpriteMotionRotation } from '@Type/sprite/ISpriteMotionRotation';

export class SpriteMotionRotation implements ISpriteMotionRotation{
    private entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * 回転方法
     * 
     * {@link RotationValue}
     */
    get style(): RotationValue {
        return this.entity.Properties.rotationStyle;
    }
    /**
     * 回転方法
     * 
     * {@link RotationValue}
     */
    set style(style: RotationValue) {
        this.entity.Properties.rotationStyle = style;
    }
};