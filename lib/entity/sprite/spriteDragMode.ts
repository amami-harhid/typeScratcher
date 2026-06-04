import type { ISpriteDragMode } from '@Type/sprite/ISpriteDragMode';
import { DragSprite } from '../drag/dragSprite';
import { Sprite } from '../sprite';
import { ISprite } from '@Type/sprite';

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
