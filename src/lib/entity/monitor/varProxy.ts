import type { Monitoring } from "../../../type/entity/monitor/monitoring";
/**
 * Var
 * 
 * const counter = Var.from({value: 5}); // 初期値 5 (数値型)を定義
 */
export class Var {


    static from(obj:Monitoring) : Monitoring {
        
        return new Proxy(obj, {

            get(target:Monitoring, prop: string) {
            
                
                return Reflect.get(target, prop);
            },

            set(target:Monitoring, prop: string, value: number | string | CallableFunction): boolean{
                if(prop != 'callback') {
                    if(target.callback){
                        target.callback();
                    }
                }
                return Reflect.set(target, prop, value);
            }

        });

    }
    
 
}