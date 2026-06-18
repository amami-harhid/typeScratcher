/**
 * TEST 008
 * ・Test 007 で コスチューム変更、背景変更の同期を合わせる
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';
import { num } from './sub/num';
import { cat } from './sub/cat';
import { stage } from './sub/stage';

stage.Event.flagPresser().func = async function*(this:Stage) {
    let count = 0;
    for(;;){
        count += 1;
        if( count % 2 == 0 ) {
            this.Broadcast.send('COSTUME_NEXT');
            count = 0;
        }
        this.Broadcast.send('BACKDROP_NEXT');
        await TS.Timer.wait(1);
        yield;
    }
}

stage.Broadcast.receiver("BACKDROP_NEXT").func = async function*(this:Stage) {
    this.Looks.backdrop.next();
}
num.Broadcast.receiver("COSTUME_NEXT").func = async function*(this: Sprite) {
    this.Looks.costume.next();
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
