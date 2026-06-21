import { engine, Engine } from "../engine";
import EventEmitter from "events";
import { SoundPlayer } from "../sounds/soundPlayer";
import { Utils } from "../utils/utils";
import type { ISound } from "../../type/sound";
import type { ISoundPlayer } from "../../type/sound/ISoundPlayer";
import type { TSoundPlayerOption } from "../../type/sound/IAudioEngine";
type SoundArgStringObject = { [key:string]: string | Uint8Array<ArrayBuffer>};

/**
 * Sound
 */
export class SpeechSound extends EventEmitter implements ISound {
    public static get SOUND_FORCE_STOP() {
        return "SOUND_FORCE_STOP";
    }
    protected _name: string;
    protected _data!:Uint8Array<ArrayBuffer>;
    protected _ready_audio_engine: boolean;
    private _soundPlayer!: ISoundPlayer;
    constructor(sound: SoundArgStringObject) {
        super();
        const info = Utils.varNameValues(sound);
        this._name = info[0];
        const data = info[1];
        this._ready_audio_engine = false;
        this._ready_audio_engine = true;
        this._data = data;
    }
    /**
     * SoundPlayerを生成して EntitySoundインスタンスへ格納する
     * @param entity 
     * @returns 
     */
    public async makeSoundPlayer() : Promise<ISoundPlayer>{
        const audioEngine = (engine as Engine).runtime.audioEngine;
        const decodeSoundPlayer = await audioEngine.decodeSoundPlayer({data: this.data});
        const _effects = audioEngine.createEffectChain();
        const options: TSoundPlayerOption = {};
        options.effects = _effects;
        const soundPlayer = new SoundPlayer(this.name, decodeSoundPlayer, options);
        soundPlayer.connect(); // effects は インスタンスを作るときに渡しているので引数省略
        //(entity.Sound as EntitySound).addPlayer(this.name, soundPlayer);
        this._soundPlayer = soundPlayer;
        return soundPlayer as ISoundPlayer;
    }
    get name() {
        return this._name;
    }
    get data() {
        return this._data;
    }
    get soundPlayer(): ISoundPlayer {
        return this._soundPlayer;
    }

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
                const _f = ()=>{
                    me.stopImmediately(soundPlayer);
                    resolve();
                }
                const EMIT_ID = SpeechSound.SOUND_FORCE_STOP;
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
        this.emit(SpeechSound.SOUND_FORCE_STOP);
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
        return _pitch;
    }
    addPitch(soundPlayer: ISoundPlayer, pitch:number): void {        
        const _orgAudioPitch = this.getPitch(soundPlayer);
        const scratchPitch = this._pitchAudioToScratch(_orgAudioPitch);
        const _scratchPitch = scratchPitch + pitch;
        const audioPitch =  this._pitchScratchToAudio(_scratchPitch);
        if( 12.5 <= audioPitch && audioPitch <= 800 ){
            soundPlayer.pitch = audioPitch / 100;
        }else{
            // 何もしない
        }
    }
    setPitch(soundPlayer: ISoundPlayer, pitch:number): void {
        const audioPitch = this._pitchScratchToAudio(pitch);
        const _audioPitch = audioPitch; 
        if( 12.5 <= _audioPitch && _audioPitch <= 800 ){
            soundPlayer.pitch = audioPitch / 100;
        }else{
            // 何もしない
        }
    }
    isPlaying(soundPlayer: ISoundPlayer):boolean {
        return soundPlayer.soundPlayer.isPlaying;
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