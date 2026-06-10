import { Typescratcher as TS } from '../../..';

import BasketBallPng from '../../assets/Basketball 2.png';

const BasketballImage = new TS.Image({BasketBallPng});

const stage = new TS.Stage();
stage.Backdrop.add([BasketballImage]);
console.log('================')
export {stage};