import { VM } from '../src/index';
//import { VM } from '../build/index.js';

import { Constant } from './constant';

const varNameValues = (args:Object) => {
    for (const [key, value] of Object.entries(args)) {
        return `${key}`;
    }
}

import AppleSvg from './assets/Apple.svg' assert { type: 'image/svg+xml' };
import ArrowSvg from './assets/Arrow1-a.svg' assert { type: 'image/svg+xml' };

const appleImage = new VM.Image( {path: AppleSvg} ); 
const arrowImage = new VM.Image( {path: ArrowSvg} ); 

const apple = new VM.Sprite('apple');
apple.Image.add([appleImage, arrowImage]);
apple.Properties.scale = [400, 400];
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
apple.Event.whenFlag(async function*(){
    for(;;) {
        apple.Motion.Direction.degree += 5;
        yield;
    }
});

VM.Playground.start();

