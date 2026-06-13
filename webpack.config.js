import path from 'path';
import url from 'url';
const dirname = path.dirname;
const fileURLToPath = url.fileURLToPath;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import webpack from 'webpack';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import pkg from './package.json' with { type: 'json' };
const version = JSON.stringify(pkg.version);
const config = {
    mode: 'production',
    context: `${__dirname}/src`,
    entry: {
        'index': path.join(__dirname, '/src', 'index.ts')
    },
    target: "web",
    output: {
        path: path.join(__dirname, '/.build'),
        filename: 'index.js', //まとめた結果出力されるファイル名
        library:{
            type: "module",
        }
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        alias: {
            '@Type': path.resolve(__dirname, 'Type'),
            '@Lib': path.resolve(__dirname, 'lib')
        },
        extensions: ['.ts','.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({ __s3_version__: version }),
        new NodePolyfillPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\src\/*\.ts$/,
                loader: 'exports-loader',
                options: {
                    exports: 'playGround',
                }
            }
        ]
    }
}
export default config;