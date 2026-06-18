/**
 * TEST 009
 * ◇ 文字列をSVG化してスプライトで表示
 * ◇ "1" ～ "20" の文字 を生成する
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage as _ } from '../../index';
import { num } from './sub/num';
import { cat } from './sub/cat';
import { stage } from './sub/stage';

// 変数 stage を参照しないと './sub/stage' が実行されない
const _1 = stage;

num.Event.flagPresser().func = async function*(this: Sprite) {
    for(;;){
        this.Looks.costume.next();
        await this.Control.wait(0.01);
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
