import { Typescratcher as TS } from '../../..';
import { TextAttributes } from 'src/type/text';

const textAttr: TextAttributes = {
    font_size: 90,
    font_weight: 'bolder',
    fill: 'blue',
    font: 'Marker',
};
const Text_01 = "1";
const Text_02 = "2";
const Text_03 = "3";

const image01 = await TS.Image.createSvgImage({Text_01}, textAttr);
const image02 = await TS.Image.createSvgImage({Text_02}, textAttr);
const image03 = await TS.Image.createSvgImage({Text_03}, textAttr);

const num = new TS.Sprite('num');
num.Costume.add( [ image01, image02, image03] );
num.Looks.size.scale = [400,300];
num.Looks.effect.set(TS.ImageEffective.GHOST, 20);

export {num};