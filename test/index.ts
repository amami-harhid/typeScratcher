import { VM } from '../src/index';
import type { TSprite } from '@Type/sprite';
//import { VM } from '../build/index.js';

import AppleSvg from './assets/Apple.svg' assert { type: 'image/svg+xml' };
import ArrowSvg from './assets/Arrow1-a.svg' assert { type: 'image/svg+xml' };
import CatWav from './assets/Cat.wav';
import ChillWav from './assets/Chill.wav';

const appleImage = new VM.Image( {AppleSvg} ); 
const arrowImage = new VM.Image( {ArrowSvg} ); 
const catSound = new VM.Sound({CatWav});
const chillSound = new VM.Sound({ChillWav})
console.log(catSound.name);
const apple = new VM.Sprite('apple');
apple.Image.add([appleImage, arrowImage]);
apple.Sound.add([catSound, chillSound]);
apple.Properties.scale = [200, 200];
apple.Motion.Rotation.style = VM.RotationStyle.ALL_AROUND;

//await apple.init();
//apple.update();

// apple.Event.whenFlag(async function*(){

//     for(;;){
//         apple.Costume.next();
//         yield;
//     }

// });
// apple.Event.whenFlag(async function*(){
//     for(;;) {
//         for(let idx=0; idx<10; idx++){
//             apple.Motion.Move.steps(5);
//             yield;
//         }
//         for(let idx=0; idx<10; idx++){
//             apple.Motion.Move.steps(-5);
//             yield;
//         }
//     }
// });

apple.Event.whenflagger = async function*(this: TSprite) {
    for(;;) {
        if(this.Motion.Direction.degree == 0) {
            catSound.play2();
        }
        this.Motion.Direction.degree += 10;
        yield;
    }
}
apple.Event.whenflagger = async function*(this: TSprite) {
    for(;;) {
        await chillSound.play();
        yield;
    }
}
// apple.Event.whenFlag(async function*(){
//     for(;;) {
//         apple.Motion.Direction.degree += 5;
//         yield;
//     }
// });

VM.playground.start();