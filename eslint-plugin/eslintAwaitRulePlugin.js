'use strict'
import { ErrorMessages } from "./messages.js";

const awaitcheckerDouble = (context, node, firstName, secondName) => {
    const parent = node.parent;
    if(parent && parent.type == 'MemberExpression') {
        if(parent.object && parent.object.property 
            && parent.object.property.name == secondName 
            && parent.object.object && parent.object.object.property
            && parent.object.object.property.name == firstName){
            const parent2 = parent.parent;
            if(parent2 && parent2.type == 'CallExpression') {
                const parent3 = parent2.parent;
                if(parent3 && parent3.type!='AwaitExpression'){
                    context.report({
                        node,
                        messageId: "AwaitRequired",
                        fix(fixer) {
                            return fixer.insertTextBefore(parent2, "await ");
                        }
                    })                
                }
            }
        }
    }
}
const awaitcheckerSingle = (context, node, firstName) => {
    const parent = node.parent;
    if(parent && parent.type == 'MemberExpression') {
        if(parent.object && parent.object.property 
            && parent.object.property.name == firstName ){
            const parent2 = parent.parent;
            if(parent2 && parent2.type == 'CallExpression') {
                const parent3 = parent2.parent;
                if(parent3 && parent3.type!='AwaitExpression'){
                    context.report({
                        node,
                        messageId: "AwaitRequired",
                        fix(fixer) {
                            return fixer.insertTextBefore(parent2, "await ");
                        }
                    })                
                }
            }
        }
    }
}

const awaitRule = {
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [],
        messages: {
            AwaitRequired: ErrorMessages.AwaitRequired, //'Change to "async function".',
        },
    },
    create(context){
        return {
            Identifier(node) {
                if( node.type != 'Identifier' ) {
                    return;
                }
                const isLooksBackdropMethods =  (
                    node.name == 'nextAndWait' ||
                    node.name == 'previousAndWait' ||
                    node.name == 'switchRandomAndWait' ||
                    node.name == 'switchAndWait'                    
                );
                if(isLooksBackdropMethods) {
                    awaitcheckerDouble(context, node, 'Looks', 'backdrop');
                    return;
                }
                const isControlMethods = (
                    node.name == 'wait' ||
                    node.name == 'waitUntil' ||
                    node.name == 'waitWhile' 
                );
                if(isControlMethods){
                    awaitcheckerSingle(context, node, 'Control');
                    return;
                }
                const isBroadcastMethods = (
                    node.name == 'sendAndWait'
                );
                if(isBroadcastMethods){
                    awaitcheckerSingle(context, node, 'Broadcast');
                    return;
                }
                const isLooksBubbleMethods = (
                    node.name == 'sayForSecs' ||
                    node.name == 'thinkForSecs'
                );
                if(isLooksBubbleMethods){
                    awaitcheckerDouble(context, node, 'Looks', 'bubble');
                    return;
                }
                const isMotionMoveMethods = (
                    node.name == 'glideTo' ||
                    node.name == 'glideToRandom' ||
                    node.name == 'glideToMouse'
                );
                if(isMotionMoveMethods){
                    awaitcheckerDouble(context, node, 'Motion', 'move');
                    return;
                }
                const isSensingAskMethods = (
                    node.name == 'askAndWait'
                );
                if(isSensingAskMethods){
                    awaitcheckerSingle(context, node, 'Sensing');
                    return;
                }
                const isSoundMethods = (
                    node.name == 'playUntilDone'
                );
                if(isSoundMethods){
                    awaitcheckerSingle(context, node, 'Sound');
                    return;
                }
                const isSpeechMethods = (
                    node.name == 'speech'
                );
                if(isSpeechMethods){
                    awaitcheckerSingle(context, node, 'Speech');
                    return;
                }

                return;

            }
        }
    },
}
export const awaitRulesPlugin = { 
    meta:{
        name: 'await-plugin',
        version: '0.1.0',
    },
    rules: { "await-plugin": awaitRule },
};
