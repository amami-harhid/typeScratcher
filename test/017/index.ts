/**
 * 基本-017
 * 変数モニター
 */
import { Typescratcher as Ts } from '../../index';
import type { Sprite, Stage as _ } from '../../index';

// 【画像 import 】
import CatSvg from "../assets/cat.svg";
import BasketballPng from "../assets/Basketball 2.png";

const life = Ts.Var.num({value:100});

Ts.Monitors.addVar({life: life});

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
    // ずっと繰り返す
    for (;;) {
        if (this.Sensing.mouse.isDown) {
            this.Control.clone();
        }
        //await this.Control.wait(2);
        // クリックしたとき
        // if (this.Sensing.mouse.isTouching && this.Sensing.mouse.isDown) {
        //     this.Control.clone(); 
        //     this.Sound.play(CatSound);
        // }
        life.value += 1;
        Ts.Monitors.drawMonitors();
        yield;
    }
};
// クローンされたとき
// クローンすると本体の半透明効果が一瞬無くなる
cat.Event.cloned().func = async function* (this: Sprite) {
    // this.Sound.setVolume(CatSound, 10);
    // this.Sound.setPitch(CatSound, 30);
    //this.Looks.show();  
    this.Looks.effect.set(Ts.ImageEffective.GHOST, 0);
    const mousePos = {x:this.Sensing.mouse.x, y:this.Sensing.mouse.y}
    this.Motion.position.xy = [mousePos.x, mousePos.y];
    this.Looks.size.scale = [15, 15]; //<=== スケールを変更したらレンダーへ教えないといけなそう。
    this.Motion.rotation.style = Ts.Rotation.ALL_AROUND;
    const random = Ts.Utils.randomValue(0, 360);
    this.Motion.direction.degree = random;
    for (;;) {
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        if(this.Sensing.sprite.isTouching([cat])) {
            this.Looks.hide();
            break;
        }
        this.Looks.costume.next();
        yield;
    }
    this.Control.removeClone();
};

// 開始
Ts.engine.start();
