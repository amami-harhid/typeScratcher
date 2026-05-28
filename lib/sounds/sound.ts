/**
 * Sound
 */
import { SoundLoader } from "../loader/soundLoader";
import { playground } from "../vm/playground";
export class Sound {
    private _name: string;
    private _soundPath:string;
    private _data!:Uint8Array<ArrayBuffer>;
    private _loadCompleted: boolean = false;

    constructor(name: string, soundPath:string) {
        this._name = name;
        this._soundPath = soundPath;
    }
    async load() {
        if(this.loadCompleted === true) {
            // ロードはスプライトの Image.addメソッド内で実行される。
            // 複数のスプライトへ同一Imageインスタンスをaddしていることを
            // 想定し、すでにロード済であれば再ロードはしないとする。
            return;
        }
        const sound = await SoundLoader.loadSound(this._soundPath, this._name);
        this._data = sound.data;
        this._loadCompleted = true;
    }
    get name() {
        return this._name;
    }
    get data() {
        return this._data;
    }

    get loadCompleted() : boolean {
        return this._loadCompleted;
    }

    play() {

    }
}