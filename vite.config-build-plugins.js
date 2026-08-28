/**
 * このファイルの内容を変更してはいけません。
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { glob } from 'glob'

// ルートとするディレクトリー
const root = resolve(import.meta.dirname, './src/vitePlugins/')

// ビルド対象のディレクトリーをすべて取得( src の下の index.tsがあるディレクトリー)
const entries = glob.sync('./src/vitePlugins/index.ts');
const targetDir = []
for(const entry of entries) {
    const directory = entry
    targetDir.push(directory)
}
const rollupOpsionsInput = {}
for(const target of targetDir){
    rollupOpsionsInput[target] = resolve(root, 'index.ts')
}
// ビルド結果を出力する先
const outDir = resolve(import.meta.dirname, 'build/vitePlugins');


export default defineConfig({
    root, 
    build: {
        target: "esnext",
        ssr: true, // Node.js向けのライブラリビルドであることを明示
        outDir,
        minify: false,
        sourcemap: true,
        lib: {
            entry: {
                'index': 'index.ts',
            },
            formats: ["es"],
            // 出力ファイル名を固定で 'typescratcher.js' に指定
            fileName: () => `index.js`,
        },
        rolldownOptions: {
            output: {
                // インライン展開（動的インポートを含めすべて1つのチャンクにまとめる）
                // inlineDynamicImports: true,
                codeSplitting: false,
            }
        },
    },
    optimizeDeps: {
        rolldownOptions: {
            platform: 'browser'
        }
    }
})