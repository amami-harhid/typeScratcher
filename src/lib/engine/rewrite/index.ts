//import js_beautify from 'js-beautify';
//import { BabelParse } from './babelParse';

const Constant = {
    RegexLoopDef : /((while|for)\s\([^\)]*?\)\s)({)/g ,
    LoopProtectionIsDone : /_waitRapperRewrited/,
    LoopProtectionStopper : `if(_stopper_===true){break;}\n` ,
    LoopProtectionCode : `await P.Utils._waitRapperRewrited(P.Env.pace); \n` ,
    JsBeautifyOptions : {
        indent_size: 2,
        space_in_empty_paren: false,
        space_in_paren: false,            
    }
} as const;
/**
 * 繰り返しコードを修正（途中放棄）
 */
export class RewriteRepeatCode {

    private static instance: RewriteRepeatCode;
    public static getInstance(): RewriteRepeatCode {
        if(RewriteRepeatCode.instance == undefined){
            RewriteRepeatCode.instance = new RewriteRepeatCode();
        }
        return RewriteRepeatCode.instance;
    }

    public static fixCode(func: CallableFunction) : string {
        const me: RewriteRepeatCode = RewriteRepeatCode.getInstance();
        return me._fixCode(func);
    }
    private _fixCode(func: CallableFunction): string {
        return '';
    }
    private _getEventObjectVarName ( funcS: string ) : string {
        return funcS.substring(funcS.indexOf('(') + 1, funcS.indexOf(')'))
    }
    private _removeComments ( funcS: string ): string {
        return funcS.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
    }
    private _removeOuter( funcS: string ) {
        return funcS.substring(funcS.indexOf('{') + 1, funcS.lastIndexOf('}'));
    }
}