import { VM } from '../src/index';
import type { TSprite } from '@Type/sprite';
//import { VM } from '../build/index.js';

import AppleSvg from './assets/Apple.svg' assert { type: 'image/svg+xml' };
import ArrowSvg from './assets/Arrow1-a.svg' assert { type: 'image/svg+xml' };
import CatWav from './assets/Cat.wav';

const appleImage = new VM.Image( {path: AppleSvg} ); 
const arrowImage = new VM.Image( {path: ArrowSvg} ); 
const catSound = new VM.Sound({path: CatWav});

const apple = new VM.Sprite('apple');
apple.Image.add([appleImage, arrowImage]);
apple.Sound.add([catSound]);
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
        this.Motion.Direction.degree += 5;
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