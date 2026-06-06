import type { RotationValue } from '../../type/entity/RotationStyle';
import type { ISprite } from '../../type/entity/sprite';
import type { ISpriteMotionRotation } from '../../type/entity/sprite/ISpriteMotionRotation';

/**
 * SpriteMotionRotation
 */
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