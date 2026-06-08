/**
 * キーボードキー
 */
export const KEYBOARD_KEYS = {
    SPACE : 'Space',
    LEFT : 'LeftArrow',
    UP : 'UpArrow',
    RIGHT : 'RightArrow',
    DOWN : 'DownArrow',
    ENTER : 'Enter',
    ESCAPE : 'Escape',
} as const;

export type KEYBOARD_KEYS_Type = typeof KEYBOARD_KEYS;