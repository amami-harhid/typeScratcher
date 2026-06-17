/**
 * Main
 * 
 * 【Buffer】
 * BufferはNodeAPIでありNODEの外では利用できない仕様である
 * Scratch-Render内で使用するGraphemeBreaker.jsの中でBufferを
 * 参照しているがこの参照には工夫を要する。
 * 
 * 【工夫点】
 * ブラウザ動作を前提とし Bufferをグローバル変数にする
 * 
 * 【import の eagerモード】
 * import { Buffer } from 'buffer';のようにBufferをimportで読み込む
 * 場合、【工夫】の対処ではまだ不完全である。
 * importの読み込みは非同期型(動的)、requireは同期型であるため
 * Bufferのimport読み込みを完了させる前にWindow.Bufferとして格納してしまうことがあり得る
 * よって、Bufferは「同期型」で読み込みたい
 * Bufferをrequireで読み込むか、またはawait import()で読み込むかの選択になる。
 * 
 * 今回は、await import()で読み込むことにする（ せっかくだから ）。
 * ただし、await import()では webpackは出力ファイルを自動的に分割してしまう。
 * 出力ファイルを１つにまとめたい気持ちがあり、eagerモードで import()することに
 * した。
 */
// 【eagerモード】の例
// const { Buffer } = await import(/* webpackMode: "eager" */ 'buffer');

// ここからコードです。
import 'regenerator-runtime';
import 'core-js';
import { Version } from './version';

import * as GUI from './src/lib/gui';

import { Engine, engine } from './src/lib/engine';
import { Image as _Image } from './src/lib/image';
import { ImageEffective, type ImageEffectiveType } from './src/type/entity/ImageEffective';
import { KEYBOARD_KEYS, type KEYBOARD_KEYS_Type } from './src/type/engine/keyboad';
import { Rotation, type RotationStyle } from './src/type/entity/RotationStyle';
import { Sound as _Sound} from './src/lib/sounds';
import { Sprite as _Sprite } from './src/lib/entity/sprite';
import { Stage as _Stage } from './src/lib/entity/stage';
import { ScratchFontFamily as _ScratchFontFamily } from './src/type/svgText';
import { Timer } from './src/lib/utils/timer';
import { textToSvg } from './src/lib/svgText';
import { Loop } from './src/lib/engine/loop';
import type { createSvgImageAttributes } from './src/type/image';
import type { IEngine } from './src/type/engine';
import type { IImage } from './src/type/image';
import type { ISprite, SSprite } from './src/type/entity/sprite';
import type { IStage, SStage } from './src/type/entity/stage';
import type { ITextToSvg } from './src/type/svgText';
import type { SImage } from './src/type/image';
import type { SLoop } from './src/lib/engine/loop';
import type { SSound } from './src/type/sound';
import { SPEECH_LOCALE } from './src/type/speech/IVoice';
import { VOICE_ID } from './src/type/speech/IVoice';
/**
 * 【2026/06/06】
 *  scratch-render@2.0.356 では、グローバルのBufferを使っていない（様子）
 *  (GraphemeBreaker.jsで使っていない)
 *  よってBufferをグローバル変数にする対応は廃止する
 */
// const { Buffer } = await import(/* webpackMode: "eager" */ 'buffer');
// window.Buffer = window.Buffer || Buffer
// console.log('Buffer')

const Initialize = async function() {
    console.log(`Library Version = "${Version}"`);
    GUI.guiInitialize();    
};


// 表示初期化
await Initialize();

const stageWidth = (engine as Engine).render.stageWidth;
const stageHeight = (engine as Engine).render.stageHeight;
const stageBounds: {w: number, h: number} = {
    w: stageWidth,
    h: stageHeight,
}

console.log(stageWidth, stageHeight);


type ExportType = {
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
    Timer: typeof Timer,
    SpeechLocale: typeof SPEECH_LOCALE,
    VoiceType: typeof VOICE_ID,
    StageBounds: typeof stageBounds,
}
export const Typescratcher: ExportType = {
    Sprite: _Sprite as SSprite,
    Stage: _Stage as SStage,
    Image: _Image as SImage,
    Sound: _Sound as SSound,
    ImageEffective: ImageEffective as ImageEffectiveType,
    Rotation: Rotation as RotationStyle,
    Keyboard: KEYBOARD_KEYS as KEYBOARD_KEYS_Type,
    engine: engine as IEngine,
    textToSvg: textToSvg as ITextToSvg,
    Loop: Loop as SLoop,
    Timer: Timer as typeof Timer,
    ScratchFontFamily: _ScratchFontFamily as typeof _ScratchFontFamily,
    SpeechLocale: SPEECH_LOCALE,
    VoiceType: VOICE_ID,
    StageBounds: stageBounds,
} as const;

export type Sprite = ISprite;
export type Stage = IStage;
export type Image = IImage;
export type ICreateSvgImageAttributes = createSvgImageAttributes;