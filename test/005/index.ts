/**
 * TEST 005
 * ◇ Stageで 背景を no, name で切り替える
 * ◇ Spriteで 背景を no, name で切り替える
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage } from '../../src';

import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketBallPng from '../assets/Basketball 2.png';

const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketBallPng});
const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);



cat.Event.flagPresser().func=async function*(this:Sprite) {
    let counter = 0;
    for(;;){
        this.Looks.backdrop.next();
        await this.Control.wait(1);
        counter+=1;
        if(counter>5){
            this.Broadcast.send('STAGE');
            break;
        }
        yield;
    }
}

stage.Broadcast.receiver('STAGE').func = async function*(this: Stage) {
    let counter = 0;
    for(;;){
        this.Looks.backdrop.next();
        counter+=1;
        if(counter>5){
            break;
        }
        yield;
    }
}

TS.engine.start();
