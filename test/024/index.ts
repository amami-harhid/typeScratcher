/**
 * いろいろ試そう-023
 * 
 * フォントロード
 */
import { Typescratcher as Ts } from "../../src";
import { Sprite, Stage, SvgImageAttributes } from "../../src";

//Ts.Env.debugMode = true;
// 【MAP読み込み】
import { Map01, WallWidth, WallHeight, Wall, type IWall } from "./sub/wall";
console.log(WallWidth, WallHeight)
import wallPng  from './assets/wall.png';
const WallImage = new Ts.Image({wallPng});
import cagePng from './assets/cage.png';
const CageImage = new Ts.Image({cagePng});

// 【画像読み込み】
import SlimeSvg from './assets/slime_a.svg';
const SlimeImage = new Ts.Image({SlimeSvg});
import BackdropBlackSvg from '../assets/backdropBlack.svg';
const BackdropBlackImage = new Ts.Image({BackdropBlackSvg});
import WaterSvg from '../assets/water.svg';
const WaterImage = new Ts.Image({WaterSvg});

// 【音を読み込む】
const Collect = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/32514c51e03db680e9c63857b840ae78.wav/get';
const CollectSound = new Ts.Sound({Collect});
const Chirp = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/3b8236bbb288019d93ae38362e865972.wav/get';
const ChirpSound = new Ts.Sound({Chirp});

// 【スプライト】壁
const wall = new Wall('wall');
wall.Costume.add( [WallImage] );
wall.Looks.hide();
const w = WallWidth;
const h = WallHeight;
// wall.Looks.size.w = w;
// wall.Looks.size.h = h;
// 【スプライト】Cage
const cage = new Wall('cage');
cage.Costume.add( [CageImage] );
cage.Looks.hide();
// cage.Looks.size.w = w;
// cage.Looks.size.h = h;

wall.Event.flagPresser().func = async function*(this:IWall){
    this.Looks.size.w = w;
    this.Looks.size.h = h;
}
cage.Event.flagPresser().func = async function*(this:IWall){
    this.Looks.size.w = w;
    this.Looks.size.h = h;
}

wall.Event.flagPresser().func = async function*(this:IWall){
    let y = - Math.floor( Map01.length/2 );
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const _row of Map01) {
        let x = - Math.floor( _row.length / 2 ); 
        //console.log(_row);
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(const _elem of _row) {
            if(0 < _elem ) {
                if(_elem == 9){
                    slime.Motion.position.xy = [ w*x, -h*y ];
                }else{
                    if(_elem == 1) {
                        this.Motion.position.xy =  [ w*x,  -h*y];
                        this.type = 1;
                        this.Control.clone();

                    }else if(_elem==2){
                        cage.Motion.position.xy = [ w*x, -h*y];
                        cage.type = 2;
                        cage.Control.clone();
                    }
                }
            }
            x+=1;
        }
        y+=1;
    }

}
wall.Event.cloned().func = async function*(this:IWall) {
    this.Looks.show();
}
cage.Event.cloned().func = async function*(this:IWall) {
    this.Looks.show();
}

// 【スプライト】(Spriteスライム)
const slime = new Ts.Sprite('slime');

// 画像をスプライトへ追加
slime.Costume.add( [SlimeImage] );
slime.Sound.add([ChirpSound, CollectSound]);
slime.Motion.position.xy = [ 0, 0 ];


// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage, BackdropBlackImage] );

// 文字列イメージ化
const HELLO = 'Hello world';
const attribute : SvgImageAttributes = {
    fill: '#f0f0f0', // 文字色
    font_family: Ts.ScratchFontFamily.Scratch
};
const helloImage = new Ts.FontImage(attribute);
await helloImage.textToSvg(HELLO);

const moji = new Ts.Sprite('moji');
moji.Costume.add( [helloImage] );
moji.Looks.layer.gotoBack();

moji.Event.flagPresser().func = async function*(this:Sprite) {
    this.Looks.layer.gotoFront();
    slime.Looks.layer.gotoFront();
}

// 変数
const touch = Ts.Variable.string( '' ); // タッチ
Ts.Variable.monitoring( { touch } );
touch.hide();


slime.Event.flagPresser().func = async function*(this:Sprite){
    // 大きさの設定
    this.Looks.size.w = w*0.8;
    this.Looks.size.h = h*0.8;
    touch.text = '' // 初期化

};
// const moveOtherCage = function(this:Sprite) {
//     const cloneWalls = (wall as Wall)
// }
// 【旗】が押されたとき
slime.Event.flagPresser().func = async function*(this:Sprite){
//    const _moveOtherCage = moveOtherCage.bind(this);
    for(;;) {
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.UP)) {
            this.Motion.position.y += h;
            if(this.Sensing.sprite.isTouching([wall], true)) {
                const _walls = this.Sensing.sprite.getTouching();
                const _wall = _walls[0] as Wall;
                if(_wall.type == 2) { // Cageのとき
                    
                }else{
                    this.Sound.play(CollectSound);
                    this.Motion.position.y -=h;

                }
            }else{
                this.Sound.play(ChirpSound);   
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.DOWN)) {
            this.Motion.position.y -= h;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Sound.play(CollectSound);
                this.Motion.position.y +=h;
            }else{
                this.Sound.play(ChirpSound);   
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.RIGHT)) {
            this.Motion.position.x += w;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Sound.play(CollectSound);
                this.Motion.position.x -=w;
            }else{
                this.Sound.play(ChirpSound);   
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.LEFT)) {
            this.Motion.position.x -= w;
            if(this.Sensing.sprite.isTouching([wall])) {
                this.Sound.play(CollectSound);
                this.Motion.position.x +=w;
            }else{
                this.Sound.play(ChirpSound);   
            }
        }
        if(this.Sensing.keyboard.isDown(Ts.Keyboard.ANY)) {
            await this.Control.waitUntil(()=>this.Sensing.keyboard.isNotDown(Ts.Keyboard.ANY));
        }
        yield;
    }
}
// 【旗】が押されたとき
slime.Event.flagPresser().func = async function*(this:Sprite){
    /** 色の変化量 */
    const changeColor = 15;
    for(;;) {
        this.Looks.effect.change(Ts.ImageEffective.COLOR, changeColor); // 色の効果を変える
        await this.Control.wait(0.1);
        yield;
    }
};

stage.Event.flagPresser().func = async function*(this:Stage) {
    this.Looks.backdrop.name = BackdropBlackImage.name;
}

// 開始
Ts.engine.start();
