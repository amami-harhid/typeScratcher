import {VM as vm} from '../dist/index.js';
import type {SSprite} from "@Type/sprite";
import type {SStage} from "@Type/stage";
import type {SImage} from "@Type/image/IImage";
import type {SSound} from "@Type/sound/ISound";
import type {IPlayground} from "@Type/vm/playground";
import type {STimer} from "@Type/util/ITimer.js";
import type { TKEYBOARD_KEYS } from '@Type/vm/keyboad.js';
import { type RotationStyle } from '@Type/entity/RotationStyle.js';
const Sprite:SSprite = vm.Sprite;
const Stage:SStage = vm.Stage;
const Image:SImage = vm.Image;
const Sound:SSound = vm.Sound;
const Timer:STimer = vm.Timer;
const Rotation:RotationStyle = vm.Rotation;
const KEYBOARD_KEYS:TKEYBOARD_KEYS = vm.KEYBOARD_KEYS;
const playground:IPlayground = vm.playground;

export const VM = {
    Sprite:Sprite,
    Stage:Stage,
    Image:Image, 
    Sound: Sound, 
    Timer: Timer,
    Rotation: Rotation,
    KEYBOARD_KEYS: KEYBOARD_KEYS,
    playground: playground
};