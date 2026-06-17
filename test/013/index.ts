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

// 1秒ごとに 秒数をスピーチする
cat.Speech.locale(TS.SpeechLocale.ENGLISH)
cat.Event.flagPresser().func = async function*(this:Sprite) {
    for(const _second of TS.Loop.Iterator(10)){
        // 秒数により スピーチの設定を変える
        if(_second % 4 == 0) {
            this.Speech.type(TS.VoiceType.ALTO);
        }else if(_second % 4 == 1) {
            // 実行するたびに 前回のGIANTのピッチより-5 変化することに注意！
            this.Speech.type(TS.VoiceType.GIANT).addPitch(-5); 
        }else if(_second % 4 == 2) {
            this.Speech.type(TS.VoiceType.KITTEN);
        }else{
            // 実行するたびに 前回のTENORのピッチより +25 変化することに注意！
            this.Speech.type(TS.VoiceType.TENOR).addPitch(25); 
        }
        const text = `${_second+1}`;
        this.Broadcast.send('SPEECH', text);

        // スピーチが終わるのを待たずに 1秒間待つ
        await this.Control.wait(1);
        yield;
    }
}
cat.Broadcast.receiver('SPEECH').func = async function*(this:Sprite, text:string) {
    await this.Speech.speech(text);
}
cat.Broadcast.receiver('SPEECH').func = async function*(this:Sprite, text:string) {
    await this.Looks.bubble.sayForSecs(text,0.5);
}

TS.engine.start();
