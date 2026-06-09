/**
 * TEST 002 ( Pen )
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite } from '../../index';

import AmonPng from '../assets/Amon.png';

const appleImage = new TS.Image( {AmonPng} ); 
const apple = new TS.Sprite('apple');
apple.Costume.add([appleImage]);
apple.Motion.direction.degree = 95;

apple.Pen.prepare();
apple.Pen.penDown();

apple.Event.flagPresser().func = async function*(this: Sprite){
    this.Pen.penClear();
    this.Motion.position.xy = [0,0];
    for(;;){
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}
apple.Event.keyPresser("a").func = async function*(this: Sprite){
    this.Pen.penDown();
}
apple.Event.keyPresser("b").func = async function*(this: Sprite){
    this.Pen.penUp();
}
apple.Event.keyPresser("s").func = async function*(this: Sprite){
    this.Pen.stamp();
}

TS.playground.start();
