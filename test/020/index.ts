/**
 * いろいろ試そう-006
 * 
 * 質問と回答
 */
import { Typescratcher as Ts } from "../../src/";
import { Sprite } from "../../src/";

//Ts.Env.debugMode = true;
//Ts.Env.fps = 5;

// 【画像読み込み】
import catSvg from '../assets/cat.svg';
const CatImage = new Ts.Image( {catSvg} );
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});

// 【スプライト】(Spriteネコ)
const cat = new Ts.Sprite('cat');
// 画像をスプライトへ追加
cat.Costume.add( [CatImage] );
cat.Motion.position.xy = [ 0, 0 ];

// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const answer = Ts.Variable.string(''); 
Ts.Variable.monitoring({'答え': answer});
answer.hide(); // 隠す

let askingNow = false;
cat.Event.flagPresser().func = async function*(this:Sprite){
    answer.hide();
    askingNow = false;
    this.Motion.position.xy = [ 0, 0 ];

};

const ASKING = 'ASKING';
cat.Event.keyPresser(Ts.Keyboard.SPACE).func = async function*(this:Sprite) {
    if(askingNow === true)
        return;
    this.Broadcast.send(ASKING);
}
cat.Broadcast.receiver(ASKING).func = async function*(this:Sprite) {
    console.log(ASKING)
    askingNow = true;
    answer.text = await this.Sensing.askAndWait('今日はご機嫌よろしいですか？')
    answer.show();
    if(answer.text == 'はい') {
        this.Looks.bubble.say('YES');        

    }else if(answer.text == 'いいえ') {
        this.Looks.bubble.think('no....');      

    }else{
        this.Looks.bubble.say('');
        askingNow = false;
        // 質問をする
        console.log('RE ASKING')
        this.Broadcast.send(ASKING);
        // TODO 再送信をしたら受信しないみたい。なぜ？？？
        // コードを見るかぎり、スレッドは消えていない様子。
    }

}

// 開始
Ts.engine.start();
