import { SVar } from "src/type/entity/monitor/SVar";
import type { NumberProxy, StringProxy, MonitoringNumber, MonitoringString, BaseNumberProxy, BaseStringProxy } from "../../../type/entity/monitor/monitoring";
import { Monitors } from "./monitors";
/**
 * Var
 * 
 * const counter = Var.from({value: 5}); // 初期値 5 (数値型)を定義
 */
export class Var {

    static number(value:number) : NumberProxy {
        const obj : NumberProxy = {value: value, scale: {w:100, h:100}, show:()=>{}, hide:()=>{}};
        const _var = new Proxy(obj, {

            get(target:NumberProxy, prop: string) {
            
                
                return Reflect.get(target, prop);
            },

            set(target:NumberProxy, prop: string, value: number | string | CallableFunction): boolean{
                const rtn = Reflect.set(target, prop, value);
                const _target = target as MonitoringNumber;
                if(prop != 'callback') {
                    if(_target.callback){
                        _target.callback();
                    }
                }
                return rtn;
            }

        });
        return _var;

    }

    static string(text:string) : StringProxy {
        const obj : StringProxy = {text: text, scale: {w:100, h:100}, show:()=>{}, hide:()=>{}};
        const _var = new Proxy(obj, {

            get(target:StringProxy, prop: string) {
                return Reflect.get(target, prop);
            },

            set(target:StringProxy, prop: string, value: number | string | CallableFunction): boolean{
                
                const rtn = Reflect.set(target, prop, value);
                const _target = target as MonitoringString
                if(prop != 'callback') {
                    if(_target.callback){
                        _target.callback();
                    }
                }
                return rtn;
            }

        });

        return _var;
    }
    
 
}