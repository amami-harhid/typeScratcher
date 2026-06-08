/**
 * TEST 002 ( Pen )
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite } from '../../index';

import AppleSvg from '../assets/Apple.svg';

const appleImage = new TS.Image( {AppleSvg} ); 
const apple = new TS.Sprite('apple');
apple.Image.add([appleImage]);
apple.Looks.Size.scale = [300,300];
apple.Motion.Direction.degree = 43;

apple.Pen.prepare();
apple.Pen.penDown();

apple.Event.flagPresser().func = async function*(this: Sprite){
    this.Pen.penClear();
    this.Motion.Position.xy = [0,0];
    for(;;){
        this.Motion.Move.steps(10);
        this.Motion.Move.ifOnEdgeBounce();
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
