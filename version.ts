/**
 * VERSION
 * package.jsonのバージョンを取り込む
 * __s3_version__ は 自分で定義したグローバル変数(webpack.config.js, vite.config.js 参照)
 */
import pkg from './package.json';
export const Version = pkg.version;
