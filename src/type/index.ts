import type { ImageEffectiveType } from '../type/entity/ImageEffective';
import type { KEYBOARD_KEYS_Type } from '../type/engine/keyboad';
import type { RotationStyle } from '../type/entity/RotationStyle';
import { SPEECH_GENDER } from './speech';
import { ScratchFontFamily as _ScratchFontFamily } from '../type/svgText';
import type { IEngine } from '../type/engine';
import type { TEnv } from './common/env';
import type { SImage } from '../type/image';
import type { SLoop } from '../lib/engine/loop';
import type { IOperations } from './operations';
import type { SSound } from '../type/sound';
import type { SSprite } from '../type/entity/sprite';
import type { SStage } from '../type/entity/stage';
import type { ITextToSvg } from '../type/svgText';
import { SPEECH_LOCALE } from '../type/speech/IVoice';
import { VOICE_ID } from '../type/speech/IVoice';
import { SVariable } from './entity/monitor/SVariable';
import { SFont } from './font';
import { SFontImage } from './font/fontImage';
type stageBounds = {w: number, h: number};

export type ExportType = {
    Sprite: SSprite,
    Stage: SStage,
    Image: SImage,
    Sound: SSound,
    Font: SFont,
    FontImage: SFontImage,
    Rotation: RotationStyle,
    ImageEffective: ImageEffectiveType,
    Keyboard: KEYBOARD_KEYS_Type
    engine: IEngine,
    Env: TEnv,
    textToSvg: ITextToSvg,
    Loop: SLoop,
    Operations: IOperations,
    ScratchFontFamily: typeof _ScratchFontFamily,
    VoiceType: typeof VOICE_ID,
    SpeechGender: typeof SPEECH_GENDER
    SpeechLocale: typeof SPEECH_LOCALE,
    StageBounds: stageBounds,
    Variable: SVariable,
}
