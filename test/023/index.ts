/**
 * いろいろ試そう-023
 * 
 * フォントロード
 */
import { Typescratcher as Ts } from "../../src";
import { Sprite, SvgImageAttributes } from "../../src";

Ts.Env.debugMode = true;

//【フォント読み込み】
const HarryPotter = "https://amami-harhid.github.io/tscratch3assets/assets/fonts/HarryPotter-ov4z.woff";
const HarryPotterFont = new Ts.Font({HarryPotter: HarryPotter});

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

// 大きさの設定
cat.Looks.size.scale = [250, 250];

// 文字列イメージ化
const HELLO = 'Hello world';
const attribute: SvgImageAttributes = {
    fill: '#f0f0f0', // 文字色
    font_weight: 'bold',
    font_family: HarryPotterFont.name,
    //scratch_font_family: HarryPotterFont.name, //Ts.ScratchFontFamily.Handwriting
};

const moji = new Ts.Sprite('moji');
// Fontを追加
moji.Font.add( [HarryPotterFont] );
const helloImage = await Ts.Image.createSvgImage({HELLO}, attribute); // ESLint で await をつける
moji.Costume.add( [helloImage] ); // <--- 文字中央にならない！！改良必要。
moji.Looks.layer.gotoBack();


// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const speechText = Ts.Variable.string( 'おーい、触っちゃだめよ' ); // タッチ
Ts.Variable.monitoring( { text: speechText } );

cat.Event.flagPresser().func = async function*(this:Sprite){
    this.Looks.size.scale = [250, 250];
    this.Speech.locale(Ts.SpeechLocale.JAPANESE).type(Ts.VoiceType.KITTEN).typeCopyTo("001").gender(Ts.SpeechGender.FEMALE).addPitch(100);
    this.Speech.locale(Ts.SpeechLocale.JAPANESE).type(Ts.VoiceType.TENOR).typeCopyTo("002").addPitch(150);
    const _touch = () => {
        return this.Sensing.mouse.isTouching;
    }
    let speechFlag = true;
    for(;;) {
        if(_touch()){
            // スピーチする
            if(speechFlag){
                // ピッチ加工したFEMAILの声
                await this.Speech.type("001").speech(speechText.text);

            }else{
                // ピッチ加工したMAILの声
                await this.Speech.type("002").speech(speechText.text);

            }
            speechFlag = !speechFlag;
            // 触っている間、待つ
            await this.Control.waitWhile(_touch);
        }
        yield;
    }

};



// 開始
Ts.engine.start();
