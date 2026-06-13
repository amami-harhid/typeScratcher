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
    this.Motion.direction.degree = 90;
    for(;;){
        this.Motion.direction.degree += 5;
        this.Control.clone();
        await this.Control.wait(0.01);
        this.Looks.effect.change(TS.ImageEffective.GHOST, 5);
        this.Looks.effect.change(TS.ImageEffective.COLOR, 5);
        if(this.Looks.effect.get().ghost == 100) {
            this.Looks.effect.set(TS.ImageEffective.GHOST, 0);
        }
        yield;
    }
}

cat.Event.cloned().func = async function*(this:Sprite) {
    //this.Motion.direction.degree += 20;
    this.Looks.size.scale = [10, 10];
    this.Looks.effect.change(TS.ImageEffective.COLOR, 25);
    for(;;) {
        this.Motion.move.steps(10);
        this.Looks.size.w += 2;
        this.Looks.size.h += 2;

        if(this.Sensing.edge.isTouching === true) {
            break;
        }
        yield;
    }
    this.Control.removeClone();
}


stage.Event.flagPresser().func=async function*(this: Stage) {
    for(;;){
        this.Backdrop.next();
        await this.Control.wait(1);
        yield;
    }
}

TS.engine.start();
