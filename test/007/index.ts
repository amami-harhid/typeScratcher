/**
 * TEST 007
 * ・文字列をSVG化してスプライトで表示
 * ・ネコが文字に触れたらネコが"TOUCH"と言う
 */
import { Typescratcher as TS } from '../../src';
import type { Sprite, Stage } from '../../src';
import { num } from './sub/num';
import { cat } from './sub/cat';
import { stage } from './sub/stage';

// 変数 stage を参照しないと './sub/stage' が実行されない
const _1 = stage;
type _2 = Stage;

stage.Event.flagPresser().func = async function*(this:Stage) {
    //const wait2 = this.Control.wait2(2);
    for(;;){
        this.Looks.backdrop.next();
        await this.Control.wait(1);
        yield;
    }
}
num.Event.flagPresser().func = async function*(this: Sprite) {
    for(;;){
        this.Looks.costume.next();
        await this.Control.wait(2);
        yield;
    }
}
cat.Event.flagPresser().func = async function*(this: Sprite) {
    this.Motion.direction.degree = 30;
    for(;;){
        this.Motion.move.steps(5);
        this.Motion.move.ifOnEdgeBounce();
        yield;
    }
}
cat.Event.flagPresser().func = async function*(this: Sprite) {
    for(;;){
        if(this.Sensing.sprite.isTouching([num])){
            this.Looks.bubble.say("TOUCH");
        }else{
            this.Looks.bubble.say("");
        }
        yield;
    }
}
TS.engine.start();
