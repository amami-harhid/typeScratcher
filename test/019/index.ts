/**
 * いろいろ試そう-006
 * 
 * 自由落下
 */
import { Typescratcher as Ts } from "../../src/";
import { Sprite } from "../../src/";
//Ts.Env.debugMode = true;
//Ts.Env.fps = 5;

// 【画像読み込み】
import catSvg from '../assets/cat.svg';
const CatImage = new Ts.Image( {catSvg} );
import dogPng from '../assets/front_01.svg';
const DogImage = new Ts.Image( {dogPng} );
import blockSvg from '../assets/block.svg';
const BlockImage = new Ts.Image({blockSvg});
import WaterSvg from '../assets/water.svg';
import { TBoundsEx } from "src/type/common/typeCommon";
const WaterImage = new Ts.Image({WaterSvg});

// 【スプライト】(犬)
const dog = new Ts.Sprite('dog');
// 画像をスプライトへ追加
dog.Costume.add( [DogImage, CatImage] );
dog.Looks.size.scale = [20, 20];
dog.Motion.position.xy = [ 0, 200 ];

// ステージの幅
const StageWidth = Ts.StageBounds.w;
const StageHeight = Ts.StageBounds.h;

// 【スプライト】(ブロック)
const block = new Ts.Sprite('block');
block.Costume.add( [ BlockImage ] );
block.Looks.visible.hide(); // 非表示にする
block.Looks.effect.set(Ts.ImageEffective.GHOST, 50);
// 【ステージ】(water)
const stage = new Ts.Stage();
stage.Backdrop.add( [WaterImage] );

// 変数
const mouse = Ts.Variable.string(''); 
Ts.Variable.monitoring({mouse});
mouse.hide(); // 隠す

dog.Event.flagPresser().func = async function*(this:Sprite){
    this.Motion.position.xy = [ 0, 200 ];
    this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT; // 左右のみ反転

};

block.Event.flagPresser().func = async function*(this:Sprite){
    
    this.Looks.visible.show();

    this.Motion.position.xy = [0,0];

    this.Looks.size.drawingSize = {w:StageWidth};

    //const blockY = boundsHeight/2 -StageHeight/2
    this.Motion.position.y =-StageHeight/2

    const BlockBounds = block.Looks.size.drawingSize;
    //console.log('In block.Event.flagPresser, BlockBounds=', BlockBounds)
    //console.log('this.Motion.position.y=', this.Motion.position.y)
    this.Broadcast.send('START', BlockBounds);
};

const INIT_JUMP = 50;
const GRAVITY = 9.8;
let speed = 0;
let onFloor = false;
/**
 * moveSpeed の速さで移動したとき targetに衝突するかを判定する
 */
const isTouching = function(this:Sprite, target:Sprite, moveSpeed: number):boolean {
    //console.log('speed=', moveSpeed);
    //this.Pen.penClear();
    //this.Pen.drawBounds();
    const bounds = this.Looks.size.drawingSize;
    // 自分自身の高さ
    const ownHeight = bounds.height;
    // ターゲットの上辺の座標位置
    const targetUpperY = target.Looks.size.drawingSize.top;
    //const targetUpperY = target.Looks.size.drawingSize.height/2 - StageWidth / 2;
    // 次に予想される自分自身の位置
    const nextY = this.Motion.position.y + moveSpeed;
    // 次に予想される自分自身の底辺の座標位置
    const ownBottomY = nextY - ownHeight / 2;
    if( ownBottomY > targetUpperY ) {
        return false;
    }
    return true;

}
// 旗が押されたとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite, BlockBounds: TBoundsEx) {

    //console.log(BlockBounds);
    //const BlockHeight = BlockBounds.height;
    //const BlockPositionY = BlockBounds.top - BlockHeight/2;
    //console.log('BlockPositionY=', BlockPositionY, "block.y=", block.Motion.position.y);
    //const BlockYDiff = block.Motion.position.y - BlockPositionY;
    //console.log('BlockYDiff=', BlockYDiff)
    speed = 0;
    onFloor = false;
    //console.log(`blockBoundsHeight=${BlockBounds.height}`)
    const Bounds = this.Looks.size.drawingSize;
    const DogHeight = Bounds.height;
    // 所定の移動をした場合に衝突が予測される場合に移動前に検知する仕組み
    // 衝突ぎりぎりのところで止まる仕組み
    // これは端に触れたときに止める仕組みと同じだが端の場合は垂直・水平が保証されている。
    // 垂直・水平が保証されないときに 

    // 
    const _diffY = Bounds.top - DogHeight/2 - this.Motion.position.y;
    //console.log('_diffY=',_diffY)
    const _IsTouching = isTouching.bind(this);
    //this.Pen.prepare();
    this.Pen.penDown();

    // ずっと繰り返す
    for(;;){
        if(_IsTouching(block, speed)){
            //console.log('_IsTouching');
            // 次に衝突が予想されるので衝突ギリギリに位置を変える
            this.Motion.position.y = BlockBounds.height/2 -StageHeight/2 + (DogHeight/2) - _diffY;
            //this.Motion.position.y = blockBoundsHeight/2 - StageHeight/2 + (DogHeight/2);
            onFloor = true;
            speed = 0;
        }
        // 自由落下
        if(onFloor === false ) {
            this.Motion.position.y += speed;
            this.Motion.move.steps(walkSpeed);
            speed -= GRAVITY;
        }
        yield;
    }
}
let walkSpeed = 0;
// メッセージ（START)を受け取ったとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite) {

    this.Motion.rotation.style = Ts.Rotation.LEFT_RIGHT; // 左右のみ反転
    // ずっと繰り返す
    for(;;){
        if( onFloor === true){
            // 進める
            if(this.Sensing.keyboard.isDown(Ts.Keyboard.RIGHT)){
                this.Motion.direction.degree = 90;
                walkSpeed = 10;
                this.Motion.move.steps(walkSpeed);
            }else if(this.Sensing.keyboard.isDown(Ts.Keyboard.LEFT)){
                this.Motion.direction.degree = -90;
                walkSpeed = 10;
                this.Motion.move.steps(walkSpeed);
            }else{
                walkSpeed = 0;
            }
            //this.Motion.move.steps(10);
            // 端についたら跳ね返る
            this.Motion.move.ifOnEdgeBounce();
        }
        yield;
    }
}

// メッセージ（START)を受け取ったとき
dog.Broadcast.receiver("START").func = async function*(this: Sprite) {

    for(;;) {
        if(onFloor === true && this.Sensing.keyboard.isDown(Ts.Keyboard.SPACE)){
            speed = INIT_JUMP;
            onFloor = false;
            await this.Control.waitWhile(()=>this.Sensing.keyboard.isDown(Ts.Keyboard.SPACE));
        }
        yield;
    }
}
dog.Event.flagPresser().func = async function*(this:Sprite) {
    mouse.show();
    for(;;){
        mouse.text = `x=${this.Sensing.mouse.x}, y=${this.Sensing.mouse.y}`;
        yield;
    }
}

// 開始
Ts.engine.start();
