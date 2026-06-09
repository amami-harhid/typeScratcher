import { EntityProperties } from "../entity/entityProperties";
import { Rotation } from "../../../type/entity/RotationStyle";
import { SpriteImage } from "./spriteImage";
import type { ISprite } from "../../../type/entity/sprite";
import type { ScratchRenderProperties } from "../../../type/render/IRenderWebGL";
import { Sprite } from ".";
/**
 * SpriteProperties
 */
export class SpriteProperties extends EntityProperties {
    constructor(sprite: ISprite){
        super(sprite);
    }
    update() {
        const entity = this.entity as ISprite;
        let _degree = this.degree;
        let _scale = {w: this.scale.w, h: this.scale.h};
        if( this._rotation == Rotation.DONT_ROTATE) {
            _degree = 90;
        }else if( this._rotation == Rotation.LEFT_RIGHT) {
            if( _degree < 0 || _degree > 180 ) {
                _degree = 90;
                _scale.w = - Math.abs( _scale.w );
            }else{
                _degree = 90;
                _scale.w = Math.abs( _scale.w );
            }
        }
        const _sprite = this.entity as Sprite;
        const _spriteImage = _sprite.$image as SpriteImage;
        const effect = _spriteImage.effect.get();
        const prop: ScratchRenderProperties = {
            skinId: entity.Costume.currentSkinId,
            position: [this.position.x, this.position.y],
            scale: [_scale.w, _scale.h],
            direction: _degree,
            visible: this.visible,
        };
        this.updateDrawableProperties(prop);
    }
}