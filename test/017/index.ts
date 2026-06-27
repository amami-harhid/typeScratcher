/**
 * 基本-017
 * 変数モニター
 * 表示・非表示を切り替える
 */
import { Typescratcher as Ts } from '../../src/index';
import type { Sprite, Stage } from '../../index';

// 【画像 import 】
import CatSvg from "../assets/cat.svg";
import BasketballPng from "../assets/Basketball 2.png";

// 【モニター用の変数を用意】
const clone = Ts.Variable.number(0); // 変数初期値設定
const cloneCounterStr = Ts.Variable.string(''); // 変数初期値設定
Ts.Variable.monitoring({clone}); // モニター開始
Ts.Variable.monitoring({cloneCounterStr}); // モニター開始
clone.scale = {w: 100, h:100};
cloneCounterStr.scale = {w: 100, h:100};

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
cat.Event.flagPresser().func = async function* (this: Sprite) {
    // 回転を「回転しない」にする
    this.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
    // 角度を設定する
    this.Motion.direction.degree = 90;
    // 位置を中央にする
    this.Motion.position.xy = [0, 0];
    // 大きさを大きくする( 横、縦のパーセンテージ )
    this.Looks.size.scale = [200, 200];
    // 半透明にする
    this.Looks.effect.set(Ts.ImageEffective.GHOST, 50);
};

// 旗を押したときのイベント定義
cat.Event.flagPresser().func = async function* (this: Sprite) {
    clone.value = 0;
    cloneCounterStr.text = 'START';
    // ずっと繰り返す
    for (;;) {
        if (this.Sensing.mouse.isDown) {
            this.Control.clone();
            clone.value += 1;
            //cloneCounterStr.text = `${clone.value}個`;
        }
        yield;
    }
};
// クローンされたとき
// クローンすると本体の半透明効果が一瞬無くなる
cat.Event.cloned().func = async function* (this: Sprite) {
    this.Looks.effect.set(Ts.ImageEffective.GHOST, 0);
    const mousePos = {x:this.Sensing.mouse.x, y:this.Sensing.mouse.y}
    this.Motion.position.xy = [mousePos.x, mousePos.y];
    this.Looks.size.scale = [15, 15]; //<=== スケールを変更したらレンダーへ教えないといけなそう。
    this.Motion.rotation.style = Ts.Rotation.ALL_AROUND;
    const random = Ts.Utils.randomValue(0, 360);
    this.Motion.direction.degree = random;
    for (;;) {
        this.Motion.move.steps(2);
        this.Motion.move.ifOnEdgeBounce();
        if(this.Sensing.sprite.isTouching([cat])) {
            this.Looks.hide();
            break;
        }
        if(this.Sensing.edge.isTouching){
            this.Looks.hide();
            break;
        }
        this.Looks.costume.next();
        yield;
    }
    clone.value -= 1;
    cloneCounterStr.text = `${clone.value}個`;
    this.Control.removeClone();
};
let cloneCounterStrView = true;
stage.Event.keyPresser(Ts.Keyboard.SPACE).func = async function*(this: Stage) {
    cloneCounterStrView = !(cloneCounterStrView);
    if(cloneCounterStrView===true){
        clone.show();
        cloneCounterStr.show();
    }else{
        clone.hide();
        cloneCounterStr.hide();    
    }
    //Ts.Variable.reposition();
}

// 開始
Ts.engine.start();
