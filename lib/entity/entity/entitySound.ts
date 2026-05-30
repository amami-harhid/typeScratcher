import { Entity } from '../entity';
import type { IEntitySound } from '@Type/entity/IEntitySound';
import { SoundOption } from '@Type/entity/SoundOption';
import { Sound } from '../../sounds/sound';
import { Timer } from '../../utils/timer';
/** イベント */
export class EntitySound {

    protected entity: Entity;
    public soundMap: {[key:string]: Sound} = {};
    public soundKeys: string[] = [];
    protected currentSound!: Sound;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:Entity){
        this.entity = entity;
    }
    /**
     * 音を追加する
     * @param soundName {string} - 音の名前
     */
    add(sounds: Sound[]) : void {        
        for(const s of sounds) {
            if(this.currentSound == undefined){
                this.currentSound = s;
            }
            const soundName = s.name;
            this.soundMap[soundName] = s;
            this.soundKeys.push(s.name);
        }
    }
    /**
     * 音を鳴らす
     * @param sound {Sound} - 音
     */
    async play(sound: Sound): Promise<void> {
        if(this.soundKeys.includes( sound.name )) {
            await sound.play();
        }
    }
    /**
     * 終わるまで音を鳴らす
     * @param sound {Sound} - 音
     */
    playUntilDone(sound: Sound): Promise<void> {
        return new Promise<void>(resolve=>{
            sound.startSoundUntilDone().then(()=>{
                resolve();
            });
        });
    }
    /**
     * サウンドオプションをクリアする
     */
    async clearEffects(): Promise<void> {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap[soundKey];
            await sound.setVolume(100);
            await sound.setPitch(0);
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
            if(sound.isPlaying === true){
                sound.stop();
            }
        }
    }
    /**
     * 鳴っている音を「すぐに」止める
     */
    stopImmediately(): void {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap[soundKey];
            if(sound.isPlaying === true){
                sound.stopImmediately();
            }
        }
    }
    /** 音量 */
    getVolume(sound: Sound) : number {
        if(this.soundKeys.includes( sound.name )) {
             return sound.volume;
        }
        return -Infinity;
    }
    addVolume(sound: Sound, volume: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            console.log('---- add Volume', volume);
            sound.addVolume(volume);
        }else{
            return;
        }
    }
    setVolume(sound: Sound, volume: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            console.log('---- set Volume', volume);
            sound.setVolume(volume);
        }else{
            return;
        }
    }
    /** ピッチ */
    getPitch(sound: Sound) : number {
        if(this.soundKeys.includes(sound.name)) {
            return sound.pitch;
        }
        return -Infinity;
    }
    addPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            sound.addPitch(pitch);
        }else{
            return;
        }
    }
    setPitch(sound: Sound, pitch: number) : void {
        if(this.soundKeys.includes(sound.name)) {
            sound.setPitch(pitch);
        }else{
            return;
        }
    }
}