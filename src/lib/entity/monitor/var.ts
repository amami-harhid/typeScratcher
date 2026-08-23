import type { BaseProxy, NumberProxy, StringProxy, MonitoringNumber, MonitoringString, MonitoringVars } from "../../../type/entity/monitor/monitoring";
import { Variable } from "./variable";
/**
 * Var
 */
export class Var {

    static number(label:string, initValue:number=0) : NumberProxy {
        const obj : NumberProxy = {label: label, value: initValue, scale: {w:100, h:100}, show:()=>{}, hide:()=>{}};
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

    static string(label:string, initValue:string='') : StringProxy {
        const obj : StringProxy = {label: label, text: initValue, scale: {w:100, h:100}, show:()=>{}, hide:()=>{} };
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
    static addVar(proxy: NumberProxy|StringProxy) : void {
    
        const monitorsVar: MonitoringVars = {};
        const label = proxy.label;
        monitorsVar[`${label}`] = proxy;
        Variable.monitoring( monitorsVar );
    
    }
}
