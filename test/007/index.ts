/**
 * TEST 007
 * ◇ 文字列をSVG化してスプライトで表示
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';
import { num } from './sub/num';
import { cat } from './sub/cat';
import { stage } from './sub/stage';

// 変数 stage を参照しないと './sub/stage' が実行されない
const _1 = stage;
type _2 = Stage;

num.Event.flagPresser().func = async function*(this: Sprite) {
    for(;;){
        this.Costume.next();
        await this.Control.wait(1);
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

TS.engine.start();
