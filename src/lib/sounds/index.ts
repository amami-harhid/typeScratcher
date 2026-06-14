import { engine, Engine } from "../engine";
import EventEmitter from "events";
import { ScratchEvent } from '../engine/scratchEvent';
import { SoundRemaker } from "./soundRemaker";
import { SoundLoader } from "../loader/soundLoader";
import { SoundPlayer } from "./soundPlayer";
import { Utils } from "../utils/utils";
import type { ISoundPlayer } from "../../type/sound/ISoundPlayer";
import type { ISound } from "../../type/sound";
import { ImageBank } from "../image/imageBank";
type SoundArgStringObject = { [key:string]: string | Uint8Array<ArrayBuffer>};

/**
 * Sound
 */
export class Sound extends EventEmitter implements ISound {
    public static get SOUND_FORCE_STOP() {
        return "SOUND_FORCE_STOP";
    }
    private _name: string;
    private _soundPath:string;
    private _data!:Uint8Array<ArrayBuffer>;
    private _loadCompleted: boolean = false;
    private _soundPlayer!: ISoundPlayer;
    private _volume: number = 100;
    private _pitch: number = 0;
    constructor(sound: SoundArgStringObject, reuse:boolean = false) {
        super();
        const info = Utils.varNameValues(sound);
        this._name = info[0];
        const data = info[1];
        if(reuse === true) {
            this._soundPath = '';
            this._data = data;
        }else{
            this._soundPath = data;
        }
    }

    async load() {
        if(this.loadCompleted === true) {
            // ロードはスプライトの Image.addメソッド内で実行される。
            // 複数のスプライトへ同一Imageインスタンスをaddしていることを
            // 想定し、すでにロード済であれば再ロードはしないとする。
            return;
        }
        if( this._data != undefined ) {
            if(this._soundPlayer == undefined ){
                // ここに来るときは、SoundRemaker.remake(sound)で 流用したとき
                // AudioEngineの準備完了した時点で、各音のSoundPlayerを作る。
                await this.createSoundPlayer();
            }
            return;            
        }
        const sound = await SoundLoader.loadSound(this._soundPath, this._name);
        this._data = sound.data;
        const me = this;
        (engine as Engine).runtime.scratchEvent.once(ScratchEvent.READY_AUDIO_ENGINE, async()=>{
            if(me._soundPlayer == undefined ){
                // AudioEngineの準備完了した時点で、各音のSoundPlayerを作る。
                await me.createSoundPlayer();
            }
        });
        this._loadCompleted = true;
    }
    private async createSoundPlayer() {
        if(this._soundPlayer) {
            return;
        }
        const data = this._data;
        const audioEngine = (engine as Engine).runtime.audioEngine;
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

    play() : void {
        if(this._soundPlayer == undefined) {
            this.createSoundPlayer().then(()=>{
                this._play();
            });
        }else{
            this._play();
        }
    }
    private _play() :void {
        this._soundPlayer.volume = this._volume;
        const autdioPitch = this._pitchScratchToAudio(this._pitch);
        this._soundPlayer.pitch = autdioPitch/100;
        this._soundPlayer.play();
    }
    async playUntilDone(): Promise<void> {
        if(this._soundPlayer == undefined) {
            this.createSoundPlayer().then(async()=>{
                await this._startSoundUntilDone();
            });
        }else{
            await this._startSoundUntilDone();
        }
    }
    private _startSoundUntilDone(): Promise<void> {
        if(this._soundPlayer == undefined) {
            this.createSoundPlayer();
        }
        const me = this;
        me._soundPlayer.volume = me._volume;
        const autdioPitch = this._pitchScratchToAudio(this._pitch);
        me._soundPlayer.pitch = autdioPitch/100;
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
    /**
     * 100 がデフォルト
     * @param volume 
     * @returns 
     */
    setVolume(volume: number) {
        this._volume = volume;
        if ( this._soundPlayer == null) return;
        this._soundPlayer.volume = volume;
    }
    get pitch() {
        return this._pitch;
    }
    addPitch(pitch:number): void {
        const _pitch = this._pitch + pitch;
        const autdioPitch = this._pitchScratchToAudio(_pitch);
        if( 12.5 <= autdioPitch && autdioPitch <= 800 ){
            this._pitch = _pitch;
            if ( this._soundPlayer == null) return;
            this._soundPlayer.pitch = autdioPitch/100;
        }else{
            // 何もしない
        }
    }
    setPitch(pitch:number): void {
        const autdioPitch = this._pitchScratchToAudio(pitch);
        this._pitch = pitch;
        if( 12.5 <= autdioPitch && autdioPitch <= 800 ){
            if ( this._soundPlayer == null) return;
            this._soundPlayer.pitch = autdioPitch/100;
        }else{
            // 何もしない
        }
    }
    get isPlaying():boolean {
        if ( this._soundPlayer == null) return false;
        return this._soundPlayer.soundPlayer.isPlaying;
    }

    deepCopy() : ISound {
        const sound = SoundRemaker.remake(this);
        return sound;
    }

    private _pitchScratchToAudio(pitch: number) {
        if(-360 <= pitch && pitch <= 360) {
            const audioPitch = 100 * (2**(pitch/120));
            return audioPitch;
        }
        return 0;
    }

    private _pitchAudioToScratch(pitch: number) {
        if(12.5 <= pitch && pitch <= 800){
            const scratchPitch = 120 * Math.log2(pitch/100);
            return scratchPitch;
        }
        return 100;
    }
}