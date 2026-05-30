import { VM } from '../src/index';
import type { TSprite } from '@Type/sprite';

import AppleSvg from './assets/Apple.svg' assert { type: 'image/svg+xml' };
import ArrowSvg from './assets/Arrow1-a.svg' assert { type: 'image/svg+xml' };
import CatWav from './assets/Cat.wav';
import ChillWav from './assets/Chill.wav';

const appleImage = new VM.Image( {AppleSvg} ); 
const arrowImage = new VM.Image( {ArrowSvg} ); 
const catSound = new VM.Sound({CatWav});
const chillSound = new VM.Sound({ChillWav});
const stage = new VM.Stage();
const apple = new VM.Sprite('apple');
apple.Image.add([appleImage, arrowImage]);
apple.Sound.add([catSound, chillSound]);
apple.Looks.Size.scale = {w: 500, h:200};
apple.Motion.Direction.degree = 0;
apple.Motion.Rotation.style = VM.RotationStyle.ALL_AROUND;

apple.Event.flagPresser().func = async function*(this: TSprite) {
    for(;;) {
        if(this.Motion.Direction.degree == 90) {
            catSound.play();
        }

        yield;
    }
}
apple.Event.keyPresser("A").func = async function*(this:TSprite){
    //this.Motion.Rotation.style = VM.RotationStyle.LEFT_RIGHT;
    this.Motion.Direction.degree = 0;
    for(;;){
        this.Motion.Point.toMouse();
        yield;
    }
}
apple.Event.keyPresser("B").func = async function*(this:TSprite){
    for(;;){
        await chillSound.play();
        yield;
    }
}
apple.Event.keyPresser("C").func = async function*(this:TSprite){
    for(;;){
        await chillSound.play();
        yield;
    }
}

VM.playground.start();