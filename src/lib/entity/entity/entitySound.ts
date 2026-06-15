import { Sound } from '../../sounds';
import { Timer } from '../../utils/timer';
import type { IEntity } from '../../../type/entity/entity';
import type { ISound } from '../../../type/sound';
import type { ISoundPlayer } from '../../../type/sound/ISoundPlayer';

type TypeSoundPlayerElement = {[key: string]: ISoundPlayer};

/** 
 * サウンド 
 */
export class EntitySound {

    protected entity: IEntity;
    public soundMap: {[key:string]: ISound} = {};
    public soundKeys: string[] = [];
    public effectMap: {[key:string]: {volume:number, pitch:number}} = {}
    protected currentSound!: ISound;
    private _soundPlayers : TypeSoundPlayerElement[];
    private _soundPlayerKeys : string[];
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
        this._soundPlayers = [];
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
            this.soundMap[soundName] = s;
            this.effectMap[soundName] = {volume:100, pitch:0};
            this.soundKeys.push(s.name);
        }
    }
    addPlayer( name: string, player: ISoundPlayer): void {
        if(this._soundPlayerKeys.includes(name)) {
            // 何もしない
        }else{
            this._soundPlayerKeys.push(name);
            this._soundPlayers[name] = player;
        }
    }
    getSoundPlayer( name: string ) : ISoundPlayer | undefined {
        if(this._soundPlayerKeys.includes(name)) {
            return this._soundPlayers[name];
        }
    }
    /**
     * 音を鳴らす
     * @param sound {Sound} - 音
     */
    play(sound: ISound): void {
        const _sound = sound as Sound;
        if(this.soundKeys.includes( _sound.name )) {
            const effect = this.effectMap[_sound.name];
            const _soundPlayer = this.getSoundPlayer(_sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            _sound.setVolume(_soundPlayer, effect.volume);
            _sound.setPitch(_soundPlayer, effect.pitch);
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
                const effect = this.effectMap[sound.name];
                const _soundPlayer = this.getSoundPlayer( sound.name);
                if(_soundPlayer == undefined) return;// 何もしない
                sound.setVolume(_soundPlayer, effect.volume);
                sound.setPitch(_soundPlayer, effect.pitch);
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
            const sound = this.soundMap[soundKey];
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap[soundKey]
            _sound.setVolume(_soundPlayer, 100);
            effect.volume = 100;
            _sound.setPitch(_soundPlayer, 0);
            effect.pitch = 0;
        }
        // 反映されるまで少し待つ
        await Timer.wait(1/30);
    }
    /**
     * 鳴っている音を止める
     */
    stop(): void {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap[soundKey];
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap[sound.name]
            _sound.setVolume(_soundPlayer, effect.volume);
            _sound.setPitch(_soundPlayer, effect.pitch);
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
            const sound = this.soundMap[soundKey];
            const _sound = sound as Sound;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) continue;// 何もしない
            const effect = this.effectMap[sound.name]
            _sound.setVolume(_soundPlayer, effect.volume);
            _sound.setPitch(_soundPlayer, effect.pitch);
            if(_sound.isPlaying(_soundPlayer) === true){
                _sound.stopImmediately(_soundPlayer);
            }
        }
    }
    /** 音量 */
    getVolume(sound: ISound) : number {
        if(this.soundKeys.includes( sound.name )) {
            const effect = this.effectMap[sound.name]
            return effect.volume;
        }
        return -Infinity;
    }
    addVolume(sound: ISound, volume: number) : void {
        const _sound = sound as Sound;
        if(this.soundKeys.includes(_sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.volume += volume;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            _sound.addVolume(_soundPlayer, volume);
        }else{
            return;
        }
    }
    setVolume(sound: Sound, volume: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.volume = volume;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            sound.setVolume(_soundPlayer, volume);
        }else{
            return;
        }
    }
    /** ピッチ */
    getPitch(sound: Sound) : number {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            return effect.pitch;
        }
        return -Infinity;
    }
    addPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.pitch += pitch;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            sound.addPitch(_soundPlayer, pitch);
        }else{
            return;
        }
    }
    setPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.pitch = pitch;
            const _soundPlayer = this.getSoundPlayer( sound.name);
            if(_soundPlayer == undefined) return;// 何もしない
            sound.setPitch(_soundPlayer, pitch);
        }else{
            return;
        }
    }
}