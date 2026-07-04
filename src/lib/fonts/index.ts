import { Utils } from "../utils/utils";
import { FontLoader } from "../loader/fontLoader";
import type { IFont } from "../../type/font";

type FontArgStringObject = { [key:string]:string };
/**
 * Font
 */
export class Font implements IFont{

    private _name: string;
    private _fontPath:string;
    private _fonts!:string[];
    private _loadCompleted: boolean = false;

    constructor( font: FontArgStringObject ) {
        const info = Utils.varNameValues(font);
        this._name = info[0];
        this._fontPath = info[1];
    }
    async load() {
        if(this.loadCompleted === true) {
            // ロードはスプライトの Font.addメソッド内で実行される。
            // 複数のスプライトへ同一Fontインスタンスをaddしていることを
            // 想定し、すでにロード済であれば再ロードはしないとする。
            return;
        }
        const fontData = await FontLoader.fontLoad(this._fontPath, this._name);
        this._fonts = fontData.data;
        this._loadCompleted = true;
    }
    get name() {
        return this._name;
    }
    get fonts() {
        return this._fonts;
    }
    get loadCompleted() : boolean {
        return this._loadCompleted;
    }
}