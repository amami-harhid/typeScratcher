import { Var } from "./var";
import type { MonitoringVars, NumberProxy, StringProxy } from "../../../type/entity/monitor/monitoring";
import { Monitors } from "./monitors";

interface NumberProxyExt extends NumberProxy {
    isNumber: boolean;
}
interface StringProxyExt extends StringProxy {
    isNumber: boolean;
}

export class Variable {

    static number( value: number) : NumberProxy {
        // この時点では show(), hide() は機能しない
        const _proxy = Var.number( value );
        return _proxy;
    }
    static string( text: string) : StringProxy {
        // この時点では show(), hide() は機能しない
        const _proxy = Var.string( text );
        return _proxy;
    }
    static monitoring( variable: MonitoringVars | NumberProxy | StringProxy): void {
        if( Variable.isPlainObject(variable) ) {
            const _variable = variable as unknown as MonitoringVars;
            Monitors.addVar( _variable );
            return;

        }else{
            // オブジェクトリテラル形式（MonitoringVars）でない場合は、何もしない。
        }
    }
    static reposition() : void {
        Monitors.allReposition();
    }

    static isPlainObject( obj: any ) : boolean {
        if( obj === null || typeof obj !== 'object') {
            return false;
        }
        const proto = Object.getPrototypeOf( obj );

        return proto === Object.prototype || proto === null;
    }
}