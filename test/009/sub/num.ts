import { Typescratcher as TS } from '../../..';
import type { Image } from '../../..';
import type { SvgImageAttributes } from '../../..';

const textAttr: SvgImageAttributes = {
    font_size: 90,
    font_weight: 'bolder',
    fill: 'white'
};

const imageArr: Image[] = []
// eslint-disable-next-line 
for(const idx of TS.Loop.Iterator(10, 1)){
    const _image = {};
    _image[`Text_${idx}`] = `${idx}`;
    const image = await TS.Image.createSvgImage(_image, {...textAttr, font_size: (idx<10)? 80:60, fill:(idx%2==0)?'red':'white' });
    imageArr.push(image);
}

const num = new TS.Sprite('num');
num.Costume.add( imageArr );
num.Looks.size.scale = [700,500];
num.Looks.effect.set(TS.ImageEffective.GHOST, 20);

export {num};