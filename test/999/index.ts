/**
 * 基本-999
 */
import { Typescratcher as Ts } from '../../src/importer';
import type { Sprite, Stage as _ } from '../../src/importer';

// 【画像 import 】
import CatSvg from "../assets/cat.svg";
import Cat2Svg from "../assets/cat2.svg";
import BasketballPng from "../assets/Basketball 2.png";

// 【音 import】
import CatWav from "../assets/Cat.wav";

// イメージ作成
const CatImage = new Ts.Image({ CatSvg });
const Cat2Image = new Ts.Image({ Cat2Svg });
const BasketballImage = new Ts.Image({ BasketballPng });

// サウンド作成
const CatSound = new Ts.Sound({ CatWav });

// スプライト作成
const cat = new Ts.Sprite("apple");
cat.Costume.add([CatImage, Cat2Image]); // イメージを１個追加
cat.Sound.add([CatSound]); // サウンドを１個追加
cat.Sound.setVolume(CatSound, 10);
cat.Sound.setPitch(CatSound, 30);

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
    this.Motion.point.toRandom(); // どこかの方向へ向く
    for (;;) {
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        if(this.Sensing.edge.isTouching){
            this.Sound.play(CatSound);
        }
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
