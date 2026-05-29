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
    private getSound(soundName:string):Sound {
        if(this.currentSound != undefined && this.currentSound.name == soundName){            
            return this.currentSound;
        }
        const sound = this.soundMap[soundName];
        this.currentSound = sound;
        return sound;

    }
    /**
     * 音を鳴らす
     * @param soundName {string} - 音の名前
     */
    play(soundName: string): void {
        const sound = this.getSound(soundName);
        sound.play();
    }
    /**
     * 終わるまで音を鳴らす
     * @param soundName {string} - 音の名前
     */
    playUntilDone(soundName: string): Promise<void> {
        return new Promise<void>(resolve=>{
            const sound = this.getSound(soundName);
            sound.startSoundUntilDone().then(()=>{
                resolve();
            });
        });
    }
    /**
     * サウンドオプションをクリアする
     */
    async clearEffects(soundName?: string): Promise<void> {
        for(const soundKey of this.soundKeys) {
            const sound = this.soundMap[soundKey];
            sound.volume = 100;
            sound.pitch = 0;
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
    getVolume(sound?: Sound | string) : number {
        if(sound == undefined){
            if(this.currentSound != undefined){
                return this.currentSound.volume;
            }
        }else if(typeof sound == 'string'){
            const soundName = sound;
            if(this.soundKeys.includes(soundName)) {
                const sound = this.soundMap[soundName];
                return sound.volume;
            }
        }else{
            if(this.soundKeys.includes( sound.name )) {
                return sound.volume;
            }
        }
        return -Infinity;
    }
    setVolume(soundName: string, volume: number) : void {
        if(this.soundKeys.includes(soundName)) {
            const sound = this.soundMap[soundName];
            sound.volume = volume;
        }else{
            return;
        }
    }
    /** ピッチ */
    getPitch(soundName: string) : number {
        if(this.soundKeys.includes(soundName)) {
            const sound = this.soundMap[soundName];
            return sound.pitch;
        }
        return -Infinity;
    }
    setPitch(soundName: string, pitch: number) : void {
        if(this.soundKeys.includes(soundName)) {
            const sound = this.soundMap[soundName];
            sound.pitch = pitch;
        }else{
            return;
        }
    }
}