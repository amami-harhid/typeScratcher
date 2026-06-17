/**
 * TEST 014
 * ◇ ステージの端を超えていこうとするとき、ステージの端にひっかかる。
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage as _ } from '../../index';

import CatSvg from '../assets/cat.svg';

const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

cat.Event.flagPresser().func = async function*(this:Sprite) {
    this.Motion.direction.degree = 90;
    for(;;){
        this.Motion.position.x += 5;
        yield;
    }
}

TS.engine.start();
