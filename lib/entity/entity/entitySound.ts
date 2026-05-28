import { Entity } from '../entity';
import type { IEntitySound } from '@Type/entity/IEntitySound';
import { SoundOption } from '@Type/entity/SoundOption';
import { Sound } from '../../sounds/sound';
/** イベント */
export class EntitySound {

    protected entity: Entity;
    protected sounds!: Sound[];
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
            this.sounds.push(s);
        }
    }
    /**
     * 名前で Soundを取得する ( 使わないほうがよさそう )
     * @param soundName 
     * @returns 
     */
    getSound(soundName: string) : Sound | undefined {
        let _sound: Sound|undefined = undefined;
        for(const sound of this.sounds) {
            if(sound.name == soundName){
                _sound = sound;
                break;
            }
        }
        return _sound;
    }
    /**
     * 音を鳴らす
     * @param soundName {string} - 音の名前
     */
    play(soundName: string): void {
        for(const sound of this.sounds) {
            if(sound.name == soundName){
                sound.play();
                break;
            }
        }
    }
    /**
     * 終わるまで音を鳴らす
     * @param soundName {string} - 音の名前
     */
    async playUntilDone(soundName: string): Promise<void> {
        for(const sound of this.sounds) {
            if(sound.name == soundName){
                await sound.startSoundUntilDone();
                break;
            }
        }
    }
    /**
     * サウンドオプションを設定する
     * @param key {SoundOption} - サウンドオプションキー
     * @param value {number} - オプション値
     * 
     * {@link SoundOption}
     */
    setOption(key: SoundOption, value:number): void{
        for(const sound of this.sounds) {
            if(sound.name == soundName){
                await sound.startSoundUntilDone();
                break;
            }
        }
        this.entity.$setOption(key, value);
    }
    /**
     * サウンドオプションを指定値ずつ変える
     * @param key {SoundOption} - サウンドオプションキー
     * @param value {number} - オプション値
     * 
     * {@link SoundOption}
     */
    async changeOptionValue(key: SoundOption, value:number): Promise<void>{
        await this.entity.$changeOptionValue(key,value);
    }
    /**
     * サウンドオプションをクリアする
     */
    async clearEffects(): Promise<void> {
        await this.entity.$clearSoundEffect();
    }
    /**
     * 鳴っている音を止める
     */
    stop(): void {
        for(const sound of this.sounds) {
            if(sound.isPlaying === true){
                sound.stop();
            }
        }
    }
    /**
     * 鳴っている音を「すぐに」止める
     */
    stopImmediately(): void {
        for(const sound of this.sounds) {
            if(sound.isPlaying === true){
                sound.stopImmediately();
            }
        }
    }
    /** 音量 */
    get volume() : number {
        const volume = this.entity.$getOptionValue(SoundOption.VOLUME);
        return volume;
    }
    /** ピッチ */
    get pitch() : number {
        const pitch = this.entity.$getOptionValue(SoundOption.PITCH);
        return pitch;

    }
}