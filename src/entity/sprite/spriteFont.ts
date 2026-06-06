import type { ISprite } from '../../type/entity/sprite';
import type { ISpriteFont } from '../../type/entity/sprite/ISpriteFont';

export class SpriteFont implements ISpriteFont {
    protected entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }

    add(fontName: string) : void{

    }

    get names() : string[] {
        return [];
    }
};