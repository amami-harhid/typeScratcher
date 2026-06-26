import type { ImageEffectiveType } from '../type/entity/ImageEffective';
import type { KEYBOARD_KEYS_Type } from '../type/engine/keyboad';
import type { RotationStyle } from '../type/entity/RotationStyle';
import { ScratchFontFamily as _ScratchFontFamily } from '../type/svgText';
import type { IEngine } from '../type/engine';
import type { SImage } from '../type/image';
import type { SLoop } from '../lib/engine/loop';
import type { SSound } from '../type/sound';
import type { SSprite } from '../type/entity/sprite';
import type { SStage } from '../type/entity/stage';
import type { ITextToSvg } from '../type/svgText';
import type { IUtils } from '../type/util/utils';
import type { SVar } from './entity/monitor/SVar';
import { SPEECH_LOCALE } from '../type/speech/IVoice';
import { VOICE_ID } from '../type/speech/IVoice';

type stageBounds = {w: number, h: number};

export type ExportType = {
    Sprite: SSprite,
    Stage: SStage,
    Image: SImage,
    Sound: SSound,
    Rotation: RotationStyle,
    ImageEffective: ImageEffectiveType,
    Keyboard: KEYBOARD_KEYS_Type
    engine: IEngine,
    textToSvg: ITextToSvg,
    Loop: SLoop,
    ScratchFontFamily: typeof _ScratchFontFamily,
    SpeechLocale: typeof SPEECH_LOCALE,
    VoiceType: typeof VOICE_ID,
    StageBounds: stageBounds,
    Utils: IUtils,
    Var: SVar,
}
