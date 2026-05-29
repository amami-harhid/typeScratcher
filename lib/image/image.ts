/**
 * Image
 */
import { ImageLoader } from "../loader/imageLoader";
import { Utils } from "../utils/utils";
type ImageArgStringObject = { [key:string]:string };
export class Image {
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
        const svgText = await ImageLoader._svgText(this._imagePath);
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