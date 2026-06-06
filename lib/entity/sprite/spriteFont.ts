import type { ISprite } from '../../type/sprite';
import type { ISpriteFont } from '../../type/sprite/ISpriteFont';

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