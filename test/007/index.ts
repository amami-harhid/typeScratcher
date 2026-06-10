/**
 * TEST 007
 * ◇ 文字列をSVG化してスプライトで表示
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';
//import type { TextAttributes } from 'src/type/text';
import { TextAttributes } from '../../src/type/text';


import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketBallPng from '../assets/Basketball 2.png';
const textAttr: TextAttributes = {
    font_size: 90,
    font_weight: 'bolder',
    fill: 'red'
};
const TextSvg01 = await TS.textToSvg.createSvgData('1', textAttr);
const TextSvg02 = await TS.textToSvg.createSvgData('2', textAttr);
const TextSvg03 = await TS.textToSvg.createSvgData('3', textAttr);
const TextSvg04 = await TS.textToSvg.createSvgData('4', textAttr);

const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketBallPng});
const CatImage = new TS.Image({CatSvg});
const TextImage01 = new TS.Image({TextSvg01});
const TextImage02 = new TS.Image({TextSvg02});
const TextImage03 = new TS.Image({TextSvg03});
const TextImage04 = new TS.Image({TextSvg04});

const cat = new TS.Sprite('cat');
cat.Costume.add([ TextImage01,TextImage02,TextImage03,TextImage04, CatImage]);

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);

cat.Event.keyPresser("a").func = async function*(this: Sprite) {

    this.Backdrop.next();
    this.Costume.next();

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
