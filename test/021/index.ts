/**
 * いろいろ試そう-012
 * 
 * 文字を表示する
 */
import { Typescratcher as Ts } from "../../src";
import { Sprite , SvgImageAttributes} from "../../src";

Ts.Env.debugMode = true;

// 【画像読み込み】
import catSvg from '../assets/cat.svg';
const CatImage = new Ts.Image( {catSvg} );
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');

// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// 大きさの設定
cat.Looks.size.scale = [250, 250];

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 文字列イメージ化
const HELLO = 'Hello world';
const attribute: SvgImageAttributes = {
    fill: '#f0f0f0', // 文字色
    font_weight: 'bold',
    scratch_font_family: Ts.ScratchFontFamily.Handwriting
};
const helloImage = await Ts.Image.createSvgImage({HELLO}, attribute); // ESLint で await をつける

const moji = new Ts.Sprite('moji');
moji.Costume.add( [helloImage] ); // <--- 文字中央にならない！！改良必要。
moji.Looks.layer.gotoBack();

// 変数
const mouse = Ts.Variable.string( '' ); // マウス
Ts.Variable.monitoring( { mouse } );

cat.Event.flagPresser().func = async function*(this:Sprite){
    this.Looks.size.scale = [250, 250];
    mouse.text = '' // 初期化
    for(;;) {
        const _mouse = `x=${this.Sensing.mouse.x}, y=${this.Sensing.mouse.y}`;
        mouse.text = _mouse;
        yield;
    }
};


moji.Event.flagPresser().func = async function*(this: Sprite) {
    const bounds = this.Looks.size.drawingSize;
    console.log(bounds.left, bounds.right);
    console.log('bounds center x = ', bounds.left + bounds.width/2);
    console.log(this.Motion.position.x);
}
// 開始
Ts.engine.start();
