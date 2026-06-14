/**
 * TEST 001
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';

//import AppleSvg from './assets/Apple.svg';
// 外部パス(https://など)を import xxx from '外部パス'; は
// ブラウザ制約によりエラーになる。const XXX = '外部パス'とすべき。
const AppleSvg = 'https://amami-harhid.github.io/tscratch3assets/assets/Apple.svg';
import ArrowSvg from '../assets/Arrow1-a.svg';
import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketballPng from '../assets/Basketball 2.png';
import CatWav from '../assets/Cat.wav';
import ChillWav from '../assets/Chill.wav';
//import { IStage } from '@Type/stage';

const appleImage = new TS.Image( {AppleSvg} ); 
const arrowImage = new TS.Image( {ArrowSvg} );
const catImage = new TS.Image( {CatSvg});
const blueskyImage = new TS.Image( {BlueskySvg} );
const basketballImage = new TS.Image( {BasketballPng} );
const catSound = new TS.Sound({CatWav});
const chillSound = new TS.Sound({ChillWav});
const stage = new TS.Stage();
stage.Backdrop.add( [blueskyImage, basketballImage] );
stage.Sound.add([chillSound]);
const apple = new TS.Sprite('apple');
apple.Costume.add([appleImage, catImage, arrowImage]);
apple.Sound.add([catSound, chillSound]);
apple.Looks.size.scale = [100,100];
apple.Motion.direction.degree = 45;
apple.Motion.rotation.style = TS.Rotation.LEFT_RIGHT;
apple.Motion.position.xy = [0,0];

stage.Sound.setVolume(chillSound, 50);
stage.Sound.setPitch(chillSound, -120);
apple.Sound.setVolume(catSound, 0.1);
apple.Sound.setVolume(chillSound, 150);


apple.Event.flagPresser().func = async function*(this: Sprite){
    this.Motion.position.xy = [0,0];
    for(;;){
        this.Motion.move.steps(1);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}
apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        this.Costume.next();
        await this.Control.wait(0.5);
        yield;
    }
}
apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        await this.Sound.playUntilDone(chillSound);
        //await this.Control.wait(0.5);
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage){
    //this.Sound.setPitch(chillSound, 0);
    for(;;){
        await this.Sound.playUntilDone(chillSound);
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage){
    for(;;){
        this.Backdrop.next();
        await this.Control.wait(0.1);
        yield;
    }
}
stage.Event.keyPresser("a").func = async function*(this: Stage){
    console.log('stage key a ')
    for(;;){
        //this.Sound.addVolume(chillSound, 1);
        this.Sound.addPitch(chillSound, 10);
        await this.Control.wait(1);
        yield;
    }
}
apple.Event.keyPresser("b").func = async function*(this: Sprite){
    this.Motion.direction.degree = 90;
    let counter = 0;
    let steps = 1;
    for(;;){
        this.Motion.move.steps(steps);
        const touch = this.Sensing.edge.isTouching;
        if(touch===true){
            console.log('Edge touching', counter++)
            await this.Control.wait(1);
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
apple.Event.keyPresser(TS.Keyboard.SPACE).func = async function*(this: Sprite){
    this.Control.stopAll();
}

apple.Event.clicker().func = async function*(this: Sprite) {
    this.Sound.play(chillSound);
};
apple.Event.clicker().func = async function*(this: Sprite) {
    //this.Sound.play(catSound);
};
apple.Event.keyPresser('e').func = async function*(this: Sprite){
    console.log('KEY e')
    this.Broadcast.send('AAA');
}
apple.Event.keyPresser('f').func = async function*(this: Sprite){
    console.log('KEY f')
    await this.Broadcast.sendAndWait('AAA');
    console.log('KEY f completed')
}
apple.Event.keyPresser('g').func = async function*(this: Sprite){
    console.log('KEY g')
    this.Broadcast.send('BBB');
    console.log('KEY g completed')
}
apple.Broadcast.receiver('AAA').func = async function*(this:Sprite){
    console.log('Received [1]');
    apple.Looks.effect.change(TS.ImageEffective.COLOR, 15);
    apple.Looks.effect.change(TS.ImageEffective.FISHEYE, 15);
}
apple.Broadcast.receiver('AAA').func = async function*(this:Sprite){
    console.log('Received [2]');
    await this.Control.wait(1);
}
apple.Broadcast.receiver('BBB').func = async function*(this:Sprite){
    apple.Looks.effect.clear();
}


TS.engine.start();
