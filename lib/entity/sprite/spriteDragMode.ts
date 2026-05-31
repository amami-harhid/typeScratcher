import type { ISpriteDragMode } from '@Type/sprite/ISpriteDragMode';
import { DragSprite } from '../drag/dragSprite';
import { Sprite } from '../sprite';

/** サイズ */
export class SpriteDragMode implements ISpriteDragMode{

    private dragSprite: DragSprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(sprite: Sprite){
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
