/**
 * Stage Font
 * ---
 * ステージのフォント
 */
export interface IStageFont {

    add(fontName: string) : void;

    get names() : string [];
};