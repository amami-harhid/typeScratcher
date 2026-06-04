import type { ISprite } from '@Type/sprite';
import type { ISpriteFont } from '@Type/sprite/ISpriteFont';

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