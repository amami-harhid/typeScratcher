import { Typescratcher as TS } from '../../..';
import { TextAttributes } from 'src/type/text';

const textAttr: TextAttributes = {
    font_size: 90,
    font_weight: 'bolder',
    fill: 'white'
};
const TextSvg01 = await TS.textToSvg.createSvgData('1', textAttr);
const TextSvg02 = await TS.textToSvg.createSvgData('2', textAttr);
const TextSvg03 = await TS.textToSvg.createSvgData('3', textAttr);
const TextSvg04 = await TS.textToSvg.createSvgData('4', textAttr);

const TextImage01 = new TS.Image({TextSvg01});
const TextImage02 = new TS.Image({TextSvg02});
const TextImage03 = new TS.Image({TextSvg03});
const TextImage04 = new TS.Image({TextSvg04});

const num = new TS.Sprite('num');
num.Costume.add( [TextImage01, TextImage02, TextImage03, TextImage04] );
num.Looks.size.scale = [700,500];
num.Looks.effect.set(TS.ImageEffective.GHOST, 20);

export {num};