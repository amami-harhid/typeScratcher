import { Sprite } from ".";
import { ISprite } from "../../../type/entity/sprite";

export class SpriteLooksSizeScale {
    private entity: ISprite;
    constructor(entity: ISprite) {
        this.entity = entity;
    }

    get w()  : number{

        return (this.entity as Sprite).Properties.scale.w;
    }
    set w( w: number) {

        (this.entity as Sprite).Properties.scale.w = w;
    }
    get h()  : number{

        return (this.entity as Sprite).Properties.scale.h;
    }
    set h( h: number) {

        (this.entity as Sprite).Properties.scale.h = h;
    }

}