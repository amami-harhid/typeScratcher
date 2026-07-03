/**
 * いろいろ試そう-006
 * 
 * 質問と回答
 */
import { Typescratcher as Ts } from "../../src/";
import { Sprite } from "../../src/";

//Ts.Env.debugMode = true;
//Ts.Env.fps = 5;

// 【画像読み込み】
import catSvg from '../assets/cat.svg';
const CatImage = new Ts.Image( {catSvg} );
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});
// 【音読み込み】
import ChillWav from '../assets/Chill.wav';
const ChillSound = new Ts.Sound({ChillWav});

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// サウンドをスプライトへ追加
cat.Sound.add([ ChillSound ]);

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const volume = Ts.Variable.number( 100 ); 
Ts.Variable.monitoring( { volume } );
const pitch = Ts.Variable.number( 0 );
Ts.Variable.monitoring( { pitch } );

cat.Event.flagPresser().func = async function*(this:Sprite){
    volume.value = 100;
    pitch.value = 0;    
    // ずっと繰り返し音を鳴らす
    for(;;) {
        await this.Sound.playUntilDone(ChillSound);
        yield;
    }
};

cat.Event.keyPresser( 'a' ).func = async function*(this:Sprite) {
    // ボリュームを あげる
    this.Sound.addVolume(ChillSound, 5);
    volume.value = this.Sound.getVolume(ChillSound);
}
cat.Event.keyPresser( 'd' ).func = async function*(this:Sprite) {
    // ボリュームを さげる
    this.Sound.addVolume(ChillSound, -5);
    volume.value = this.Sound.getVolume(ChillSound);
}
cat.Event.keyPresser( 'w' ).func = async function*(this:Sprite) {
    // ピッチを あげる
    this.Sound.addPitch(ChillSound, 5);
    pitch.value = this.Sound.getPitch(ChillSound);
}
cat.Event.keyPresser( 'x' ).func = async function*(this:Sprite) {
    // ピッチを さげる
    this.Sound.addPitch(ChillSound, -5);
    pitch.value = this.Sound.getPitch(ChillSound);
}


// 開始
Ts.engine.start();
