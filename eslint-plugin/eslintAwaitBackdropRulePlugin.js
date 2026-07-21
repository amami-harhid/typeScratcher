'use strict'
const awaitBackdropRule = {
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [],
        messages: {
            AwaitNeededId: 'await をつけてください',
        },
    },
    create(context){
        return {
            Identifier(node) {
                if(node.type == 'Identifier' &&
                  (
                      node.name == 'nextAndWait' ||
                      node.name == 'previousAndWait' ||
                      node.name == 'switchRandomAndWait' ||
                      node.name == 'switchAndWait'
                  )
                ) {
                    const parent = node.parent;
                    if(parent.type == 'MemberExpression') {
                        if(parent.object && parent.object.property 
                            && parent.object.property.name == 'backdrop' &&
                            parent.object.object && parent.object.object.property && 
                            parent.object.object.property.name == 'Looks'){
                            const parent2 = parent.parent;
                            if(parent2.type == 'CallExpression') {
                                const parent3 = parent2.parent;
                                if(parent3.type!='AwaitExpression'){
                                    context.report({
                                        node,
                                        messageId: "AwaitNeededId",
                                        fix(fixer) {
                                            return fixer.insertTextBefore(parent2, "await ");
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
export const awaitBackdropRulesPlugin = { 
    meta:{
        name: 'await-backdrop-plugin',
        version: '0.1.0',
    },
    rules: { "await-backdrop-plugin": awaitBackdropRule },
};
