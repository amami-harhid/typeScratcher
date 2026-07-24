import { type ISound } from "../../sound";
/** イベント */
export interface IEntitySound {
    /**
     * Add sound data
     * @param soundName {string} - name of sound
     */
    add(sounds: ISound[]) : void;

    /**
     * Play the sound.
     * @param sound {ISound} - sound data
     */
    play(sound: ISound): void;
    /**
     * Play the sound until it finishes.
     * @param sound {ISound} - sound data
     */
    playUntilDone(sound: ISound): Promise<void>;
    /**
     * Clear sound options
     */
    clearEffects(): Promise<void>;
    /**
     * Stop the sound that is playing.
     */
    stop(): void;
    /**
     * Stop immediately the sound that is playing.
     */
    stopImmediately(): void;
    /** Volume */
    getVolume(sound: ISound) : number;
    /** Add volume */
    addVolume(sound: ISound, volume: number) : void;
    /** Set volume */
    setVolume(sound: ISound, volume: number) : void;
    /** Pitch */
    getPitch(sound: ISound) : number;
    /** Add pitch */
    addPitch(sound: ISound, pitch: number) : void;
    /** Set pitch */
    setPitch(sound: ISound, pitch: number) : void;

}