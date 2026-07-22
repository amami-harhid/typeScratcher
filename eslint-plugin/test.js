import parser from '@babel/parser';
import traverse from '@babel/traverse';

const code = `
const hoge = async function* () { /* グローバルのhoge */ };

function testScope() {
  // シャドーイング（スコープ内での再定義）
  const hoge = function() { /* 対象外のhoge */ };
  
  // この代入文における hoge は、直上で定義された「対象外のhoge」を指す
  cat.Event.flagPresser().func = hoge;
}
`;

const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: ['typescript']
});

let isSuccess = false;

traverse(ast, {
  AssignmentExpression(path) {
    const { left, right } = path.node;
    
    // 1. 左辺が cat.Event.func であるかチェック
    const isCatEventFunc = 
      left.type === 'MemberExpression' &&
      left.property.type === 'Identifier' && left.property.name === 'func' &&
      left.object.type === 'MemberExpression' &&
      left.object.property.type === 'Identifier' && left.object.property.name === 'Event'

    if (!isCatEventFunc) return;

    // 2. 右辺が識別子（変数名）かチェック
    if (right.type !== 'Identifier') return;

    const varName = right.name;

    // 3. 現在の代入式のスコープから、その変数名（hoge）の Binding（結合情報）を取得
    const binding = path.scope.getBinding(varName);
    if (!binding) {
      console.log(`変数 ${varName} の定義が見つかりませんでした。`);
      return;
    }

    // 4. 変数が宣言されたノード（VariableDeclarator）を取得
    if (binding.path.isVariableDeclarator()) {
      const init = binding.path.node.init;

      // 5. 初期化式が関数式（FunctionExpression や ArrowFunctionExpression）かチェック
      if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression')) {
        // 条件：async かつ generator であること
        if (init.async && init.generator) {
          isSuccess = true;
        }
      }
    }
  }
});

console.log(`チェック結果: ${isSuccess ? '適合' : '不適合'}`);