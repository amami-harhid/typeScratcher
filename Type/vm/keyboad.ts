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

export type TKEYBOARD_KEYS = typeof KEYBOARD_KEYS;