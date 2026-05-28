/**
 * Sound
 */
import EventEmitter from "events";
import { Entity } from "../entity/entity";
import { SoundLoader } from "../loader/soundLoader";
import { playground } from "../vm/playground";
import { SoundPlayer } from "./soundPlayer";

export class Sound extends EventEmitter {
    static get SOUND_FORCE_STOP() {
        return "SOUND_FORCE_STOP";
    }
    private _name: string;
    private _soundPath:string;
    private _data!:Uint8Array<ArrayBuffer>;
    private _loadCompleted: boolean = false;
    private _soundPlayer!: SoundPlayer;
    private _isPlaying: boolean = false;
    constructor(name: string, soundPath:string) {
        super();
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
        const data = this._data = sound.data;
        const audioEngine = playground.runtime.audioEngine;
        const decodeSoundPlayer = await audioEngine.decodeSoundPlayer({data});
        const _effects = audioEngine.createEffectChain();
        const options = {effects: _effects};
        const soundPlayer = new SoundPlayer(this.name, decodeSoundPlayer, options);
        soundPlayer.connect(); // effects は インスタンスを作るときに渡しているので引数省略
        this._soundPlayer = soundPlayer;
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
        if ( this._soundPlayer == null) return;
        this._soundPlayer.connect();
        this._soundPlayer.play();
    }
    async startSoundUntilDone(self?: Entity): Promise<void> {
        if ( this._soundPlayer == null) return;
        if( self ) {
            const me = this;
            return new Promise<void>(async resolve=>{
                if(me._soundPlayer == undefined) {
                    resolve();
                }else{
                    // speechStopImmediately() からEmit
                    const _f = _=>{
                        me.stopImmediately();
                        resolve();
                    }
                    const EMIT_ID = Sound.SOUND_FORCE_STOP;
                    self.once(EMIT_ID,_f);
                    await me._soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                    self.removeListener(EMIT_ID, _f);
                    resolve();
                }
            });
        }else{

        }
    }
    stop() {
        if ( this._soundPlayer == null) return;
        this._soundPlayer.stop();
    }
    stopImmediately() {
        if ( this._soundPlayer == null) return;
        this._soundPlayer.stopImmediately();
    }
    forceStop() {
        if ( this._soundPlayer == null) return;
        this.emit(Sound.SOUND_FORCE_STOP);
    }
    get volume() {
        if ( this._soundPlayer == null) return -1;
        return this._soundPlayer.volume;
    }
    set volume(volume: number) {
        if ( this._soundPlayer == null) return;
        this._soundPlayer.volume = volume;
    }
    get pitch() {
        if ( this._soundPlayer == null) return Infinity;
        return this._soundPlayer.pitch;
    }
    set pitch(pitch:number) {
        if ( this._soundPlayer == null) return;
        this._soundPlayer.pitch = pitch;
    }
    get isPlaying():boolean {
        if ( this._soundPlayer == null) return false;
        return this._soundPlayer.soundPlayer.isPlaying;
    }
}