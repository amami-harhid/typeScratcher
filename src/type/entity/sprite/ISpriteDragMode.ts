/** 
 * DragMode 
 */
export interface ISpriteDragMode {
    /**
     * Dragging
     * ---
     * ドラッグ中のとき`true`.
     */
    get dragging(): boolean;

    /**
     * Draggable
     * ---
     * ドラッグ可能のとき`true`.
     */
    get draggable(): boolean;

    /**
     * Draggable
     * ---
     * ドラッグ可能のとき`true`.
     */
    set draggable(draggable: boolean);
}
