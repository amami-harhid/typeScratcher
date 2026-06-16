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
cat.Speech.locale(TS.SpeechLocale.JAPANESE).type(TS.VoiceType.GIANT).addPitch(-20);
cat.Event.flagPresser().func = async function*(this:Sprite) {
    
    for(const _second of TS.Loop.Iterator(10,1)){
        //const text = `${second} 秒`;
        const text = `${_second} 秒`;
        await this.Speech.speech(text);
        yield;
    }
}


TS.engine.start();
