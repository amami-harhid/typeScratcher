import { Typescratcher as TS } from '../../..';

import CatSvg from '../../assets/cat.svg';
const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([ CatImage]);
cat.Looks.layer.gotoBack();

export {cat};