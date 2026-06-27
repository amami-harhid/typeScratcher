import { Var } from "./var";
import type { MonitoringVars, NumberProxy, StringProxy } from "../../../type/entity/monitor/monitoring";
import { Monitors } from "./monitors";

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
    static monitoring( variable: MonitoringVars): void {
        // ここで monitorId を決定する。
        // この時点で show(), hide() が機能する
        Monitors.addVar( variable );
    }
    static reposition() : void {
        Monitors.allReposition();
    }
}