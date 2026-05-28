import { Image } from "../../image/image";
import { EntityImage } from "../entity/entityImage";
import { Sprite } from "../sprite";

/**
 * Sprite Image(イメージ)
 */
export class SpriteImage extends EntityImage {

    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:Sprite){
        super(entity);
    }

}