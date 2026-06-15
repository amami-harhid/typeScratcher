/**
 * TEST 013
 * ◇ Speech
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage as _ } from '../../index';

import CatSvg from '../assets/cat.svg';

const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const _stage = new TS.Stage();
cat.Speech.setSpeechProperties("TEST", "female", "ja-JP", {});
cat.Event.flagPresser().func = async function*(this:Sprite) {
    
    for(const second of TS.Loop.Iterator(10,1)){
        const text = `${second} 秒`;
        console.log(text);
        await this.Speech.speech( text, 'TEST');
        yield;
    }
}


TS.engine.start();
