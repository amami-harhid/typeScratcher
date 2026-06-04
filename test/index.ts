import { VM } from '../src/index';
//import { VM } from '../dist/index.js';
//import { VM } from '../VM';
import type { ISprite } from '@Type/sprite';

import AppleSvg from './assets/Apple.svg';
import ArrowSvg from './assets/Arrow1-a.svg';
import CatSvg from './assets/cat.svg';
import CatWav from './assets/Cat.wav';
import ChillWav from './assets/Chill.wav';

const appleImage = new VM.Image( {AppleSvg} ); 
const arrowImage = new VM.Image( {ArrowSvg} ); 
const catImage = new VM.Image( {CatSvg});
const catSound = new VM.Sound({CatWav});
const chillSound = new VM.Sound({ChillWav});
//const stage = new VM.Stage();
const apple:ISprite = new VM.Sprite('apple');
apple.Image.add([appleImage, catImage, arrowImage]);
apple.Sound.add([catSound, chillSound]);
apple.Looks.Size.scale = {w: 100, h:100};
apple.Motion.Direction.degree = 45;
apple.Motion.Rotation.style = VM.Rotation.LEFT_RIGHT;
apple.Motion.Position.xy = {x:0, y:0};

// TODO
// ここでAUDIO関連の設定を可能にしたい。警告を出さずに。
// たとえば・・・
// 旗マークは最初は非表示（押せない）、どこかをクリックすると、
// 旗マークが表示されて押せるようになる。
// 旗クリックで 旗イベント処理が動き出す・・・とか。
apple.Sound.setVolume(chillSound, 100);
apple.Sound.setPitch(chillSound, 1.0);
apple.Sound.setVolume(catSound, 10);


apple.Event.flagPresser().func = async function*(this: ISprite) {
    console.log(apple.Sound.getPitch(chillSound));
    for(;;) {
        const degree = Math.floor(this.Motion.Direction.degree);
        if(degree == 90) {
            this.Sound.play(catSound);
            apple.Sound.addVolume(catSound, 5);
            apple.Sound.addPitch(catSound, 0.05);
        }        
        yield;
    }
}
apple.Event.keyPresser("a").func = async function*(this:ISprite){
    //this.Motion.Rotation.style = VM.RotationStyle.LEFT_RIGHT;
    this.Motion.Direction.degree = 0;
    for(;;){
        this.Motion.Point.toMouse();
        yield;
    }
}
apple.Event.keyPresser("b").func = async function*(this:ISprite){
    for(;;){
        console.log('chillSound loop')
        await this.Sound.play(chillSound);
        await this.Sensing.askAndWait("aaaaa");
        yield;
    }
}
apple.Event.keyPresser("c").func = async function*(this:ISprite){
    for(;;){
        apple.Sound.addVolume(chillSound, 1);
        apple.Sound.addPitch(chillSound, 0.05);
        await VM.Timer.wait(1);
        yield;
    }
}
apple.Event.keyPresser("d").func = async function*(this:ISprite){
    this.Motion.Direction.degree = 90;
    let counter = 0;
    let steps = 1;
    const stageWidth = apple.render.stageWidth;
    const stageHeight = apple.render.stageHeight;
    console.log(`stageWidth=${stageWidth},stageHeight=${stageHeight}`)
    for(;;){
        this.Motion.Move.steps(steps);
        const touch = this.Sensing.Edge.isTouching;
        if(touch===true){
            console.log('Edge touching', counter++)
            await VM.Timer.wait(1);
            steps *= -1;
        }
        yield;
    }
}
apple.Event.keyPresser(VM.KEYBOARD_KEYS.SPACE).func = async function*(this:ISprite){
    const steps = 1;
    for(;;){
        this.Motion.Move.steps(steps);
        this.Motion.Move.ifOnEdgeBounce();
        yield;
    }
}

VM.playground.start();
