/**
 * いろいろ試そう-012
 *
 * 文字を表示する
 */
import { Typescratcher as Ts } from "../../src";
import type { SvgImageAttributes } from "../../src";

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
const helloImage = new Ts.FontImage( attribute );
await helloImage.Text.textToSvg( HELLO );

// 文字スプライトを作成
const moji = new Ts.Sprite( "moji" );
moji.Costume.add( helloImage );
moji.Looks.size.scale = [ 50, 50 ];


// 開始
Ts.engine.start();
