/**
 * TEST 013
 * ◇ Speech
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage as _ } from '../../index';

import CatSvg from '../assets/cat.svg';
import CatWav from '../assets/Cat.wav';

const CatImage = new TS.Image({CatSvg});

const CatSound = new TS.Sound({CatWav});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);
cat.Sound.add([CatSound]);

const _stage = new TS.Stage();
cat.Speech.setSpeechProperties("TEST", "female", "ja-JP", {});
cat.Event.flagPresser().func = async function*(this:Sprite) {
    this.Sound.setVolume(CatSound, 100);
    this.Sound.setPitch(CatSound, 150);
    this.Motion.position.xy = [0,0];
    this.Motion.direction.degree = 90;
    let counter = 0;
    for(;;){
        counter += 1;
        console.log('[1]<==== Speech.speech start')
        await this.Speech.speech(`${counter} 秒`, 'TEST');
        console.log('[2]<==== Speech.speech owari')
        if(counter > 10) {
            break;
        }
        yield;
    }
}


TS.engine.start();
