/**
 * TEST 014
 * ◇ ステージの端を超えていこうとするとき、ステージの端にひっかかる。
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage as _ } from '../../src';

import CatSvg from '../assets/cat.svg';
import CatWav from '../assets/Cat.wav';

const CatImage = new TS.Image({CatSvg});
const CatSound = new TS.Sound({CatWav});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);
cat.Sound.add( [CatSound] );

// 旗を押したときのイベント定義
cat.Event.flagPresser().func = async function*(this:Sprite){
    // 回転を「回転しない」にする
    this.Motion.rotation.style = TS.Rotation.DONT_ROTATE;
    // 角度を設定する
    this.Motion.direction.degree = 90;
    // 位置を中央にする
    this.Motion.position.xy = [0, 0]; 
    // 大きさを大きくする( 横、縦のパーセンテージ )
    this.Looks.size.scale = [500, 500];
}

// 旗を押したときのイベント定義
cat.Event.flagPresser().func = async function*(this:Sprite){
    // ずっと繰り返す
    for(;;){
        // マウスが触れたとき
        if(this.Sensing.mouse.isTouching) {
            console.log('isTouch')
            this.Sound.play(CatSound);
        }
        yield;
    }
}
TS.engine.start();
