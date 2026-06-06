import type { ISpriteDragMode } from '../../type/entity/sprite/ISpriteDragMode';
import { DragSprite } from './drag';
import { ISprite } from '../../type/entity/sprite';

/** サイズ */
export class SpriteDragMode implements ISpriteDragMode{

    protected dragSprite: DragSprite;
    /**
     * @internal
     * @param entity {ISprite}
     */
    constructor(sprite: ISprite){
        this.dragSprite = new DragSprite(sprite);
    }
    get dragging() : boolean {
        return this.dragSprite.dragging;
    }

    get draggable() : boolean {
        return this.dragSprite.draggable;
    }

    set draggable(draggable: boolean) {
        this.dragSprite.draggable = draggable;
    }

}
