import { IFont } from "../../font";

/**
 * Sprite Font(イメージ)
 */
export interface ISpriteFont {

    add(fonts: IFont[]) : void;

    get names() : string [];
};