import { ScratchRenderProperties } from "@Type/render/IRenderWebGL";
import { EntityProperties } from "../entity/entityProperties";
import { Sprite } from "../sprite";
import { RotationStyle } from "@Type/entity/RotationStyle";

export class SpriteProperties extends EntityProperties {

    update() {
        const _entity = this.entity as Sprite;
        let _degree = this.degree;
        let _scale = {w: this.scale.w, h: this.scale.h};
        if( this._rotationStyle == RotationStyle.DONT_ROTATE) {
            _degree = 90;
        }else if( this._rotationStyle == RotationStyle.LEFT_RIGHT) {
            if( _degree < 0 || _degree > 180 ) {
                _degree = 90;
                _scale.w = - Math.abs( _scale.w );
            }else{
                _degree = 90;
                _scale.w = Math.abs( _scale.w );
            }
        }

        const prop: ScratchRenderProperties = {
            skinId: _entity.Costume.currentSkinId,
            position: [this.position.x, this.position.y],
            scale: [_scale.w, _scale.h],
            direction: _degree,
            visible: this.visible,
        };
        this.updateDrawableProperties(prop);
    }
}