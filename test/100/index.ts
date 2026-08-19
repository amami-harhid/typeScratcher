/**
 * TEST 100
 */
import { Typescratcher as Ts } from '../../src';
import type { Sprite, Stage } from '../../src';

import AppleSvg from '../assets/Apple.svg';
import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import CatWav from '../assets/Cat.wav';
import ChillWav from '../assets/Chill.wav';

const AppleImage = new Ts.Image( {AppleSvg});
const CatImage = new Ts.Image( {CatSvg});
const BlueskyImage = new Ts.Image( {BlueskySvg} );
const CatSound = new Ts.Sound({CatWav});
const ChillSound = new Ts.Sound({ChillWav});

const stage = new Ts.Stage();
stage.Sound.add( ChillSound );
stage.Backdrop.add( BlueskyImage );

const cat = new Ts.Sprite('cat');
cat.Costume.add(CatImage);

const apple = new Ts.Sprite('apple');
apple.Costume.add(AppleImage);
apple.Sound.add( CatSound );
apple.Looks.size.scale = [100,100];
apple.Motion.direction.degree = 45;
apple.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
apple.Motion.rotation.style = Ts.Rotation.ALL_AROUND;
apple.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT;
apple.Motion.position.xy = [0,0];

stage.Sound.setVolume(ChillSound, 5);
stage.Sound.setPitch(ChillSound, 120);
stage.Sound.addVolume(ChillSound, 5);
stage.Sound.addPitch(ChillSound, 120);

apple.Sound.setVolume(CatSound, 100);
apple.Sound.setPitch(CatSound, -20);
apple.Sound.addVolume(CatSound, 100);
apple.Sound.addPitch(CatSound, -20);


apple.Broadcast.receiver('testMessage').func = async function* () {
    
}

apple.Event.flagPresser().func = async function*(this: Sprite){
    for(;;){
        //this.Broadcast
        this.Broadcast.send('test', 'b');
        await this.Broadcast.sendAndWait('test', 'a', 10);
        // this.Control
        this.Control.clone();
        this.Control.removeAllClones();
        this.Control.removeClone();
        this.Control.stopAll();
        this.Control.stopOtherScripts();
        this.Control.stopThisScript();
        await this.Control.wait(2);
        await this.Control.waitUntil(()=>true);
        await this.Control.waitWhile(()=>true);
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
        this.Looks.effect.change(Ts.ImageEffective.BRIGHTNESS,10);
        this.Looks.effect.change(Ts.ImageEffective.COLOR,10);
        this.Looks.effect.change(Ts.ImageEffective.FISHEYE,10);
        this.Looks.effect.change(Ts.ImageEffective.GHOST,10);
        this.Looks.effect.change(Ts.ImageEffective.MOSAIC,10);
        this.Looks.effect.change(Ts.ImageEffective.PIXELATE,10);
        this.Looks.effect.change(Ts.ImageEffective.WHIRL,10);
        this.Looks.effect.set(Ts.ImageEffective.BRIGHTNESS,10);
        const imageEffect = this.Looks.effect.get();
        console.log(imageEffect.brightness);
        console.log(imageEffect.color);
        console.log(imageEffect.fisheye);
        console.log(imageEffect.ghost);
        console.log(imageEffect.mosaic);
        console.log(imageEffect.pixelate);
        console.log(imageEffect.whirl);
        this.Looks.effect.clear();
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
        this.Motion.rotation.style = Ts.Rotation.ALL_AROUND;
        this.Motion.rotation.style = Ts.Rotation.DONT_ROTATE;
        this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT;
        // this.Pen
        this.Pen.HSVColor.brightness = 100;
        this.Pen.HSVColor.hsv = {hue: 0, saturation: 0, brightness: 0, transparency: 0};
        this.Pen.HSVColor.hue = 0;
        this.Pen.HSVColor.saturation = 0;
        this.Pen.HSVColor.brightness = 0;
        this.Pen.HSVColor.transparency = 0;
        this.Pen.penClear();
        this.Pen.penDown();
        this.Pen.penUp();
        // this.Sensing
        await this.Sensing.askAndWait('test');
        if(this.Sensing.color.isTouching('#f0f0f0') ){

        }
        if(this.Sensing.color.isTouchingBy('#ff00ff', '#f0f0f0')){

        }
        this.Sensing.dragMode.draggable = true;
        if(this.Sensing.dragMode.dragging) {

        }
        if(this.Sensing.edge.isTouching){

        }
        if(this.Sensing.edge.isTouchingHorizontal){

        }
        if(this.Sensing.edge.isTouchingVirtical) {

        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.ANY)){
            console.log(Ts.Keyboard.DOWN);
            console.log(Ts.Keyboard.ENTER);
            console.log(Ts.Keyboard.ESCAPE);
        }
        if(this.Sensing.keyboard.isNotDown(Ts.Keyboard.LEFT)){
            console.log(Ts.Keyboard.RIGHT);
            console.log(Ts.Keyboard.SPACE);
            console.log(Ts.Keyboard.UP);
        }
        console.log(this.Sensing.mouse.degree);
        console.log(this.Sensing.mouse.distance);
        if(this.Sensing.mouse.isDown){

        }
        if(this.Sensing.mouse.isTouching){

        }
        console.log(this.Sensing.mouse.x, this.Sensing.mouse.y);
        console.log(this.Sensing.sprite.degree);
        console.log(this.Sensing.sprite.distance);
        const _touchSprites = this.Sensing.sprite.getTouching();
        console.log(_touchSprites);
        if(this.Sensing.sprite.isTouching( ..._touchSprites )){
            if(this.Sensing.sprite.isTouchingWithoutClone( cat )){
            }
        }
        this.Sensing.timer.reset();
        console.log(this.Sensing.timer.msValue);
        // this.Sound
        this.Sound.add( CatSound );
        this.Sound.addPitch(CatSound, 10);
        this.Sound.addVolume(CatSound, 10);
        this.Sound.clearEffects();
        this.Sound.getPitch(CatSound);
        this.Sound.getVolume(CatSound);
        this.Sound.play(CatSound);
        await this.Sound.playUntilDone(CatSound);
        this.Sound.setPitch(CatSound, 0);
        this.Sound.setVolume(CatSound,0);
        this.Sound.stop();
        this.Sound.stopImmediately();
        // this.Speech
        this.Speech.type(Ts.SpeechVoiceType.ALTO).typeCopyTo('test').gender(Ts.SpeechGender.FEMALE).volume(50).pitch(20);
        this.Speech.typeCopyTo('test').gender(Ts.SpeechGender.FEMALE).volume(50).pitch(20);
        this.Speech.type('test').addPitch(5).addVolume(5);
        await this.Speech.speech('Teeeeest');
        // this.name
        const _name = this.name;
        console.log(_name);
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage){
    this.Backdrop.add( BlueskyImage );
    console.log(this.Backdrop.names);
    this.Broadcast.send('BG', 200);
    await this.Broadcast.sendAndWait('BG', 200);
    this.Control.stopAll();
    this.Control.stopOtherScripts();
    this.Control.stopThisScript();
    await this.Control.wait(2);
    await this.Control.waitUntil(()=>true);
    await this.Control.waitWhile(()=>true);
    console.log(this.Looks.backdrop.name);
    this.Looks.backdrop.next();
    await this.Looks.backdrop.nextAndWait();
    console.log(this.Looks.backdrop.no);
    this.Looks.backdrop.previous();
    await this.Looks.backdrop.previousAndWait();
    this.Looks.backdrop.switch(BlueskyImage);
    await this.Looks.backdrop.switchAndWait(BlueskyImage);
    this.Looks.backdrop.switchRandom();
    await this.Looks.backdrop.switchRandomAndWait();
    this.Looks.effect.change(Ts.ImageEffective.COLOR, 25);
    this.Looks.effect.clear();
    const imageEffect = this.Looks.effect.get();
    console.log(imageEffect.brightness);
    console.log(imageEffect.color);
    console.log(imageEffect.fisheye);
    console.log(imageEffect.ghost);
    console.log(imageEffect.mosaic);
    console.log(imageEffect.pixelate);
    console.log(imageEffect.whirl);
    this.Looks.effect.set(Ts.ImageEffective.BRIGHTNESS, 100);

}
stage.Broadcast.receiver('BG').func = async function* (this:Stage, param: number) {
    console.log(param);
}
stage.Event.backdropSwitcher(BlueskyImage).func = async function* (this: Stage) {
    
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
        await this.Sensing.askAndWait("質問をするよ");
        const answer = this.Sensing.answer;
        console.log(answer);
        if(answer == 'y') {
            break;
        }
        yield;
    }
}
stage.Event.keyPresser("d").func = async function*(this: Stage){
    for(;;){
        await this.Sensing.askAndWait("ステージが質問をするよ");
        const answer = this.Sensing.answer;
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

apple.Event.keyPresser(Ts.Keyboard.SPACE).func = async function*(this: Sprite){
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
    apple.Looks.effect.change(Ts.ImageEffective.COLOR, 15);
    apple.Looks.effect.change(Ts.ImageEffective.FISHEYE, 15);
}
apple.Broadcast.receiver('AAA').func = async function*(this:Sprite){
    console.log('Received [2]');
    await this.Control.wait(1);
}
apple.Broadcast.receiver('BBB').func = async function*(this:Sprite){
    apple.Looks.effect.clear();
}


Ts.engine.start();
