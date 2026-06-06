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
以前のスレッドと並行動作する

## 全スレッドが終了したとき
赤い停止マークを 半透明にする --> リリース予定 0.0.10 

## TSソースをPUBLISH
libフォルダーのなかにindex.tsをつくる

## Sprite/StageをEntity内に入れる

## Typeフォルダー内をlib階層に合わせる

## index.ts のexport

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