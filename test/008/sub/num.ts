import { Typescratcher as TS } from '../../..';
import type { Image } from '../../..';
import { TextAttributes } from 'src/type/text';

const textAttr: TextAttributes = {
    font_size: 90,
    font_weight: 'bolder',
    fill: 'white'
};

const imageArr: Image[] = []
// eslint-disable-next-line 
for(const idx of TS.Loop.Iterator(20, 1)){
    const _image = {};
    _image[`Text_${idx}`] = `${idx}`;
    console.log(_image);
    const image = await TS.Image.createSvgImage(_image, textAttr);
    imageArr.push(image);
}

const num = new TS.Sprite('num');
num.Costume.add( imageArr );
num.Looks.size.scale = [700,500];
num.Looks.effect.set(TS.ImageEffective.GHOST, 20);

export {num};