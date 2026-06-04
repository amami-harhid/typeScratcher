import {VM as _vm} from '../../src';
import type {SSprite} from "@Type/sprite";
import type {SStage} from "@Type/stage";
import type {SImage} from "@Type/image/IImage";
import type {SSound} from "@Type/sound/ISound";
import type {IPlayground} from "@Type/vm/playground";
import type {STimer} from "@Type/util/ITimer.js";
import type { TKEYBOARD_KEYS } from '@Type/vm/keyboad.js';
import type { RotationStyle } from '@Type/entity/RotationStyle.js';
const Sprite:SSprite = _vm.Sprite;
const Stage:SStage = _vm.Stage;
const Image:SImage = _vm.Image;
const Sound:SSound = _vm.Sound;
const Timer:STimer = _vm.Timer;
const Rotation:RotationStyle = _vm.Rotation;
const KEYBOARD_KEYS:TKEYBOARD_KEYS = _vm.KEYBOARD_KEYS;
const playground:IPlayground = _vm.playground;

export const typeScratcher = {
    Sprite:Sprite,
    Stage:Stage,
    Image:Image, 
    Sound: Sound, 
    Timer: Timer,
    Rotation: Rotation,
    Key: KEYBOARD_KEYS,
    playground: playground
};