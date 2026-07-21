import parser from '@babel/parser';
import traverse  from '@babel/traverse';

const code = `
const hoge = async function* (this: Sprite ) {
  // something
}
cat.Event.func = hoge;
`;

// TypeScript や Flow の型構文が含まれるため、plugins に 'typescript' または 'flow' を指定します
const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript'] 
});

let isAsyncGenerator = false;
let targetIdentifierName = null;

// 1. cat.Event.func = hoge; の代入式を探し、右辺の変数名（hoge）を取得
traverse(ast, {
    AssignmentExpression(path) {
        const { left, right } = path.node;
    
        // 左辺が cat.Event.func に一致するか簡易チェック
        const isCatEventFunc = 
            left.type === 'MemberExpression' &&
            left.property.type === 'Identifier' && left.property.name === 'func' &&
            left.object.type === 'MemberExpression' &&
            left.object.property.type === 'Identifier' && left.object.property.name === 'Event';// &&
            //left.object.object.type === 'Identifier' && left.object.object.name === 'cat';

        if (isCatEventFunc && right.type === 'Identifier') {
            targetIdentifierName = right.name; // "hoge" を取得
        }
    }
});

// 2. 定義された変数（hoge）の中身が「async」かつ「generator」かチェック
if (targetIdentifierName) {
    traverse(ast, {
        VariableDeclarator(path) {
            if (path.node.id.type === 'Identifier' && path.node.id.name === targetIdentifierName) {
                const init = path.node.init;
        
                // 関数式（FunctionExpression / ArrowFunctionExpression）のプロパティを確認
                if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression')) {
                    if (init.async && init.generator) {
                        isAsyncGenerator = true;
                    }
                }
            }
        }
    });
}

console.log(`チェック結果: ${isAsyncGenerator ? '適合' : '不適合'}`);