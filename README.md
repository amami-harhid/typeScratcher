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

## 全スレッドが終了したとき
赤い停止マークを 半透明にする --> リリース予定 0.0.10 

## 緑の旗を連続クリック
旗をクリックされたときのイベントを停止したうえで
旗をクリックされたときのイベントを最初から実行

## 停止ボタンをクリック後の旗クリック
旗をクリックされたときのイベントを最初から実行
～停止ボタンでインターバル実行が停止しているかも
～繰返しが停止していたら再度繰返しタイマーを起動