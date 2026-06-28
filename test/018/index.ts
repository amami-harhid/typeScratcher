/**
 * 基本-018
 * Bubble.say テスト
 */
import { Typescratcher as Ts } from '../../src/index';
import type { Sprite } from '../../src';

// 【画像 import 】
import CatSvg from "../assets/cat.svg";
import BasketballPng from "../assets/Basketball 2.png";

// 【モニター用の変数を用意】
const clone = Ts.Variable.number(0); // 変数初期値設定
const cloneCounterStr = Ts.Variable.string(''); // 変数初期値設定
Ts.Variable.monitoring({clone}); // モニター開始
Ts.Variable.monitoring({cloneCounterStr}); // モニター開始
//clone.scale = {w: 100, h:100};
//cloneCounterStr.scale = {w: 100, h:100};

// イメージ作成
const CatImage = new Ts.Image({ CatSvg });
const BasketballImage = new Ts.Image({ BasketballPng });


// スプライト作成
const cat = new Ts.Sprite("apple");
cat.Costume.add([CatImage]); // イメージを１個追加

// ステージ作成
const stage = new Ts.Stage();
stage.Backdrop.add([BasketballImage]); // 背景を１個追加

// 旗を押したときのイベント定義
cat.Event.flagPresser().func = async function*(this: Sprite) {

    this.Looks.bubble.say('こんにちは');
    await this.Control.wait(2);
    this.Looks.bubble.say('');

};


// 開始
Ts.engine.start();
