/**
 * このファイルの内容を変更してはいけません。
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'
//import topLevelAwait from 'vite-plugin-top-level-await';
import pkg from './package.json';
const name = JSON.stringify(pkg.name);

// ルートとするディレクトリー
const root = resolve(__dirname, './src/')

// ビルド対象のディレクトリーをすべて取得( src の下の index.htmlがあるディレクトリー)
const entries = glob.sync('./src/index.ts');
const targetDir = []
for(const entry of entries) {
    const directory = entry
    targetDir.push(directory)
}
const rollupOpsionsInput = {}
for(const target of targetDir){
    rollupOpsionsInput[target] = resolve(root, 'index.ts')
}
console.log(rollupOpsionsInput);
// ビルド結果を出力する先
const outDir = resolve(__dirname, 'build');

export default defineConfig({
    build: {
        target: "esnext",
        lib:{
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ["es"],
        },
        outDir, // ビルド結果を格納する先
        rollupOptions: {
            output: {
                format:"es",
                // 強制単一チャンク
                manualChunks: () => '${name}.js'
            }
        },
    },
    esbuild: {
        supported: {
//            'top-level-await': true
        },
        target: "esnext",

    },
    optimizeDeps:{
        esbuildOptions: {
            target: "esnext",
        }
    },
    root: resolve(__dirname, './src'),
})