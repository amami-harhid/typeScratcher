/**
 * TEST 010
 * ・ ランダムな位置へ移動
 * ・ マウスの位置へ移動
 * ・ スプライトの位置へ移動
 * ・ 〇秒でXY座標へ移動
 */
import { Typescratcher as TS } from '../../src/index';
import type { Sprite, Stage } from '../../src/index';
import { cat, arrow } from './sub/sprites';
import { stage } from './sub/stage';

cat.Event.flagPresser().func = async function*(this: Sprite) {
    this.Motion.direction.degree = 90;
    for(;;){
        this.Motion.move.toRandom();
        //await this.Control.wait(0.01);
        yield;
    }
}
cat.Event.flagPresser().func = async function*(this: Sprite) {
    await this.Control.wait(5);
    this.Control.stopOtherScripts();
    for(;;) {
        this.Motion.move.toSprite(arrow);
        yield;
    }
}
cat.Broadcast.receiver('GLIDE').func = async function*(this:Sprite) {
    this.Control.stopOtherScripts();
}
arrow.Event.flagPresser().func = async function*(this: Sprite) {
    this.Motion.direction.degree = 90;
    for(;;){
        this.Motion.move.toMouse();
        yield;
    }
}
arrow.Broadcast.receiver('GLIDE_START').func = async function*(this:Sprite) {
    for(const idx of TS.Loop.Iterator(2,1)){
        await this.Control.wait(1);
        console.log(`this.Motion.position.xy=${this.Motion.position.xy}`);
        this.Looks.bubble.say(`${idx}秒`)
        yield;
    }
    await this.Control.wait(1);
    console.log(`this.Motion.position.xy=${this.Motion.position.xy}`);
    this.Looks.bubble.say('');

}
arrow.Event.keyPresser('a').func = async function*(this:Sprite) {
    for(const _ of TS.Loop.Iterator(3)) {
        this.Motion.move.to( [ 0, 0 ]);
        await this.Control.wait(0.1);
        this.Motion.move.to( [ 200, 50 ]);
        await this.Control.wait(0.1);
        yield;
    }
    this.Motion.move.to( [ 0, 0 ]);
    await this.Motion.move.glideTo( 2, [ 200, 50] );
}
arrow.Event.keyPresser(TS.Keyboard.SPACE).func = async function*(this:Sprite) {
    this.Motion.position.y += 50;
}
arrow.Broadcast.receiver('GLIDE').func = async function*(this:Sprite) {
    this.Control.stopOtherScripts();
    this.Motion.move.to( [0, 0]);
    await this.Control.wait(1);
    await this.Motion.move.glideTo( 5, [100, 100]);
}
stage.Event.flagPresser().func = async function*(this: Stage) {
    for(;;){
        this.Looks.backdrop.next();
        await this.Control.wait(2);
        yield;
    }
}
stage.Event.flagPresser().func = async function*(this: Stage) {
    await this.Control.wait(10);
    await this.Broadcast.sendAndWait('GLIDE');
    this.Control.stopAll();
}
TS.engine.start();
