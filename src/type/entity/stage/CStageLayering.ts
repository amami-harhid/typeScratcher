/**
 * Layer
 */
export const StageLayering = {
    /** Background layer */
    BACKGROUND_LAYER : 'background',
    
    /** Video layer */
    VIDEO_LAYER : 'video',
    
    /** Pen layer */
    PEN_LAYER : 'pen',

    /** Sprite layer */
    SPRITE_LAYER : 'sprite',

    /** テキスト */
    TEXT_LAYER : 'text',

    /** モニター */
    MONITOR_LAYER : 'monitor',

    /** デバッグ */
    DEBUG_LAYER : 'debug',

} as const;

// Order of layer groups relative to each other,
export const LAYER_GROUPS = function () : StageLayeringValue[]{
    return [
        StageLayering.BACKGROUND_LAYER,
        StageLayering.VIDEO_LAYER,
        StageLayering.PEN_LAYER,
        StageLayering.SPRITE_LAYER,
        StageLayering.TEXT_LAYER,
        StageLayering.MONITOR_LAYER,
        StageLayering.DEBUG_LAYER,
    ];
}

export type TStageLayering = typeof StageLayering;
export type StageLayeringValue = typeof StageLayering[keyof TStageLayering];

