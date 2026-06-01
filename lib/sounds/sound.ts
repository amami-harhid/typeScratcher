/**
 * Sound
 */
import EventEmitter from "events";
import { Entity } from "../entity/entity";
import { SoundLoader } from "../loader/soundLoader";
import { playground } from "../vm/playground";
import { SoundPlayer } from "./soundPlayer";
import { ScratchEvent } from '../vm/scratchEvent';
import { Utils } from "../utils/utils";
type SoundArgStringObject = { [key:string]:string };
export class Sound extends EventEmitter {
    static get SOUND_FORCE_STOP() {
        return "SOUND_FORCE_STOP";
    }
    private _name: string;
    private _soundPath:string;
    private _data!:Uint8Array<ArrayBuffer>;
    private _loadCompleted: boolean = false;
    private _soundPlayer!: SoundPlayer;
    private _volume: number = 100;
    private _pitch: number = 1.0;
    constructor(sound: SoundArgStringObject) {
        super();
        const info = Utils.varNameValues(sound);
        this._name = info[0];
        this._soundPath = info[1];
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
        playground.runtime.scratchEvent.once(ScratchEvent.READY_AUDIO_ENGINE, async()=>{
            await this.createSoundPlayer();
        });
        this._loadCompleted = true;
    }
    private async createSoundPlayer() {
        if(this._soundPlayer) {
            return;
        }
        const data = this._data;
        const audioEngine = playground.runtime.audioEngine;
        const decodeSoundPlayer = await audioEngine.decodeSoundPlayer({data});
        const _effects = audioEngine.createEffectChain();
        const options = {effects: _effects};
        const soundPlayer = new SoundPlayer(this.name, decodeSoundPlayer, options);
        soundPlayer.connect(); // effects は インスタンスを作るときに渡しているので引数省略
        this._soundPlayer = soundPlayer;
        this.setVolume(this._volume);
        this.setPitch(this._pitch);
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

    play() : Promise<void> {
        return this.startSoundUntilDone();
    }
    startSoundUntilDone(): Promise<void> {
        if(this._soundPlayer == undefined) {
            this.createSoundPlayer();
        }
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
                me.once(EMIT_ID,_f);
                await me._soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                me.removeListener(EMIT_ID, _f);
                resolve();
            }
        });
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
        if ( this._soundPlayer == null) return this._volume;
        return this._soundPlayer.volume;
    }
    addVolume(volume: number) {
        this._volume += volume;
        if ( this._soundPlayer == null) return;
        this._soundPlayer.volume += volume;

    }
    setVolume(volume: number) {
        this._volume = volume;
        if ( this._soundPlayer == null) return;
        this._soundPlayer.volume = volume;
    }
    get pitch() {
        if ( this._soundPlayer == null) return this._pitch;
        return this._soundPlayer.pitch;
    }
    addPitch(pitch:number): void {
        this._pitch += pitch;
        if ( this._soundPlayer == null) return;
        this._soundPlayer.pitch += pitch;
    }
    setPitch(pitch:number): void {
        this._pitch = pitch;
        if ( this._soundPlayer == null) return;
        this._soundPlayer.pitch = pitch;
    }
    get isPlaying():boolean {
        if ( this._soundPlayer == null) return false;
        return this._soundPlayer.soundPlayer.isPlaying;
    }
}