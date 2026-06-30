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

import * as GUI from './lib/gui';

import { ExportType } from './type';

import { Engine, engine } from './lib/engine';
import { Env } from './lib/common/env';
import { Image as _Image } from './lib/image';
import { ImageEffective, type ImageEffectiveType } from './type/entity/ImageEffective';
import { KEYBOARD_KEYS, type KEYBOARD_KEYS_Type } from './type/engine/keyboad';
import { Rotation, type RotationStyle } from './type/entity/RotationStyle';
import { Sound as _Sound} from './lib/sounds';
import { Sprite as _Sprite } from './lib/entity/sprite';
import { Stage as _Stage } from './lib/entity/stage';
import { ScratchFontFamily as _ScratchFontFamily } from './type/svgText';
import { textToSvg } from './lib/svgText';
import { Loop } from './lib/engine/loop';
import { Variable } from './lib/entity/monitor/variable';
import { Utils } from './lib/utils/utils';
import type { createSvgImageAttributes } from './type/image';
import type { IEngine } from './type/engine';
import type { TEnv } from './type/common/env';
import type { IImage } from './type/image';
import type { ISprite, SSprite } from './type/entity/sprite';
import type { IStage, SStage } from './type/entity/stage';
import type { ITextToSvg } from './type/svgText';
import type { SImage } from './type/image';
import type { SLoop } from './lib/engine/loop';
import type { SSound } from './type/sound';
import type { SVariable } from './type/entity/monitor/SVariable';
import { SPEECH_LOCALE } from './type/speech/IVoice';
import { VOICE_ID } from './type/speech/IVoice';
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

// ステージBounds( 480 360 )
const stageWidth = (engine as Engine).render.stageWidth;
const stageHeight = (engine as Engine).render.stageHeight;
const stageBounds: {w: number, h: number} = {
    w: stageWidth,
    h: stageHeight,
}

export const Typescratcher: ExportType = {
    engine: engine as IEngine,
    Env: Env as TEnv,
    Image: _Image as SImage,
    ImageEffective: ImageEffective as ImageEffectiveType,
    Keyboard: KEYBOARD_KEYS as KEYBOARD_KEYS_Type,
    Loop: Loop as SLoop,
    Rotation: Rotation as RotationStyle,
    ScratchFontFamily: _ScratchFontFamily as typeof _ScratchFontFamily,
    SpeechLocale: SPEECH_LOCALE,
    Sound: _Sound as SSound,
    Sprite: _Sprite as SSprite,
    Stage: _Stage as SStage,
    StageBounds: stageBounds,
    textToSvg: textToSvg as ITextToSvg,
    Variable: Variable as SVariable,
    VoiceType: VOICE_ID,
    Utils: Utils,
    
} as const;

export type Sprite = ISprite;
export type Stage = IStage;
export type Image = IImage;
export type ICreateSvgImageAttributes = createSvgImageAttributes;