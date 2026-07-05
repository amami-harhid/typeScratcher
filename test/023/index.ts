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

//await HarryPotterFont.load();

cat.Motion.position.xy = [ 0, 0 ];

// 大きさの設定
cat.Looks.size.scale = [250, 250];

// 文字列イメージ化
const HELLO = 'Hello world';
const attribute: SvgImageAttributes = {
    fill: '#f00000', // 文字色
    //font_weight: 'normal',
    font_family: HarryPotterFont.name,
    //scratch_font_family: Ts.ScratchFontFamily.Handwriting
};

const moji = new Ts.Sprite('moji');
const helloImage = new Ts.FontImage(attribute);
moji.Costume.add( [helloImage] );
await helloImage.textToSvg(HELLO);

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
                await helloImage.textToSvg("FEMAIL");
                // ピッチ加工したFEMAILの声
                await this.Speech.type("001").speech(speechText.text);

            }else{
                await helloImage.textToSvg("MAIL");
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
