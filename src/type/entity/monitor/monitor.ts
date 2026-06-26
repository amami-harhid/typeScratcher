import type { TPosition, TScale } from "../../common/typeCommon";

/**
 * Monitor
 */
export interface IMonitor {
    get monitorId(): string;
    get position(): TPosition;
    set position(_position: TPosition)
    get scale(): TScale;
    set scale(_scale:TScale)
    /** 表示する */
    show (): void;
    /** 隠す */
    hide (): void;
}
