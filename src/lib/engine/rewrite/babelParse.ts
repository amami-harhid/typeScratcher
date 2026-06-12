import * as babelParser from '@babel/parser';
import { Block, BlockStatement, callExpression, Expression, expressionStatement, ExpressionStatement, File, FunctionExpression, identifier, memberExpression, Node, Program, Statement, VariableDeclaration, VariableDeclarator, yieldExpression } from '@babel/types';

/**
 * 途中放棄中
 */
export class BabelParse {
    private static instance : BabelParse;
    public static getInstance(): BabelParse {
        if(BabelParse.instance == undefined){
            BabelParse.instance = new BabelParse();
        }
        return BabelParse.instance;
    }
    private parseFunctionExpression(init:FunctionExpression ) {
        if( init.body ) {
            const blockstatement = init.body;
            if(blockstatement.body){
                const blockStatements = blockstatement.body;
                for(const statement of blockStatements){
                    if( statement.type ){
                        // for文を見つけたとき
                        if( statement.type == 'ForStatement' && statement.body ) {
                            const statementBody = statement.body;
                            if(statementBody && statementBody.type && statementBody.type == 'BlockStatement' && statementBody.body) {
                                // for文の中の行
                                const blockStatements = statementBody.body;
                                if(blockStatements && Array.isArray(blockStatements) && blockStatements.length > 0 ){
                                    const last_statement = blockStatements[blockStatements.length-1];
                                    const expression = last_statement as ExpressionStatement;
                                    if(expression.expression.type != 'YieldExpression'){
                                        const yieldStatement = expressionStatement(
                                            yieldExpression()
                                        )
                                        blockStatements.push(yieldStatement);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    parse( code: string ) : babelParser.ParseResult<File>{
        console.log('BabelParse.parse code=', code);
        const _code = `const x = ${code}`;
        //const ast = babelParser.parse( code, {
        //    sourceType: 'module',
        //    plugins: ['jsx', 'typescript']
        //});
        const ast = babelParser.parse( _code );
        const program_bodies = ast.program.body as Statement[];
        const program_body = program_bodies[0];
        if(program_body.type == undefined || program_body.type != 'VariableDeclaration'){
            throw new Error('ERROR');
        }
        console.log(program_body);
        if(program_body.declarations && Array.isArray(program_body.declarations) && program_body.declarations.length>0){
            // declaration は、 const x = function～ ;　の部分を指す
            const declaration = program_body.declarations[0];
            if(declaration.type && declaration.type == 'VariableDeclarator' && declaration.init) {
                const init = declaration.init;
                if(init.type && init.type == 'FunctionExpression' && init.body){
                    const blockstatement = init.body;
                    if(blockstatement.body){
                        // function()の中の行配列
                        const statements = blockstatement.body;
                    }
                }
            }
        }
        if(program_body.type == 'VariableDeclaration'){
            if(program_body.declarations){
                const declarations = program_body.declarations;
                const decalaration = declarations[0];
                if(decalaration && decalaration.type) {
                    console.log("[1]",decalaration.type)
                    if(decalaration.type == 'VariableDeclarator' && decalaration.init) {
                        const init = decalaration.init;
                        if(init && init.type && init.type == 'FunctionExpression' && init.body) {
                            const body = init.body;
                            if(body && body.body){
                                const blockStatements = body.body;
                                console.log("[2]", blockStatements);
                                for( const statement of blockStatements){
                                    if(statement.type) {
                                        console.log("[3]", statement.type);
                                        if(statement.type == 'ForStatement') {
                                            console.log("[4]",statement.body);
                                            if(statement.body.type && statement.body.type == 'BlockStatement') {
                                                const blockStatements = statement.body as BlockStatement;
                                                if(blockStatements.body) {
                                                    const blockStatementBodies = blockStatements.body;
                                                    if(blockStatementBodies.length>0) {
                                                        const last_statement = blockStatementBodies[blockStatementBodies.length-1];
                                                        const expression = last_statement as ExpressionStatement;
                                                        if(expression.expression.type == 'YieldExpression'){
                                                            console.log('OK')
                                                        }else{
                                                            console.log('NG')

                                                        }
                                                    }

                                                }

                                            }

                                        }
                                    }
                                }
                            }

                        }

                    }
                }

            }
        }
        return ast;
    }

}