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

// TODO
// ここでAUDIO関連の設定を可能にしたい。警告を出さずに。
// たとえば・・・
// 旗マークをクリックするとAUDIO関連の設定が開始されるようにしたい。
// ２回目の旗クリックで 旗イベント処理が動き出す・・・とか。
await apple.Sound.setVolume(chillSound, 100);
await apple.Sound.setPitch(chillSound, 1.0);
await apple.Sound.setVolume(catSound, 10);


apple.Event.flagPresser().func = async function*(this: TSprite) {
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
        console.log('chillSound loop')
        await this.Sound.play(chillSound);
        yield;
    }
}
apple.Event.keyPresser("C").func = async function*(this:TSprite){
    for(;;){
        apple.Sound.addVolume(chillSound, 1);
        apple.Sound.addPitch(chillSound, 0.05);
        await VM.Utils.Timer.wait(1);
        yield;
    }
}

VM.playground.start();