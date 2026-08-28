/**
 * このファイルの内容を変更してはいけません。
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'

// ビルド結果を出力する先
const outDir = resolve(import.meta.dirname, 'build');

export default defineConfig({
    root: resolve(import.meta.dirname, './src'),
    build: {
        target: "esnext",
        outDir,
        minify: false,
        sourcemap: true, 
        lib: {
            entry: resolve(import.meta.dirname, 'src/index.ts'),
            formats: ["es"],
            // 出力ファイル名を固定で 'typescratcher.js' に指定
            fileName: () => `typescratcher.js`,
        },
        rolldownOptions: {
            output: {
                // インライン展開（動的インポートを含めすべて1つのチャンクにまとめる）
                //inlineDynamicImports: true,
                codeSplitting: false,
            }
        },
    },
})