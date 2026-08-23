import type { ImageEffectiveType } from './entity/ImageEffective';
import type { KEYBOARD_KEYS_Type } from './engine/keyboad';
import type { RotationStyle } from './entity/RotationStyle';
import { SPEECH_GENDER } from './speech';
import { ScratchFontFamily as _ScratchFontFamily } from './svgText';
import type { IEngine } from './engine';
import type { TEnv } from './common/env';
import type { SImage } from './image';
import type { SLoop } from './engine/loop';
import type { IOperations } from './operations';
import type { SSound } from './sound';
import type { SSprite } from './entity/sprite';
import type { SStage } from './entity/stage';
import { SPEECH_LOCALE } from './speech/IVoice';
import { SPEECH_VOICE_ID } from './speech/IVoice';
import { SVariable } from './entity/monitor/SVariable';
import { SFont } from './font';
import { SFontImage } from './font/fontImage';
import { SVirtualPad } from './gui/virtualPad';
type stageBounds = {w: number, h: number};

export type ExportType = {

    /**
     * Sprite
     * ---
     * スプライト
     */
    Sprite: SSprite,
    /**
     * Stage
     * ---
     * ステージ
     */
    Stage: SStage,
    /**
     * Image
     * ---
     * イメージデータ
     */
    Image: SImage,
    /**
     * Sound
     * ---
     * サウンドデータ
     */
    Sound: SSound,
    /**
     * Font
     * ---
     * フォントデータ
     */
    Font: SFont,
    /**
     * FontImage
     * ---
     * フォントイメージデータ
     */
    FontImage: SFontImage,
    /**
     * Rotation Style
     * ---
     * 回転方法
     */
    Rotation: RotationStyle,
    /**
     * ImageEffective type
     * ---
     * イメージ効果のタイプ
     */
    ImageEffective: ImageEffectiveType,
    /**
     * Keyborad keys
     * ---
     * キーボードのキー
     */
    Keyboard: KEYBOARD_KEYS_Type
    /**
     * Engineインスタンス
     * ---
     * エンジンインスタンス
     */
    engine: IEngine,
    /** 
     * Environment
     * ---
     * 環境設定 
     */
    Env: TEnv,
    /**
     * TextToSvg
     */
    //textToSvg: ITextToSvg,
    /**
     * Loop Support
     * ---
     * ループ支援
     */
    Loop: SLoop,
    /**
     * Operation
     * ---
     * 演算
     */
    Operations: IOperations,
    /**
     * Scratch FontFamilies
     * ---
     * Scatch3 フォント
     */
    ScratchFontFamily: typeof _ScratchFontFamily,
    /**
     * Voice type
     * ---
     * Scratch3 声の種類
     */
    SpeechVoiceType: typeof SPEECH_VOICE_ID,
    /**
     * Speech gender
     * ---
     * スピーチの性別
     */
    SpeechGender: typeof SPEECH_GENDER
    /**
     * Speech locale
     * ---
     * スピーチの地域(国)
     */
    SpeechLocale: typeof SPEECH_LOCALE,
    /**
     * Stage bounds
     * ---
     * ステージの大きさ
     */
    StageBounds: stageBounds,
    /**
     * Variable
     * ---
     * 変数定義
     */
    Variable: SVariable,

    /** バーチャルパッド */
    VirtualPad: SVirtualPad,
}
