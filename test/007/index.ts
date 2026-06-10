/**
 * TEST 006
 * ◇ Spriteで 背景を no, name で切り替える
 * ◇ 背景変わったときに待つ
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';

import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketBallPng from '../assets/Basketball 2.png';

const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketBallPng});
const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);

cat.Event.keyPresser("a").func = async function*(this: Sprite) {

    this.Backdrop.next();

}

cat.Event.backdropSwitcher(BlueskyImage).func = async function*(this:Sprite) {

    this.Looks.bubble.say(BlueskyImage.name);
    await this.Control.wait(0.5);
    this.Looks.bubble.say('');
}

stage.Event.backdropSwitcher(BasketballImage).func = async function*(this:Stage) {

    cat.Looks.bubble.say("かわっちゃった");
    await this.Control.wait(0.5);
    cat.Looks.bubble.say('');
    await this.Control.wait(1);
    this.Backdrop.next();

}

TS.engine.start();
