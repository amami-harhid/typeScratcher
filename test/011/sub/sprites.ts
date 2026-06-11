import { Typescratcher as TS } from '../../..';

import CatSvg from '../../assets/cat.svg';
const CatImage = new TS.Image({CatSvg});

import ArrowSvg from '../../assets/Arrow1-a.svg';
const ArrowImage = new TS.Image({ArrowSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([ CatImage]);
cat.Looks.layer.gotoBack();

const arrow = new TS.Sprite('arrow');
arrow.Costume.add([ ArrowImage ]);

export {cat, arrow};