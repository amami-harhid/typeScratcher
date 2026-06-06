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

# 緑の旗を連続でクリック
以前のスレッドと並行動作してしまう。旗クリックでイベントをやり直すこと。
--> 完了 ( 0.0.15 )


## 全スレッドが終了したとき
赤い停止マークを 半透明にする --> 完了：0.0.10 

## TSソースをPUBLISH
libフォルダーのなかにindex.tsをつくる --> 完了: 0.0.10

## Sprite/StageをEntity内に入れる
--> 完了: 0.0.10

## Typeフォルダー内をlib階層に合わせる
--> 完了: 0.0.10

## index.ts のexport
--> 完了: 0.0.10

```
export const Typescratcher = {
    Sprite,
    Stage,
    Image,
    Sound,
    Rotation,
    KEYBOARD_KEYS,
    Timer,
    Playground,
    playground,
}
```

## 実行中スレッドの数の監視
停止したスレッドは、スレッドプールから適切に削除されていること

## Bubble(ふきだし)がスプライトの位置を追跡しない
---> 完了 ( 0.0.15 )

## QuestionBoxElement内で半角スペース入力抑止

半角スペース入力抑止をしている理由を忘れてしまった。
そもそも、抑止をしている場所が「文字列入力終了」時点であるのが不思議な感じがしている。
