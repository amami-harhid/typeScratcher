import { Threads } from "./threads";
import { IEntityProxy } from "../../../type/entity/entity/IEntityProxy";

export class Rewriter {

    public static toGenerator<T>(proxy:IEntityProxy, func: CallableFunction, ...args:T[]) :AsyncGenerator<any, void, any>{
        //const af = Rewriter.changeGlideGenerator(func);
        const _func = func.bind(proxy);
        const _func2 = _func(...args);
        const _f = async function* <T>(...args:T[]){
            try{
                yield *_func2; // generator()
            }catch(e){
                if(e== Threads.THROW_STOP_THIS_SCRIPTS){
                    return;
                }                    
                throw e;
            }
        }
        const _generatorfunc = _f(...args);
        
        return _generatorfunc;
    }
    /**
     * 特定のメソッド呼び出しを yield* に変更する
     * 
     * `
     * await this.Motion.move.glideTo(10, 200, 200);
     * ↓
     * yield* this.Motion.move.scratch3GlideTo(10, 200, 200);
     * `
     * @param func 
     */
    private static changeGlideGenerator(func: CallableFunction) {
        const code = func.toString();
        //console.log(code);
        const theVars = Rewriter.getEventObjectVarName(code);
        //console.log(theVars);
        const Regex = /(await)\s+(.+\.Motion\.move\.)(glideTo)/;
        const code2 = code.replace(Regex,'yield* '+'$2'+'scratch3GlideTo');
        //console.log(code2);
        const AsyncGeneratorFunction = Object.getPrototypeOf(async function* method() {}).constructor;
        const code3 = Rewriter.removeOuter(code2);
        let af = (theVars.length>0)? new AsyncGeneratorFunction(theVars,code3):new AsyncGeneratorFunction(code3);
        console.log(af);
        return af;
    }

    private static getEventObjectVarName ( code: string ) {
        return code.substring(code.indexOf('(') + 1, code.indexOf(')'))
    }

    private static removeOuter( code: string ) {
        return code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
    }
}