import { ISound } from "../../type/sound";
import { Sound } from ".";

/**
 * SoundRemaker
 */
export class SoundRemaker {

    public static remake( sound: ISound ): ISound {
        const _sound = sound as Sound;
        const name = _sound.name;
        const data = _sound.data;
        const obj:{[name:string]: Uint8Array<ArrayBuffer>} = {};
        obj[name] = data;
        const remakeSound = new Sound(obj, true);
        return remakeSound;
    }

}