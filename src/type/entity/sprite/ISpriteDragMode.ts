/** 
 * DragMode 
 */
export interface ISpriteDragMode {
    /**
     * Dragging
     */
    get dragging(): boolean;

    /**
     * Draggable
     */
    get draggable(): boolean;

    /**
     * Draggable
     */
    set draggable(draggable: boolean);
}
