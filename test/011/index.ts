/**
 * TEST 011
 * ・ 〇秒でXY座標へ移動、を２つ同時に！
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite } from '../../index';
import { cat } from './sub/sprites';
import { stage as _} from './sub/stage';
cat.Pen.prepare();
cat.Pen.penClear();
cat.Event.flagPresser().func = async function* (this: Sprite) {
    this.Motion.position.xy = [200,200];
    this.Pen.stamp();
    this.Motion.position.xy = [-200,-200];
    this.Pen.stamp();
    this.Motion.position.xy = [0,0];
    await this.Control.wait(1);
    await this.Motion.move.glideTo(10, 200, 200, this);
    //yield * this.Motion.move.scratch3GlideTo(10,200,200);
}
cat.Event.flagPresser().func = async function* (this: Sprite) {
    await this.Control.wait(2);
    await this.Motion.move.glideTo(2, -200, -200, this);
    //yield * this.Motion.move.scratch3GlideTo(2, -200, -200);
}

TS.engine.start();
