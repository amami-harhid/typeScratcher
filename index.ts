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

import { Sprite as _Sprite } from './src/lib/entity/sprite';
import { Stage as _Stage } from './src/lib/entity/stage';
import { Image } from './src/lib/image';
import { Sound } from './src/lib/sounds';
import { ImageEffective, type ImageEffectiveType } from './src/type/entity/ImageEffective';
import { Rotation, type RotationStyle } from './src/type/entity/RotationStyle';
import { KEYBOARD_KEYS, type KEYBOARD_KEYS_Type } from './src/type/engine/keyboad';
import { playground } from './src/lib/engine/playground';
import type { ISprite, SSprite } from './src/type/entity/sprite';
import type { IStage, SStage } from './src/type/entity/stage';
import type { SImage } from './src/type/image';
import type { SSound } from './src/type/sound';
import type { IPlayground } from './src/type/engine/playground';

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

type ExportType = {
    Sprite: SSprite,
    Stage: SStage,
    Image: SImage,
    Sound: SSound,
    Rotation: RotationStyle,
    ImageEffective: ImageEffectiveType,
    Keyboard: KEYBOARD_KEYS_Type
    playground: IPlayground,
}
export const Typescratcher: ExportType = {
    Sprite: _Sprite as SSprite,
    Stage: _Stage as SStage,
    Image: Image as SImage,
    Sound: Sound as SSound,
    ImageEffective: ImageEffective as ImageEffectiveType,
    Rotation: Rotation as RotationStyle,
    Keyboard: KEYBOARD_KEYS as KEYBOARD_KEYS_Type,
    playground: playground as IPlayground,
} as const;

export type Sprite = ISprite;
export type Stage = IStage;