/**
 * キーボードキー
 */
export const KEYBOARD_KEYS = {
    /** Any keys */
    ANY: 'any',
    /** Space key */
    SPACE : 'Space',
    /** Arrow Left key */
    LEFT : 'LeftArrow',
    /** Arrow up key */
    UP : 'UpArrow',
    /** Arrow right key */
    RIGHT : 'RightArrow',
    /** Arrow down key */
    DOWN : 'DownArrow',
    /** Enter key */
    ENTER : 'Enter',
    /** Escape key */
    ESCAPE : 'Escape',
} as const;

export type KEYBOARD_KEYS_Type = typeof KEYBOARD_KEYS;