/**
 * TEST 012
 * ◇ Stageをクローンする
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



cat.Event.flagPresser().func=async function*(this:Sprite) {
    this.Motion.position.xy = [0,0];
    this.Motion.direction.degree = 5;
    for(;;){
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}

cat.Event.keyPresser("a").func = async function*(this:Sprite) {
    this.Control.clone();
}

stage.Event.flagPresser().func=async function*(this: Stage) {
    for(;;){
        this.Backdrop.next();
        await this.Control.wait(1);
        yield;
    }
}

TS.engine.start();
