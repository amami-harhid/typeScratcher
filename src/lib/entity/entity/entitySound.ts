import { Sound } from '../../sounds';
import { Timer } from '../../utils/timer';
import type { IEntity } from '../../../type/entity/entity';
import type { ISound } from '../../../type/sound';

/** 
 * サウンド 
 */
export class EntitySound {

    protected entity: IEntity;
    public soundMap: {[key:string]: ISound} = {};
    public soundKeys: string[] = [];
    public effectMap: {[key:string]: {volume:number, pitch:number}} = {}
    protected currentSound!: ISound;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:IEntity){
        this.entity = entity;
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
    /**
     * 音を鳴らす
     * @param sound {Sound} - 音
     */
    async play(sound: ISound): Promise<void> {
        const _sound = sound as Sound;
        if(this.soundKeys.includes( _sound.name )) {
            const effect = this.effectMap[_sound.name];
            _sound.setVolume(effect.volume);
            _sound.setPitch(effect.pitch);
            await _sound.play();
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
                sound.setVolume(effect.volume);
                sound.setPitch(effect.pitch);
                sound.startSoundUntilDone().then(()=>{
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
            const effect = this.effectMap[soundKey]
            _sound.setVolume(100);
            effect.volume = 100;
            _sound.setPitch(0);
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
            if(_sound.isPlaying === true){
                _sound.stop();
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
            if(_sound.isPlaying === true){
                _sound.stopImmediately();
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
            _sound.addVolume(volume);
        }else{
            return;
        }
    }
    setVolume(sound: Sound, volume: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.pitch = volume;
            sound.setVolume(volume);
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
            sound.addPitch(pitch);
        }else{
            return;
        }
    }
    setPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            const effect = this.effectMap[sound.name]
            effect.pitch = pitch;
            sound.setPitch(pitch);
        }else{
            return;
        }
    }
}