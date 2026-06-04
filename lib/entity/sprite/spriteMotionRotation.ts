import { RotationStyle } from '@Type/entity/RotationStyle';
import type { ISprite } from '@Type/sprite';

export class SpriteMotionRotation {
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
     * {@link RotationStyle}
     */
    get style(): RotationStyle {
        return this.entity.Properties.rotationStyle;
    }
    /**
     * 回転方法
     * 
     * {@link RotationStyle}
     */
    set style(style: RotationStyle) {
        this.entity.Properties.rotationStyle = style;
    }
};