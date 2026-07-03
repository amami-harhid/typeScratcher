import { Sound } from '../../sounds';
import { Timer } from '../../utils/timer';
import type { IEntity } from '../../../type/entity/entity';
import type { ISound } from '../../../type/sound';
import type { ISoundPlayer } from '../../../type/sound/ISoundPlayer';

/** 
 * サウンド 
 */
export class EntitySound {

    protected entity: IEntity;
    public soundMap: Map<string, ISound>;
    public soundKeys: string[] = [];
    public effectMap: Map<string,{volume:number, pitch:number}>;
    protected currentSound!: ISound;
    private _soundPlayers : Map<string, ISoundPlayer>;
    private _soundPlayerKeys : string[];
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this.soundMap = new Map<string, ISound>();
        this.effectMap = new Map<string, {volume:number, pitch:number}>();
        this._soundPlayers = new Map<string,ISoundPlayer>();
        this._soundPlayerKeys = [];
    }
    /**
     * 音を追加する
     * @param soundName {string} - 音の名前
     */
    add(sounds: ISound[]) : void {        
        for(const s of sounds) {
            if(this.currentSound == undefined){
                this.currentSound = s;
            }
            const soundName = s.name;
            this.soundMap.set(soundName, s);
            if( !this.effectMap.has(soundName)) {
                this.effectMap.set(soundName,{volume:100, pitch:0});
            }
            this.soundKeys.push(s.name);
        }
    }
    addPlayer( name: string, player: ISoundPlayer): void {
        if(this._soundPlayerKeys.includes(name)) {
            // 何もしない
        }else{
            this._soundPlayerKeys.push(name);
            this._soundPlayers.set(name, player);
        }
    }
    getSoundPlayer( name: string ) : ISoundPlayer | undefined {
        if(this._soundPlayerKeys.includes(name)){
            const sp = this._soundPlayers.get(name);
            return sp;
        }
        return undefined;
    }
    /**
     * 音を鳴らす
     * @param sound {Sound} - 音
     */
    play(sound: ISound): void {
        const _sound = sound as Sound;
        if(this.soundKeys.includes( _sound.name )) {
            const effect = this.effectMap.get(_sound.name);
            const _soundPlayer = this.getSoundPlayer(_sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            if(effect){
                _sound.setVolume(_soundPlayer, effect.volume);
                _sound.setPitch(_soundPlayer, effect.pitch);
            }
            _sound.play(_soundPlayer);
        }
    }
    /**
     * 終わるまで音を鳴らす
     * @param sound {Sound} - 音
     */
    playUntilDone(sound: Sound): Promise<void> {
        return new Promise<void>(resolve=>{
            if(this.soundKeys.includes( sound.name )) {
                const effect = this.effectMap.get(sound.name);
                const _soundPlayer = this.getSoundPlayer( sound.name);
                if(_soundPlayer == undefined) return;// 何もしない
                if(effect){
                    sound.setVolume(_soundPlayer, effect.volume);
                    sound.setPitch(_soundPlayer, effect.pitch);
                }
                sound.playUntilDone(_soundPlayer).then(()=>{
                    resolve();
                });
            }else{
                resolve();
            }
        });
    }
    /**
     * サウンドオプションをクリアする
     */
    async clearEffects(): Promise<void> {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap.get(soundKey);
            if(sound == undefined){
                return;
            }
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap.get(soundKey);
            if(effect){
                effect.volume = 100;
                effect.pitch = 0;
            }
            _sound.setVolume(_soundPlayer, 100);
            _sound.setPitch(_soundPlayer, 0);
        }
        // 反映されるまで少し待つ
        await Timer.wait(1/30);
    }
    /**
     * 鳴っている音を止める
     */
    stop(): void {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap.get(soundKey);
            if(sound == undefined){
                continue;
            }
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                _sound.setVolume(_soundPlayer, effect.volume);
                _sound.setPitch(_soundPlayer, effect.pitch);
            }
            if(_sound.isPlaying(_soundPlayer) === true){
                _sound.stop(_soundPlayer);
            }
        }
    }
    /**
     * 鳴っている音を「すぐに」止める
     */
    stopImmediately(): void {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap.get(soundKey);
            if(sound == undefined){
                return;
            }
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                _sound.setVolume(_soundPlayer, effect.volume);
                _sound.setPitch(_soundPlayer, effect.pitch);
            }
            if(_sound.isPlaying(_soundPlayer) === true){
                _sound.stopImmediately(_soundPlayer);
            }
        }
    }
    /** 音量 */
    getVolume(sound: ISound) : number {
        if(this.soundKeys.includes( sound.name )) {
            const effect = this.effectMap.get(sound.name);
            if(effect)
                return effect.volume;
        }
        return 100; // デフォルト
    }

    addVolume(sound: ISound, volume: number) : void {
        const _sound = sound as Sound;
        if(this.soundKeys.includes(_sound.name)) {
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                const _volume = _sound.toScratchVolumeLimit(effect.volume+volume);
                _sound.setVolume(_soundPlayer, _volume);
                effect.volume = _volume;
            }
        }else{
            return;
        }
    }

    setVolume(sound: Sound, volume: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                const _volume = sound.toScratchPitchLimit(volume);
                sound.setVolume(_soundPlayer, _volume);
                effect.volume = _volume;
            }
        }else{
            return;
        }
    }
    /** ピッチ */
    getPitch(sound: Sound) : number {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap.get(sound.name);
            if(effect)
                return effect.pitch;
        }
        return 0; // デフォルト
    }
    addPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                const _pitch = effect.pitch + pitch;
                effect.pitch = sound.toScratchPitchLimit(_pitch);
                sound.setPitch(_soundPlayer, effect.pitch);
            }
        }else{
            return;
        }
    }
    setPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            const effect = this.effectMap.get(sound.name);
            if(effect){
                effect.pitch = sound.toScratchPitchLimit(pitch);
                sound.setPitch(_soundPlayer, effect.pitch);
            }
        }else{
            return;
        }
    }
}