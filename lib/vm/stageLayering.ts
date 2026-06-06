/**
 * レイアー
 */
export const StageLayering = {
    /** 背景 */
    BACKGROUND_LAYER : 'background',
    
    /** ビデオ */
    VIDEO_LAYER : 'video',
    
    /** ペン */
    PEN_LAYER : 'pen',

    /** スプライト */
    SPRITE_LAYER : 'sprite',

    /** テキスト */
    TEXT_LAYER : 'text',

    /** モニター */
    MONITOR_LAYER : 'monitor',


} as const;

// Order of layer groups relative to each other,
export const LAYER_GROUPS = function () {
    return [
        StageLayering.BACKGROUND_LAYER,
        StageLayering.VIDEO_LAYER,
        StageLayering.PEN_LAYER,
        StageLayering.SPRITE_LAYER,
        StageLayering.TEXT_LAYER,
        StageLayering.MONITOR_LAYER
    ];
}



