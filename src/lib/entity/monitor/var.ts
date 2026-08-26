import type { BaseProxy, NumberProxy, StringProxy, MonitoringNumber, MonitoringString, MonitoringVars } from "../../../type/entity/monitor/monitoring";
import { Variable } from "./variable";
/**
 * Var
 */
export class Var {

    static number(initValue:number) : NumberProxy {
        const obj : NumberProxy = {value: initValue, scale: {w:100, h:100}, show:()=>{}, hide:()=>{}};
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

    static string(initValue:string) : StringProxy {
        const obj : StringProxy = {text: initValue, scale: {w:100, h:100}, show:()=>{}, hide:()=>{} };
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
