import { Typescratcher as TS } from '../../../src';
import type { ICreateSvgImageAttributes } from '../../../src';

const textAttr: ICreateSvgImageAttributes = {
    font_size: 90,
    font_weight: 'bolder',
};

// 作り出す文字を定義する 
const Text_01 = '1';
const Text_02 = '2';
const Text_03 = '3';

// 文字変数を渡して、Image を作る
// 文字の色、フォントファミリーを指定する。
const image01 = await TS.Image.createSvgImage(
    {Text_01},
    {...textAttr, font_size:150 ,fill:"red", scratch_font_family: TS.ScratchFontFamily.Handwriting});
const image02 = await TS.Image.createSvgImage(
    {Text_02},
    {...textAttr, font_size: 50, scratch_font_family: TS.ScratchFontFamily.Scratch});
const image03 = await TS.Image.createSvgImage(
    {Text_03},
    {...textAttr, fill:"white", scratch_font_family: TS.ScratchFontFamily.Curly});

// 文字スプライトを生成、コスチュームに文字イメージを追加する 
const num = new TS.Sprite('num');
num.Costume.add( [ image01, image02, image03] );
// 大きさを設定する
num.Looks.size.scale = [400,300];
// やや透明ぎみにする
num.Looks.effect.set(TS.ImageEffective.GHOST, 20);

export {num};