/**
 * TEST 100
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage } from '../../src';

import AppleSvg from '../assets/Apple.svg';
import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import CatWav from '../assets/Cat.wav';
import ChillWav from '../assets/Chill.wav';

const AppleImage = new TS.Image( {AppleSvg});
const CatImage = new TS.Image( {CatSvg});
const BlueskyImage = new TS.Image( {BlueskySvg} );
const CatSound = new TS.Sound({CatWav});
const ChillSound = new TS.Sound({ChillWav});

const stage = new TS.Stage();
stage.Sound.add([ChillSound]);
stage.Backdrop.add( [BlueskyImage] );

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const apple = new TS.Sprite('apple');
apple.Costume.add([AppleImage]);
apple.Sound.add([CatSound]);
apple.Looks.size.scale = [100,100];
apple.Motion.direction.degree = 45;
apple.Motion.rotation.style = TS.Rotation.DONT_ROTATE;
apple.Motion.rotation.style = TS.Rotation.ALL_AROUND;
apple.Motion.rotation.style = TS.Rotation.LEFT_RIGHT;
apple.Motion.position.xy = [0,0];

stage.Sound.setVolume(ChillSound, 5);
stage.Sound.setPitch(ChillSound, 120);
stage.Sound.addVolume(ChillSound, 5);
stage.Sound.addPitch(ChillSound, 120);

apple.Sound.setVolume(CatSound, 100);
apple.Sound.setPitch(CatSound, -20);
apple.Sound.addVolume(CatSound, 100);
apple.Sound.addPitch(CatSound, -20);


apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        // Sprite Motion.move
        this.Motion.move.steps(1);
        this.Motion.move.to([10,10]);
        await this.Motion.move.glideTo(2, [20,20]);
        await this.Motion.move.glideToMouse(2);
        await this.Motion.move.glideToRandom(2);
        this.Motion.move.ifOnEdgeBounce();
        this.Motion.move.toMouse();
        this.Motion.move.toRandom();
        this.Motion.move.toSprite(cat);
        // this.Motion.direction
        this.Motion.direction.degree += 20;
        // this.Motion.point
        this.Motion.point.toMouse();
        this.Motion.point.toMouseInStage();
        this.Motion.point.toRandom();
        this.Motion.point.toTarget(cat);
        this.Motion.position.xy = [0,0];
        this.Motion.position.x = 10;
        this.Motion.position.y = 20;
        // this.Motion.rotation
        this.Motion.rotation.style = TS.Rotation.ALL_AROUND;
        this.Motion.rotation.style = TS.Rotation.DONT_ROTATE;
        this.Motion.rotation.style = TS.Rotation.LEFT_RIGHT;
        // this.Looks.backdrop
        this.Looks.backdrop.name = 'aaa';
        this.Looks.backdrop.next();
        this.Looks.backdrop.no = 0;
        this.Looks.backdrop.previous();
        this.Looks.backdrop.switch(BlueskyImage);
        this.Looks.backdrop.switchRandom();
        // this.Looks.bubble
        this.Looks.bubble.say('test', {scale:{w:20,h:20}});
        await this.Looks.bubble.sayForSecs('test', 2, {scale:{w:20,h:20}});
        this.Looks.bubble.think('test', {scale:{w:20,h:20}});
        await this.Looks.bubble.thinkForSecs('test', 2);
        // this.Looks.costume
        this.Looks.costume.name = 'test';
        this.Looks.costume.next();
        this.Looks.costume.no = 2;
        this.Looks.costume.switch(AppleImage);

        yield;
    }
}
apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        this.Looks.costume.next();
        await this.Control.wait(0.5);
        yield;
    }
}
apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        this.Sound.play(CatSound);
        await this.Sound.playUntilDone(CatSound);
        //await this.Control.wait(0.5);
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage){
    for(;;){
        this.Sound.play(ChillSound);
        await this.Sound.playUntilDone(ChillSound);
        await this.Control.wait(0.5);
        yield;
    }
}
stage.Event.clicker().func = async function*(this: Stage){
    for(;;){
        this.Looks.backdrop.next();
        await this.Control.wait(0.1);
        yield;
    }
}
stage.Event.keyPresser("a").func = async function*(this: Stage){
    console.log('stage key a ')
    for(;;){
        //this.Sound.addVolume(chillSound, 1);
        this.Sound.addPitch(ChillSound, 10);
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
const backdropChangeThread1 = async function*(this: Sprite) {
    this.Broadcast.send('AAA');
}
const backdropChangeThread2 = async function*(this: Stage) {
    await this.Broadcast.sendAndWait('AAA');
}
apple.Event.backdropSwitcher(BlueskyImage).func = backdropChangeThread1;
stage.Event.backdropSwitcher(BlueskyImage).func = backdropChangeThread2;

apple.Event.keyPresser(TS.Keyboard.SPACE).func = async function*(this: Sprite){
    this.Control.stopAll();
}

apple.Event.clicker().func = async function*(this: Sprite) {
    this.Sound.play(CatSound);
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
apple.Broadcast.receiver('AAA').func = async function*(this:Sprite) {

}
stage.Broadcast.receiver('AAA').func = async function*(this:Stage) {
    
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
