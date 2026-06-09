/**
 * TEST 004 ( Sprite Sensing )
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage as _Stage } from '../../index';

import AppleSvg from '../assets/Apple.svg';
import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';

const AmonImage = new TS.Image( {AppleSvg} ); 
const BlueskyImage = new TS.Image({BlueskySvg});
const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const apple = new TS.Sprite('apple');
apple.Costume.add([AmonImage]);
apple.Motion.direction.degree = 95;

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, CatImage]);

apple.Event.flagPresser().func = async function*(this: Sprite){
    this.Motion.position.xy = [0,0];
    for(;;){
        this.Motion.move.steps(10);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}

apple.Event.flagPresser().func = async function*(this: Sprite) {
    this.Looks.effect.clear();
    for(;;) {
        if(this.Sensing.color.isTouching('#00CC44')) {
            this.Looks.effect.change(TS.ImageEffective.WHIRL, 25);
            this.Looks.effect.change(TS.ImageEffective.COLOR, 25);
        }else{
            this.Looks.effect.clear();
        }
        yield;
    }
}

cat.Event.flagPresser().func=async function*(this:Sprite) {
    for(;;){
        this.Motion.point.toTarget(apple);
        const _distance = this.Sensing.sprite.distance(apple);
        const _word = `距離は「${Math.floor(_distance)}」だよ`;
        this.Looks.bubble.say(_word);
        yield;
    }
}

TS.playground.start();
