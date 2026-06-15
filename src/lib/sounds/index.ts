import { engine, Engine } from "../engine";
import EventEmitter from "events";
import { EntitySound } from "../entity/entity/entitySound";
import { ScratchEvent } from '../engine/scratchEvent';
import { SoundRemaker } from "./soundRemaker";
import { SoundLoader } from "../loader/soundLoader";
import { SoundPlayer } from "./soundPlayer";
import { Utils } from "../utils/utils";
import type { IEntity } from "../../type/entity/entity";
import type { ISound } from "../../type/sound";
import type { ISoundPlayer } from "../../type/sound/ISoundPlayer";
import { Entity } from "../entity/entity";
type SoundArgStringObject = { [key:string]: string | Uint8Array<ArrayBuffer>};

/**
 * Sound
 */
export class Sound extends EventEmitter implements ISound {
    public static get SOUND_FORCE_STOP() {
        return "SOUND_FORCE_STOP";
    }
    protected _name: string;
    protected _soundPath:string;
    protected _data!:Uint8Array<ArrayBuffer>;
    protected _ready_audio_engine: boolean;
    //private _loadCompleted: boolean = false;
    //private _soundPlayer!: ISoundPlayer;
    //private _volume: number = 100;
    //private _pitch: number = 0;
    constructor(sound: SoundArgStringObject, reuse:boolean = false) {
        super();
        const info = Utils.varNameValues(sound);
        this._name = info[0];
        const data = info[1];
        this._ready_audio_engine = false;
        if(reuse === true) {
            this._ready_audio_engine = true;
            this._soundPath = '';
            this._data = data;
        }else{
            this._soundPath = data;
        }
    }
    /**
     * ロード処理が実行される都度、soundPlayerを生成する
     * 同じSoundインスタンスを複数のスプライトで共有することを考慮し
     * データロード完了している場合にはデータロードを抑止する。
     * @param entity 
     */
    async load(entity: IEntity) {
        const me = this;
        const entitySound = entity.Sound as EntitySound;
        if(this._data == undefined) {
            const sound = await SoundLoader.loadSound(this._soundPath, this._name);
            this._data = sound.data;
        }else{
            // データロード済

        }
        if(this._ready_audio_engine === false) {
            (engine as Engine).runtime.scratchEvent.once(ScratchEvent.READY_AUDIO_ENGINE, async()=>{
                this._ready_audio_engine = true;
                const _soundPlayer = entitySound.getSoundPlayer(this._name);
                if(_soundPlayer == undefined ){
                    // AudioEngineの準備完了した時点で、各音のSoundPlayerを作る。
                    await me.makeSoundPlayer(entity);
                }
            });
        }else{
            // 【READY_AUDIO_ENGINE】イベント発生後に 生成されるサウンド用の処理
            // 例：（クローン生成時に イメージを再生成するとき）
            const _soundPlayer = entitySound.getSoundPlayer(this._name);
            if(_soundPlayer == undefined ){
                // AudioEngineの準備完了した時点で、各音のSoundPlayerを作る。
                await me.makeSoundPlayer(entity);
            }
        }
    }
    /**
     * SoundPlayerを生成して EntitySoundインスタンスへ格納する
     * @param entity 
     * @returns 
     */
    public async makeSoundPlayer(entity: IEntity) : Promise<ISoundPlayer>{
        const audioEngine = (engine as Engine).runtime.audioEngine;
        const decodeSoundPlayer = await audioEngine.decodeSoundPlayer({data: this.data});
        const _effects = audioEngine.createEffectChain();
        const options = {effects: _effects};
        const soundPlayer = new SoundPlayer(this.name, decodeSoundPlayer, options);
        soundPlayer.connect(); // effects は インスタンスを作るときに渡しているので引数省略
        (entity.Sound as EntitySound).addPlayer(this.name, soundPlayer);
        return soundPlayer as ISoundPlayer;
    }
    get name() {
        return this._name;
    }
    get data() {
        return this._data;
    }

    //get loadCompleted() : boolean {
    //    return this._loadCompleted;
    //}

    play(soundPlayer: ISoundPlayer) : void {
        soundPlayer.play();
    }
    playUntilDone(soundPlayer: ISoundPlayer): Promise<void> {
        const me = this;
        return new Promise<void>(async resolve=>{
            if(soundPlayer == undefined) {
                resolve();
            }else{
                // speechStopImmediately() からEmit
                const _f = _=>{
                    me.stopImmediately(soundPlayer);
                    resolve();
                }
                const EMIT_ID = Sound.SOUND_FORCE_STOP;
                me.once(EMIT_ID,_f);
                await soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                me.removeListener(EMIT_ID, _f);
                resolve();
            }
        });
    }
    stop(soundPlayer: ISoundPlayer) {
        soundPlayer.stop();
    }
    stopImmediately(soundPlayer: ISoundPlayer) {
        soundPlayer.stopImmediately();
    }
    forceStop() {
        this.emit(Sound.SOUND_FORCE_STOP);
    }
    getVolume(soundPlayer: ISoundPlayer) {
        return soundPlayer.volume;
    }
    addVolume(soundPlayer: ISoundPlayer, volume: number) {
        soundPlayer.volume += volume;

    }
    /**
     * 100 がデフォルト
     * @param volume 
     * @returns 
     */
    setVolume(soundPlayer: ISoundPlayer, volume: number) {
        soundPlayer.volume = volume;
    }
    getPitch(soundPlayer: ISoundPlayer) : number{
        const _pitch = soundPlayer.pitch;
        const _scratchPitch = this._pitchAudioToScratch(_pitch);
        return _scratchPitch;
    }
    addPitch(soundPlayer: ISoundPlayer, pitch:number): void {        
        const _pitch = this.getPitch(soundPlayer) + pitch;
        const autdioPitch = this._pitchScratchToAudio(_pitch);
        if( 12.5 <= autdioPitch && autdioPitch <= 800 ){
            soundPlayer.pitch = autdioPitch/100;
        }else{
            // 何もしない
        }
    }
    setPitch(soundPlayer: ISoundPlayer, pitch:number): void {
        const autdioPitch = this._pitchScratchToAudio(pitch);
        //this._pitch = pitch;
        if( 12.5 <= autdioPitch && autdioPitch <= 800 ){
            soundPlayer.pitch = autdioPitch/100;
        }else{
            // 何もしない
        }
    }
    isPlaying(soundPlayer: ISoundPlayer):boolean {
        return soundPlayer.soundPlayer.isPlaying;
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