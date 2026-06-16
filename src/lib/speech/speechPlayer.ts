import type { ISoundPlayer } from "../../type/sound/ISoundPlayer";
import type { 
    IScratchSoundPlayer, 
    TSoundPlayerOption, 
    TEffectChain } from "../../type/sound/IAudioEngine";

/**
 * SpeechPlayer
 */
export class SpeechPlayer {
    private _soundPlayer: IScratchSoundPlayer;
    private _options: TSoundPlayerOption;
    private _volume: number;
    private _pitch: number;
    private connectDone: boolean;
    private _effects: TEffectChain;

    constructor(_soundPlayer:IScratchSoundPlayer , options: TSoundPlayerOption = {}) {
        this._soundPlayer = _soundPlayer;
        this._options = options;
        this._volume = ( options.volume )? options.volume: 100;
        this._pitch = ( options.pitch )? options.pitch: 1;
        this.connectDone = false;
        this._effects = (this._options.effects)?this._options.effects:{};
        if(this._effects && this._effects.set && this._effects.volume) {
            this._soundPlayer.setPlaybackRate(this._pitch);
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();
            this.connect();
        }else{
            this._effects = {};
        }
    }
    /**
     *   --> 0.5
     * 0 --> 1.0
     * 50 --> 1.5
     */
    set pitch( pitch ) {
        this._pitch = pitch;
        this._soundPlayer.setPlaybackRate(pitch);
    }
    get pitch() {
        return this._pitch;
    }
    set volume( volume) {
        if(this._effects && this._effects.set && this._effects.volume){
            this._volume = volume;
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();
        }
    }
    get volume() {
        return this._volume;
    }

    get soundPlayer() {
        return this._soundPlayer;

    }
    set effects ( effects ){
        this._effects = effects;
    }
    get effects() {
        return this._effects;
    }
    connect() {
        if(this.connectDone === false) {
            if(this._effects) {
                this._soundPlayer.connect(this._effects);
                this.connectDone = true;
            }
        }
    }
    play() {
        this._soundPlayer.play();
    }
    get isPlaying(): boolean {
        return this._soundPlayer.isPlaying;
    }
    async startSoundUntilDone() : Promise<void> {

        const __soundPlayer = this._soundPlayer;
        // --- replace finished.
        // --- when sounds stoped, change property(isPlaying) to false
        this._soundPlayer.finished = function(){
            return new Promise<void>(resolve=>{
                __soundPlayer.once('stop', ()=>{
                        __soundPlayer.isPlaying = false;
                        resolve();
                    }
                );
            })
        }

        this.play();
        await this._soundPlayer.finished();
    }
    stop() {
        this._soundPlayer.stop();
    }
    stopImmediately() : void{
        this._soundPlayer.stopImmediately();
    }

};