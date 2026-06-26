import type { MonitoringNumber, MonitoringString } from "../../../type/entity/monitor/monitoring";
/**
 * Var
 * 
 * const counter = Var.from({value: 5}); // 初期値 5 (数値型)を定義
 */
export class Var {


    static num(obj:MonitoringNumber) : MonitoringNumber {
        
        return new Proxy(obj, {

            get(target:MonitoringNumber, prop: string) {
            
                
                return Reflect.get(target, prop);
            },

            set(target:MonitoringNumber, prop: string, value: number | string | CallableFunction): boolean{
                if(prop != 'callback') {
                    if(target.callback){
                        target.callback();
                    }
                }
                return Reflect.set(target, prop, value);
            }

        });

    }

    static str(obj:MonitoringString) : MonitoringString {
        
        return new Proxy(obj, {

            get(target:MonitoringString, prop: string) {
            
                
                return Reflect.get(target, prop);
            },

            set(target:MonitoringString, prop: string, value: number | string | CallableFunction): boolean{
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