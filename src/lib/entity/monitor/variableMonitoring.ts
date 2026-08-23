import { Monitors } from "./monitors";
import { Utils } from "../../utils/utils";
import type { IVariableMonitoring, VariableMonitorParam } from "../../../type/entity/monitor/variableMonitoring";
import type { BaseProxy, MonitoringVars } from "../../../type/entity/monitor/monitoring";

export class VariableMonitoring implements IVariableMonitoring {

    private _proxy : BaseProxy;
    
    constructor(obj: VariableMonitorParam) {
        const info = Utils.varNameValues(obj);
        const name = info[0];
        const proxy = info[1];
        this._proxy = proxy as BaseProxy;
        const monitorsVar: MonitoringVars = {};
        monitorsVar[`${name}`] = proxy;
        Monitors.addVar( monitorsVar );
    }

    show(): void {
        this._proxy.show();
    }

    hide(): void {
        this._proxy.hide();
    }
}