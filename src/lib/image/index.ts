import { ImageLoader } from "../loader/imageLoader";
import { Utils } from "../utils/utils";
import type { IImage } from "../../type/image";
import type { TextAttributes } from "../../type/text";
import { textToSvg } from "../text";

type ImageArgStringObject = { [key:string]:string };

/**
 * Image
 */
export class Image implements IImage{

    public static async createSvgImage(image: ImageArgStringObject, attributes: TextAttributes): Promise<IImage> {
        const _info = Utils.varNameValues(image);
        const _name = _info[0];
        const _text = _info[1];
        const textSvgData = await textToSvg.createSvgData(_text, attributes);
        const _image = {};
        _image[_name] = textSvgData;
        const textImage = new Image( _image );
        return textImage;
    }

    private _name: string;
    private _imagePath:string;
    private _img!:string;
    private _loadCompleted: boolean = false;
    private _skinId = -1;

    constructor( image: ImageArgStringObject ) {
        const info = Utils.varNameValues(image);
        this._name = info[0];
        this._imagePath = info[1];
    }
    async load() {
        //await Timer.wait(2); // For Debug
        if(this.loadCompleted === true) {
            // ロードはスプライトの Image.addメソッド内で実行される。
            // 複数のスプライトへ同一Imageインスタンスをaddしていることを
            // 想定し、すでにロード済であれば再ロードはしないとする。
            return;
        }
        const svgText = await ImageLoader.loader(this._imagePath);
        this._img = svgText;
        this._loadCompleted = true;
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._img;
    }

    get loadCompleted() : boolean {
        return this._loadCompleted;
    }

    get skinId() : number {
        return this._skinId;
    }
    set skinId(skinId: number) {
        this._skinId = skinId;
    }
}