import { Threads } from "./threads";
import { IEntityProxy } from "../../../type/entity/entity/IEntityProxy";

export class Rewriter {

    public static toGenerator<T>(proxy:IEntityProxy, func: CallableFunction, ...args:T[]) :AsyncGenerator<any, void, any>{
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
}