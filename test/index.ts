import { Typescratcher as TS } from '../index';
import type { Sprite, Stage } from '../index';

//import AppleSvg from './assets/Apple.svg';
// 外部パス(https://など)を import xxx from '外部パス'; は
// ブラウザ制約によりエラーになる。const XXX = '外部パス'とすべき。
const AppleSvg = 'https://amami-harhid.github.io/tscratch3assets/assets/Apple.svg';
import ArrowSvg from './assets/Arrow1-a.svg';
import CatSvg from './assets/cat.svg';
import CatWav from './assets/Cat.wav';
import ChillWav from './assets/Chill.wav';
//import { IStage } from '@Type/stage';

const appleImage = new TS.Image( {AppleSvg} ); 
const arrowImage = new TS.Image( {ArrowSvg} ); 
const catImage = new TS.Image( {CatSvg});
const catSound = new TS.Sound({CatWav});
const chillSound = new TS.Sound({ChillWav});
const stage = new TS.Stage();
stage.Sound.add([chillSound]);
const apple = new TS.Sprite('apple');
apple.Image.add([appleImage, catImage, arrowImage]);
apple.Sound.add([catSound, chillSound]);
apple.Looks.Size.scale = [300,300];
apple.Motion.Direction.degree = 45;
apple.Motion.Rotation.style = TS.Rotation.LEFT_RIGHT;
apple.Motion.Position.xy = [0,0];

// TODO
// ここでAUDIO関連の設定を可能にしたい。警告を出さずに。
// たとえば・・・
// 旗マークは最初は非表示（押せない）、どこかをクリックすると、
// 旗マークが表示されて押せるようになる。
// 旗クリックで 旗イベント処理が動き出す・・・とか。
apple.Sound.setVolume(chillSound, 100);
apple.Sound.setPitch(chillSound, 1.0);
apple.Sound.setVolume(catSound, 10);


apple.Event.flagPresser().func = async function*(this: Sprite){
    this.Motion.Position.xy = [0,0];
    for(;;){
        this.Motion.Move.steps(1);
        this.Motion.Move.ifOnEdgeBounce();
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage){
    for(;;){
        //await this.Sound.play(chillSound);
        yield;
    }
}
apple.Event.keyPresser("a").func = async function*(this: Sprite){
    for(;;){
        apple.Sound.addVolume(chillSound, 1);
        apple.Sound.addPitch(chillSound, 0.05);
        await TS.Timer.wait(1);
        yield;
    }
}
apple.Event.keyPresser("b").func = async function*(this: Sprite){
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
            await TS.Timer.wait(1);
            steps *= -1;
        }
        yield;
    }
}
apple.Event.keyPresser("c").func = async function*(this: Sprite){
    for(;;){
        const answer = await this.Sensing.askAndWait("質問をするよ");
        console.log(answer);
        if(answer == 'y') {
            break;
        }
        yield;
    }
}
stage.Event.keyPresser("d").func = async function*(this: Stage){
    for(;;){
        const answer = await this.Sensing.askAndWait("ステージが質問をするよ");
        console.log(answer);
        if(answer == 'y') {
            break;
        }
        yield;
    }
}
apple.Event.keyPresser(TS.KEYBOARD_KEYS.SPACE).func = async function*(this: Sprite){
    this.Control.stopAll();
}

apple.Event.clicker().func = async function*(this: Sprite) {
    this.Sound.play(chillSound);
};
apple.Event.clicker().func = async function*(this: Sprite) {
    this.Sound.play(catSound);
};
apple.Event.keyPresser('e').func = async function*(this: Sprite){
    console.log('KEY e')
    this.Event.Broadcast.broadcast('AAA');
}
apple.Event.keyPresser('f').func = async function*(this: Sprite){
    console.log('KEY f')
    await this.Event.Broadcast.broadcastAndWait('AAA');
    console.log('KEY f completed')
}
apple.Event.keyPresser('g').func = async function*(this: Sprite){
    console.log('KEY g')
    this.Event.Broadcast.broadcast('BBB');
    console.log('KEY g completed')
}
apple.Event.Broadcast.broadcasReceiver('AAA').func = async function*(this:Sprite){
    console.log('Received [1]');
    apple.Image.Effect.change(TS.ImageEffective.COLOR, 15);
    apple.Image.Effect.change(TS.ImageEffective.FISHEYE, 15);
}
apple.Event.Broadcast.broadcasReceiver('AAA').func = async function*(this:Sprite){
    console.log('Received [2]');
    await TS.Timer.wait(5);
}
apple.Event.Broadcast.broadcasReceiver('BBB').func = async function*(this:Sprite){
    apple.Image.Effect.clear();
}


TS.playground.start();
