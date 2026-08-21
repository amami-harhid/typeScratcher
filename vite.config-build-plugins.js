/**
 * このファイルの内容を変更してはいけません。
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'

// ルートとするディレクトリー
const root = resolve(__dirname, './src/vitePlugins/')

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
const outDir = resolve(__dirname, 'build/vitePlugins');

export default defineConfig({
    build: {
        target: "esnext",
        ssr: true, // Node.js向けのライブラリビルドであることを明示
        lib:{
            entry: resolve(__dirname, './src/vitePlugins/index.ts'),
            formats: ["es"],
        },
        outDir, // ビルド結果を格納する先
        rollupOptions: {
            // typescript モジュールをビルド結果に含めず、外部依存にする設定
            external: ['typescript', 'vite', 'path', 'fs'], 
            output: {
                format:"es",
                entryFileNames:'index.js',
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
    root: resolve(__dirname, './src/vitePlugins/'),
})