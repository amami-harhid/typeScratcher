/**
 * TEST 014
 * ◇ ステージの端を超えていこうとするとき、ステージの端にひっかかる。
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage as _ } from '../../src';

import CatSvg from '../assets/cat.svg';

const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

cat.Event.flagPresser().func = async function*(this:Sprite) {
    this.Motion.direction.degree = 90;
    this.Motion.position.xy = [0, 0];
    for(;;){
        this.Motion.position.x += 5;
        if(this.Sensing.keyboard.isDown(TS.Keyboard.SPACE)) {
            break;
        }
        yield;
    }
    this.Broadcast.send('NEXT');
}

cat.Broadcast.receiver('NEXT').func = async function*(this:Sprite) {
    //this.Motion.move.to(0, 0);
    await this.Motion.move.glideTo(1, 0, 0);
    for(;;) {
        this.Motion.point.toMouse();
        const distance = this.Sensing.mouse.distance;
        this.Looks.bubble.say(`${distance}`);
        yield;
    }
};

TS.engine.start();
