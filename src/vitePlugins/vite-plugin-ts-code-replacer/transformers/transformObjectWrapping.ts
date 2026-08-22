import MagicString from 'magic-string';
import { PluginError } from './transformer';

export function transformObjectWrapping(code: string, id: string): { code: string; map: any } {
    const s = new MagicString(code);
    
    // 複数行（改行やインデント）に対応した正規表現に変更
    // [^{)]*? で、カッコの開始から引数までの間の改行やスペースを柔軟にキャッチします
    const targetRegex = /(new\s+xx\.(?:Image|Sound)|\.Variable\.monitoring)\(\s*([^{)\s][^)\s]*?)\s*\)/g;

    let match;
    while ((match = targetRegex.exec(code)) !== null) {
        const [fullMatch, prefix, argumentText] = match;
        const matchIndex = match.index;

        const cleanArg = argumentText.trim();
        const isIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(cleanArg);

        if (!isIdentifier) {
            const { line, column } = getLineAndColumn(code, matchIndex);
            const error = new Error(`Please specify a variable as the argument. Automatic object conversion is not supported.`) as PluginError;
            error.loc = { file: id, line, column };
            error.frame = fullMatch;
            throw error;
        }

        // 🌟 行数を完全に維持するため、元の引数の文字列（インデント等含む）をそのまま活かして
        // カッコの「直後」と「直前」に波カッコを差し込むだけのピンポイント置換を行います。
        const startIndex = matchIndex;
        const endIndex = startIndex + fullMatch.length;

        // 引数の前後の改行やインデント（argumentText）を一切破壊せず、外側に { } をつけるだけ
        // これにより、3行で書かれたコードは、1行も増減せずにそのまま3行の `{ ... }` になります。
        const replacement = `${prefix}({ ${argumentText} })`;
        
        s.overwrite(startIndex, endIndex, replacement);
    }

    return {
        code: s.toString(),
        map: s.generateMap({ hires: true })
    };
}

/**
 * 文字列のインデックスから行番号と列番号（1始まり）を計算するヘルパー
 */
function getLineAndColumn(code: string, index: number): { line: number; column: number } {
    const lines = code.substring(0, index).split('\n');
    return {
        line: lines.length,
        column: lines[lines.length - 1].length + 1
    };
}