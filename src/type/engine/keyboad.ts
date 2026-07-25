/**
 * キーボードキー
 */
export const KEYBOARD_KEYS = {
    /** 
     * Any keys
     * ---
     * 任意のキー
     */
    ANY: 'any',
    /** 
     * Space key
     * ---
     * スペースキー 
     */
    SPACE : 'Space',
    /** 
     * Arrow Left key
     * ---
     * 左向き矢印キー 
     */
    LEFT : 'LeftArrow',
    /** 
     * Arrow up key 
     * ---
     * 上向き矢印キー 
     */
    UP : 'UpArrow',
    /** 
     * Arrow right key 
     * ---
     * 右向き矢印キー 
     */
    RIGHT : 'RightArrow',
    /** 
     * Arrow down key 
     * ---
     * 下向き矢印キー 
     */
    DOWN : 'DownArrow',
    /** 
     * Enter key 
     * ---
     * エンターキー 
     */
    ENTER : 'Enter',
    /** 
     * Escape key 
     * ---
     * エスケープキー 
     */
    ESCAPE : 'Escape',
} as const;

export type KEYBOARD_KEYS_Type = typeof KEYBOARD_KEYS;