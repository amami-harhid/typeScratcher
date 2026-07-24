'use strict'
import { ErrorMessages } from "./messages.js";

const awaitSpeechRule = {
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [],
        messages: {
            AwaitRequired: ErrorMessages.AwaitRequired, // '`await` is required.',
        },
    },
    create(context){
        return {
            Identifier(node) {
                if(node.type == 'Identifier' &&
                    (
                        node.name == 'speech'
                    )
                ) {
                    if(node.parent.type == 'MemberExpression') {  
                        const parent = node.parent;
                        if(parent.object && parent.object.property 
                            && parent.object.property.name == 'Speech') {
                            // (xxx.Extensions.speechAndWait) --> parent_parent 
                            const parent_parent = node.parent.parent;
                            if(parent_parent.type == 'CallExpression'){
                                // (await xxx.Extensions.speechAndWait) --> parent_parent_parent 
                                const parent_parent_parent = parent_parent.parent;
                                if(parent_parent_parent.type!='AwaitExpression'){
                                    // AwaitExpression でない場合( await がついていない場合)
                                    context.report({
                                        node,
                                        messageId: "AwaitRequired",
                                        fix(fixer) {
                                            return fixer.insertTextBefore(parent_parent, "await ");
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    },
}
export const awaitSpeechRulesPlugin = { 
    meta:{
        name: 'await-extensions-plugin',
        version: '0.1.0',
    },
    rules: { "await-speech-plugin": awaitSpeechRule },
};
