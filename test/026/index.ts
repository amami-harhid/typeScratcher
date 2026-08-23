/**
 * いろいろ試そう-012
 *
 * 文字を表示する
 */
import { Typescratcher as Ts, type Sprite } from "../../src";
import type { SvgImageAttributes, FontImageAttribute } from "../../src";

// 【画像読み込み】
// import catSvg from '../assets/cat.svg';
// const CatAImage = new Ts.Image( {catSvg} );
import BlueskySvg from "../assets/Blue Sky.svg";

const BlueSkyImage = new Ts.Image( {BlueskySvg} );

// TODO
// スプライト作成＋コスチューム追加をしておかないと、背景を追加できない？

// スプライト作成
//const cat = new Ts.Sprite( "cat" );
//cat.Costume.add( CatAImage ); // イメージを追加

// 【ステージ】( blueSky )
const stage = new Ts.Stage();
stage.Backdrop.add( BlueSkyImage );

// 文字列イメージ化
const HELLO = "Ohoo my typescratcher";
const attribute : SvgImageAttributes = {
    fill: "#f00000", // 文字色
    font_family: Ts.ScratchFontFamily.Scratch,
};
const attr : FontImageAttribute = {
    text: HELLO,
    attributes: attribute,
}
const helloImage = new Ts.FontImage( {attr} );
//helloImage.Text.textToSvg( HELLO );

// 文字スプライトを作成
const moji = new Ts.Sprite( "moji" );
moji.Costume.add( helloImage );
moji.Looks.size.scale = [ 50, 50 ];

// helloImage.Text.textToSvg の改良
// const text : SvgImageAttributes = {
//    text: HELLO, // 文字列
//    fill: "#f00000", // 文字色
//    font_family: Ts.ScratchFontFamily.Scratch,
// };
// const helloImage = new Ts.FontImage( { text } );
// // FontImage.load() のなかで、await textToSvg() を実行する！
//
// FontImageをコスチュームとしてもつスプライトのクローンは許すか？
// ==> クローン時に他のイメージと同様に引き継ぐようにしないといけない！
// 
// FontImageをステージ背景に追加することを許すか？
// 
// FontImage へテキストを渡すと、スキンを更新して切り替えるようにしたい。
// ( await をつけず反映にタイムラグあり！でＯＫ)
// (1) new FontImage( ) の引数をテキストとアトリビュートにする
// (2) FontImageのインスタンスを Costume.add に入れる
// (3) Spriteの init で loadする

moji.Event.flagPresser().func = async function*(this: Sprite) {
    attr.text = 'GREEN FLAG PRESSED!!';
    helloImage.changeText(attr.text);
    await this.Control.wait(1);
    let counter = 0;
    for(;;){
        helloImage.changeText(`${++counter}`);
        this.Looks.size.scale = [ 250, 250 ];
        await this.Control.wait(1);
        yield;
    }
}

// 開始
Ts.engine.start();
