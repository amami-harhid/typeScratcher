import { Sprite } from '.';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteFont } from '../../../type/entity/sprite/ISpriteFont';
import { IFont } from 'src/type/font';

/** サイズ */
export class SpriteFont implements ISpriteFont {

    protected entity: ISprite;
    public currentConstumeNo: number = -1;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    add(fonts: IFont[]) : void{
        const _sprite = this.entity as Sprite;        
        for(const fnt of fonts){
            _sprite.$fonts.push(fnt);
        }
    }
    get names() : string[] {
        const _sprite = this.entity as Sprite;
        const _names:string[] = [];
        for(const fnt of _sprite.$fonts) {
            _names.push(fnt.name);
        }
        return _names;
    }
}
