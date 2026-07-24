'use strict'
import { ErrorMessages } from "./messages.js";

/**
 * Event, Broadcast のスレッドは async関数、generator関数で有る必要がある。
 * エラーを検知し、Fixerで修正可能とする。
 */
const eventAsyncRule = {
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [],
        messages: {
            AsyncFunctionNeededId: ErrorMessages.AsyncFunctionNeededId, //'Change to "async function".',
            GeneratorFunctionNeededId:  ErrorMessages.GeneratorFunctionNeededId, //'Change to "function* ".',
        },
    },
    create(context){
        // 関数ノードが async generator かどうかを判定するヘルパー関数
        function checkFunctionNode(node) {
            if (!node) return;
            if (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
                const isAsync = node.async === true;
                const isGenerator = node.generator === true;
                if (!isAsync) {
                    context.report({
                        node: node,
                        messageId: "AsyncFunctionNeededId",
                        fix(fixer) {
                            return fixer.insertTextBefore(node, "async ");
                        }
                    })    
                }

                if (!isGenerator) {
                    const srcCode = context.sourceCode;
                    const srcText = srcCode.getText(node); //Function Node部をソーステキスト化
                    // function() を function* () に変換する
                    const rplSrc = srcText.replace(/function\s*\(/, 'function* (');
                    context.report({
                        node: node,
                        messageId: "GeneratorFunctionNeededId",
                        fix(fixer) {
                            return fixer.replaceText(node, rplSrc);
                        }
                    })    
                }
            }    
        }
        return {

            AssignmentExpression(node) {
                const { left, right } = node;
                // 1. 左辺が 対象条件を満たすことをチェック
                // Event.flagPresser().func 
                // Event.keyPresser('KEY').func
                // Event.clicker().func
                // Event.backdropSwitcher(backdrop).func
                const isTargetProperty =
                    left.type === 'MemberExpression' &&
                    left.property.type === 'Identifier' && left.property.name === 'func';
                if (!isTargetProperty) return;
                
                const callNode = left.object;
                const isTargetCall = callNode.type === 'CallExpression';
                if (!isTargetCall) return;

                const calleeNode = callNode.callee;
                // Event
                // 構造: [CallExpression] xxx.Event.flagPresser().func
                // 構造: [CallExpression] xxx.Event.keyPresser( key ).func
                // 構造: [CallExpression] xxx.Event.clicker().func
                // 構造: [CallExpression] xxx.Event.backdropSwitcher( backdrop ).func
                // 構造: [CallExpression] xxx.Event.cloned().func
                const isEventThreadSetter =
                    calleeNode.type === 'MemberExpression' &&
                    calleeNode.property.type === 'Identifier' && 
                    (
                        calleeNode.property.name === 'flagPresser' ||
                        calleeNode.property.name === 'keyPresser' ||
                        calleeNode.property.name === 'clicker' ||
                        calleeNode.property.name === 'backdropSwitcher' ||
                        calleeNode.property.name === 'cloned'

                    ) &&
                    calleeNode.object.type === 'MemberExpression' &&
                    calleeNode.object.property.type === 'Identifier' && calleeNode.object.property.name === 'Event' &&
                    calleeNode.object.object.type === 'Identifier';

                // Broadcast
                // 構造: [CallExpression] xxx.Broadcast.receiver( xxxxx ).func 
                const isBroadcastThreadSetter =
                    calleeNode.type === 'MemberExpression' &&
                    calleeNode.property.type === 'Identifier' && 
                    (
                        calleeNode.property.name === 'receiver'

                    ) &&
                    calleeNode.object.type === 'MemberExpression' &&
                    calleeNode.object.property.type === 'Identifier' && calleeNode.object.property.name === 'Broadcast' &&
                    calleeNode.object.object.type === 'Identifier';

                    if (!isEventThreadSetter && !isBroadcastThreadSetter) return;

                // 2. 右辺のタイプに応じて条件チェックを分岐
                
                // パターンA: 直接関数が代入されている場合 (async function* () {})
                if (right.type === 'FunctionExpression' || right.type === 'ArrowFunctionExpression') {
                    checkFunctionNode(right);
                }
                // パターンB: 変数を介して代入されている場合 (hoge)
                else if (right.type === 'Identifier') {
                    const varName = right.name;
                    // ESLint のスコープマネージャーから変数の定義を探す
                    const sourceCode = context.sourceCode || context.getSourceCode();
                    let scope = typeof sourceCode.getScope === 'function' 
                        ? sourceCode.getScope(node) 
                        : context.getScope();

                    let variable = null;
                    while (scope) {
                        variable = scope.set.get(varName);
                        if (variable) break;
                        scope = scope.upper;
                    }

                    if (!variable || variable.defs.length === 0) return;
                    const def = variable.defs[0];
                    if (!def || def.type !== 'Variable' || def.node.type !== 'VariableDeclarator') return;
                    
                    // 変数の初期化式（定義元）にある関数をチェック
                    checkFunctionNode(def.node.init);
                }
            },
        }
    },
}

export const eventAsyncRulesPlugin = { 
    meta:{
        name: 'event-async-plugin',
        version: '0.1.0',
    },
    rules: { "event-async-plugin": eventAsyncRule },
};
