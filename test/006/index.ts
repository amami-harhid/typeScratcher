/**
 * TEST 006
 * ◇ Spriteで 背景を no, name で切り替える
 * ◇ 背景変わったときに待つ
 */
import { Typescratcher as TS } from '../../index';
import type { Sprite, Stage } from '../../index';

import CatSvg from '../assets/cat.svg';
import BlueskySvg from '../assets/Blue Sky.svg';
import BasketBallPng from '../assets/Basketball 2.png';

const BlueskyImage = new TS.Image({BlueskySvg});
const BasketballImage = new TS.Image({BasketBallPng});
const CatImage = new TS.Image({CatSvg});

const cat = new TS.Sprite('cat');
cat.Costume.add([CatImage]);

const stage = new TS.Stage();
stage.Backdrop.add([BlueskyImage, BasketballImage]);

cat.Event.flagPresser().func = async function*(this: Sprite) {
    for(;;){
        // 「次の背景にするよ」と2秒間言う
        await this.Looks.bubble.sayForSecs("次の背景にするよ",2);
        await this.Backdrop.nextAndWait();
        yield;
    }
}

// メッセージ受信( 引数付き )
cat.Broadcast.receiver("COUNT").func = async function*(this:Sprite, counter:number) {
    this.Looks.bubble.say(`${counter}秒`);
}

// 背景（BlueskyImage）になったときのイベント
cat.Event.backdropSwitcher(BlueskyImage).func = async function*(this:Sprite) {
    // 2秒後に終了する
    let counter = 0;
    for(;;) {
        counter += 1;
        // メッセージ送信（引数付き）
        this.Broadcast.send("COUNT", counter);
        await this.Control.wait(1);
        if(counter == 2) break;
        yield;
    }
}

// BasketballImage
stage.Event.backdropSwitcher(BasketballImage).func = async function*(this:Stage) {

    // 5秒後に終了する
    let counter = 0;
    for(;;) {
        counter += 1;
        // メッセージ送信（引数付き）
        this.Broadcast.send("COUNT", counter);
        await this.Control.wait(1);
        if(counter == 5) break;
        yield;
    }

}

TS.engine.start();
