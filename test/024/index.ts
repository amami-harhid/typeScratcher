/**
 * いろいろ試そう-023
 * 
 * フォントロード
 */
import { Typescratcher as Ts } from "../../src";
import { Sprite, SvgImageAttributes } from "../../src";

//Ts.Env.debugMode = true;
// 【MAP読み込み】
import { Map01, WallWidth, WallHeight } from "./sub/wall";
console.log(WallWidth, WallHeight)
import wallPng  from './assets/wall.png';
const WallImage = new Ts.Image({wallPng});

// 【画像読み込み】
import SlimeSvg from './assets/slime_a.svg';
const SlimeImage = new Ts.Image({SlimeSvg});
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});

// 【スプライト】壁
const wall = new Ts.Sprite('wall');
wall.Costume.add( [WallImage] );
wall.Looks.hide();
const w = WallWidth;
const h = WallHeight;
wall.Looks.size.w = w;
wall.Looks.size.h = h;

wall.Event.flagPresser().func = async function*(this:Sprite){
    let y = - Math.floor( Map01.length/2 );
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const _row of Map01) {
        let x = - Math.floor( _row.length / 2 ); 
        //console.log(_row);
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(const _elem of _row) {
            console.log(x,y)
            if(_elem == 1) {
                //const pos: number[] = [ w*x,  h*y ];
                //console.log( pos);
                this.Motion.position.xy =  [ w*x,  -h*y];
                this.Control.clone();
            }
            x+=1;
        }
        y+=1;
    }

}
wall.Event.cloned().func = async function*(this:Sprite) {
    this.Looks.show();
}

// 【スプライト】(Spriteスライム)
const slime = new Ts.Sprite('slime');

// 画像をスプライトへ追加
slime.Costume.add( [SlimeImage] );
slime.Motion.position.xy = [ 0, 0 ];


// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 文字列イメージ化
const HELLO = 'Hello world';
const attribute : SvgImageAttributes = {
    fill: '#f0f0f0', // 文字色
    font_family: Ts.ScratchFontFamily.Scratch
};
const helloImage = new Ts.FontImage(attribute);
await helloImage.textToSvg(HELLO);

const moji = new Ts.Sprite('moji');
moji.Costume.add( [helloImage] );
moji.Looks.layer.gotoBack();


// 変数
const touch = Ts.Variable.string( '' ); // タッチ
Ts.Variable.monitoring( { touch } );
touch.hide();


slime.Event.flagPresser().func = async function*(this:Sprite){
    // 大きさの設定
    this.Looks.size.w = w*0.8;
    this.Looks.size.h = h*0.8;
    touch.text = '' // 初期化

};
// 【旗】が押されたとき
slime.Event.flagPresser().func = async function*(this:Sprite){
    for(;;) {
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.UP)) {
            this.Motion.position.y += h;
            if(this.Sensing.sprite.isTouching([wall], true)) {
                this.Motion.position.y -=h;
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.DOWN)) {
            this.Motion.position.y -= h;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Motion.position.y +=h;
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.RIGHT)) {
            this.Motion.position.x += w;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Motion.position.x -=w;
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.LEFT)) {
            this.Motion.position.x -= w;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Motion.position.x +=w;
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.ANY)) {
            await this.Control.waitUntil(()=>this.Sensing.keyboard.isNotDown(Ts.Keyboard.ANY));
        }
        yield;
    }
}
// 【旗】が押されたとき
slime.Event.flagPresser().func = async function*(this:Sprite){
    /** 色の変化量 */
    const changeColor = 15;
    for(;;) {
        this.Looks.effect.change(Ts.ImageEffective.COLOR, changeColor); // 色の効果を変える
        await this.Control.wait(0.1);
        yield;
    }
};


// 開始
Ts.engine.start();
