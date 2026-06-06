import { EntityImage } from "../entity/entityImage";
import type { ISprite } from "../../type/entity/sprite";

/**
 * Sprite Image(イメージ)
 */
export class SpriteImage extends EntityImage {

    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        super(entity);
    }

}