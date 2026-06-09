/**
 * TEST 003 ( Stage 背景 PNG )
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';

import AmonPng from '../assets/Amon.png';
import BasketballPng from '../assets/Basketball 2.png';
import BlueskySvg from '../assets/Blue Sky.svg';

const AmonImage = new TS.Image( {AmonPng} ); 
const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketballPng});

const amon = new TS.Sprite('amon');
amon.Costume.add([AmonImage]);
amon.Motion.direction.degree = 95;

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);

amon.Event.flagPresser().func = async function*(this: Sprite){
    this.Looks.effect.clear();
    this.Motion.position.xy = [0,0];
    for(;;){
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this:Stage) {
    this.Looks.effect.clear();
    let fugo = 1;
    let count = 0;
    for(;;) {
        this.Backdrop.next();
        await TS.Timer.wait(0.5);
        if(count > 10){
            fugo *= -1;
            count = 0;
        }
        this.Looks.effect.change(TS.ImageEffective.COLOR, 25*fugo);
        this.Looks.effect.change(TS.ImageEffective.MOSAIC, 25*fugo);
        count+=1;
        yield;
    }
}
TS.playground.start();
