import { Cast } from '../../utils/cast';
import type { ISpriteSensingColor } from '../../type/sprite/ISpriteSensingColor';
import type { ISprite } from '../../type/sprite';
/**
 * Sprite Sensing(調べる) Color
 */
export class SpriteSensingColor implements ISpriteSensingColor {
    private entity: ISprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * 指定した色に触れたことを判定する
     * @param targetColor {string} - 色,先頭#,16進数
     * @returns 
     */
    isTouching(targetColor: string): boolean {
        if(targetColor.substring(0,1)=='#'){
            this.entity.update();
            const targetRGB = Cast.toRgbColorList(targetColor);
            const touch:boolean = this.entity.render.renderer.isTouchingColor(this.entity.drawableID, targetRGB);
            return touch;
        }
        return false;
    }
    /**
     * 指定した色(target)に自身の色(mask)が触れたことを判定する
     * @param mask {string} - 色,先頭#,16進数
     * @param target {string} - 色,先頭#,16進数
     * @returns 
     */
    isTouchingBy(mask: string, target: string):  boolean {
        if(mask.substring(0,1) == '#' && target.substring(0,1) == '#') {
            const maskRGB = Cast.toRgbColorList(mask);
            const targetRGB = Cast.toRgbColorList(target);
            const touch:boolean = this.entity.render.renderer.isTouchingColor(this.entity.drawableID, targetRGB, maskRGB);
            return touch;
        }
        return false;
    }
};