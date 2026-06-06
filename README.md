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
