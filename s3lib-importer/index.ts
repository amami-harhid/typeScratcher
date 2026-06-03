import {VM} from '../dist/index.js';
import type {SSprite} from "@Type/sprite";
import type {SImage} from "@Type/image/IImage";
import type {SSound} from "@Type/sound/ISound.js"
const Sprite:SSprite = VM.Sprite;
const Image:SImage = VM.Image;
const Sound:SSound = VM.Sound;
interface PlayGround {
    start(): void;
}
const playground:PlayGround = VM.playground;

export const VMer = {Sprite:Sprite, Image:Image, Sound: Sound, playground: playground};