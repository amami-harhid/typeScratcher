/**
 * いろいろ試そう-008
 * 
 * 音の効果を変えてみよう（音量・ピッチ）
 */
import { Typescratcher as Ts } from "../../src";
import type { Sprite, BubbleProperties } from "../../src";

Ts.Env.bubbleScaleLinkedToSprite = true;

// 【画像読み込み】
import catSvg from '../assets/cat.svg';
const CatImage = new Ts.Image( {catSvg} );
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( CatImage );
cat.Motion.position.xy = [ 0, 0 ];
cat.Motion.direction.degree = 95;


// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( WaterImage );

// 変数
const volume = Ts.Variable.number( 100 ); 
Ts.Variable.monitoring( { volume } );
const pitch = Ts.Variable.number( 0 );
Ts.Variable.monitoring( { pitch } );

cat.Event.flagPresser().func = async function*(this:Sprite){
    // ずっと繰り返し音を鳴らす
    for(;;) {
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
};

cat.Event.flagPresser().func = async function*(this:Sprite){
    // ずっと繰り返し音を鳴らす
    for(;;) {
        this.Looks.size.scale = [-300, 20];
        this.Looks.bubble.say('Hello');
        await this.Control.wait(2);
        this.Looks.size.scale = [20, 300];
        const _prop: BubbleProperties = {scale: {w: 50, h:50}};
        this.Looks.bubble.think('Hello', _prop);
        await this.Control.wait(2);
        yield;
    }
};


// 開始
Ts.engine.start();
