# @amami-harhid@typeScratcher
This is a TypeScript library that generates Scratch 3-style drawings.

# 準備

npm ci

# テスト実行

npm run dev /test/

# ビルド

npm run webpack


# npm publish

- npm adduser
- npm publish

# TODO


# 赤ボタンで停止した後、旗クリックが効かない
赤ボタンで停止した後に旗クリックをすると、動作が始まらない。
赤ボタンで停止するとき、
Proxyで「このスクリプトを止める」フラグオンとしスローを発生させている。フラグオンのままなので再実行ですぐにスローしていた。
フラグをオフに（Proxyを再生成)した。
完了 ---> 0.0.17

## 実行中スレッドの数の監視
停止したスレッドは、スレッドプールから適切に削除されていること


## QuestionBoxElement内で半角スペース入力抑止

半角スペース入力抑止をしている理由を忘れてしまった。
そもそも、抑止をしている場所が「文字列入力終了」時点であるのが不思議な感じがしている。

## スプライトクリックされたときを実装
実装 0.0.19

## 一時停止中に旗クリックしても動作開始をしない
ScratchEvent.ts 修正
Threads.ts 修正
一時停止すると、スレッドインターバルを抑止してしまうので、旗クリック時に抑止解除する


## 終わるまで音を鳴らす（連続）

「終わるまで音を鳴らす」の実行中に同じ音で「終わるまで音を鳴らす」をすると前回の再生が止まる（新しく先頭から鳴り出す）
これは正解か？ →　Scratch3本家の同じ動作であるので正解とする。

## Sprite#Scale 設定変更
0.0.19

## メッセージ受信処理
0.0.19

threadObjを作り出しステータスはYIELDにせずに threadManager.registThread() をする
メッセージIDに紐づく 配列へthreadObjを追加していく
メッセージIDのScratchEventを受信(on)したとき(※1)
・配列からthreadObjを取り出し、取り出したすべてのthreadObjへ対して、
・・ステータスが実行中の場合、強制終了
・・ステータス(YIELD以外)の場合、YIELD (待機中)にする

## ImageEffect 実装
実装：　色、幽霊、ピクセルなど(0.0.20)

## PEN機能 (+Stamp)
実装： 0.0.21

## スプライト PNG画像
サイズを半分にするとちょうどいい。
なぜか？検証が必要。

## ステージ背景、PNG画像
どんな感じになるかを検証すべき
検証済。 ステージのupdate処理にバグあり。修正済。

## エンティティ.Image.effect 参照NGとした
0.0.22 #02 

## エンティティ第二階層
0.0.22 #02 

小文字始まりにする
例
apple.Looks.Effect.clear()
    ↓
apple.Looks.effect.clear()

## Bubble willReadFrequently対応
0.0.22 #02 
同時に、ELementを ScratchElementと名称変更

## 全てのスレッドが終了したとき
赤ボタンを非活性にする
0.0.22 #03

## Timer.wait を使用不可にする
0.0.22 #04

## playground → engine と名称変更
～ engine.start() のみを公開
0.0.22 #05

## 背景切り替え時のイベント処理
0.0.22 #06 (実装済)
0.0.22 #07 (実装済)

## 背景切替、コスチューム切替の個別指定
名称ではなく、Imageを渡すほうが直感的だと思う
0.0.23 #01 (実装済)

## メッセージ送受信時の引数
0.0.24 #01 (実装済)

## 一時停止中に旗クリック
音がならなくなる不具合あり。
0.0.25 #01 

## 文字列をSVG化してコスチュームにできるようにした
0.0.25 #05 ( 実装済 )

## Font-Family の設定方法を調査すること
0.0.25 #05 ( 実装済 )
```:lib/text/index.ts
text.setAttribute('font-family', 'Marker');

## test/007
コスチューム変化を 2秒ごと、背景変化を 1秒ごと ==> だんだんとずれていく
コスチューム変化を 4秒ごと、背景変化を 1秒ごと ==> だんだんとずれていく(ずれる具合が大)
コスチューム変化を 1秒ごと、背景変化を 1秒ごと ==> ずれない
コスチューム変化を 4秒ごと、背景変化を 4秒ごと ==> ずれない
Scratch3本家も同様の傾向にあるので仕様通りとする

Timer.wait(sec) のなかで setTimeout(()=>{}, sec*1000) でPromise終了をさせている。
Scratch3本家の実装に寄せると、yield を使うことになり、利用者にとって面倒になるし、
今のままでも本家の動作結果と大差がないので 本家実装には寄せないことにする。

## マウスがステージの外に出たときの対応

## Motion.move.glideTo() 実装

glideTo()を同時に並列動作させたときの動作を 本家に寄せられないか？


## クローン
実装中 (0.0.27)
クローンされたときのイベントで、クローン側のプロパティを操作すると
本体側も変化してしまうような事象あり。

## vite 実行時のエラー

[vite-plugin-static-copy] Error: No file was found to copy on D:\Scratch3\ts\typeScratcher\CNAME src.