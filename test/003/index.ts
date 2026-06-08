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
amon.Image.add([AmonImage]);
amon.Motion.Direction.degree = 95;

const stage = new TS.Stage();
stage.Image.add([BlueskyImage, BasketballImage]);

amon.Event.flagPresser().func = async function*(this: Sprite){
    this.Image.Effect.clear();
    this.Motion.Position.xy = [0,0];
    for(;;){
        this.Motion.Move.steps(10);
        this.Motion.Move.ifOnEdgeBounce();
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this:Stage) {
    this.Image.Effect.clear();
    let fugo = 1;
    let count = 0;
    for(;;) {
        this.Backdrop.next();
        await TS.Timer.wait(0.5);
        if(count > 10){
            fugo *= -1;
            count = 0;
        }
        this.Image.Effect.change(TS.ImageEffective.COLOR, 25*fugo);
        this.Image.Effect.change(TS.ImageEffective.MOSAIC, 25*fugo);
        count+=1;
        yield;
    }
}
TS.playground.start();
