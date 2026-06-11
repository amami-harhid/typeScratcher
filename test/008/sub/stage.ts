import { Typescratcher as TS } from '../../..';

import BasketballPng from '../../assets/Basketball 2.png';
import BlueskySvg from '../../assets/Blue Sky.svg';

const BasketballImage = new TS.Image({BasketballPng});
const BlueskyImage = new TS.Image({BlueskySvg});

const stage = new TS.Stage();
stage.Backdrop.add([BasketballImage, BlueskyImage]);
export {stage};