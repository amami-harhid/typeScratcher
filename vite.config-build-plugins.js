/**
 * このファイルの内容を変更してはいけません。
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'

// ルートとするディレクトリー
const root = resolve(__dirname, './src/vitePlugins/vite-plugin-ts-code-replacer/')

// ビルド対象のディレクトリーをすべて取得( src の下の index.htmlがあるディレクトリー)
const entries = glob.sync('./src/vitePlugins/vite-plugin-ts-code-replacer/index.ts');
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
const outDir = resolve(__dirname, 'build/vitePlugins');

export default defineConfig({
    build: {
        target: "esnext",
        ssr: true, // Node.js向けのライブラリビルドであることを明示
        lib:{
            entry: resolve(__dirname, './src/vitePlugins/vite-plugin-ts-code-replacer/index.ts'),
            formats: ["es"],
        },
        outDir, // ビルド結果を格納する先
        rollupOptions: {
            // typescript モジュールをビルド結果に含めず、外部依存にする設定
            external: ['typescript', 'vite', 'path', 'fs'], 
            output: {
                format:"es",
                entryFileNames:'vite-plugin-ts-code-replacer.js',
            }
        },
    },
    esbuild: {
        target: "esnext",

    },
    optimizeDeps:{
        esbuildOptions: {
            target: "esnext",
        }
    },
    root: resolve(__dirname, './src/vitePlugins/vite-plugin-ts-code-replacer/'),
})