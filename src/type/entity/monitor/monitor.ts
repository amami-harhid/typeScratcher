import type { TPosition, TScale } from "../../common/typeCommon";

/**
 * Monitor
 */
export interface IMonitor {
    /** Variable Monitor Id */
    get monitorId(): string;
    /** Position */
    get position(): TPosition;
    /** Position */
    set position(_position: TPosition)
    /** Scale */
    get scale(): TScale;
    /** Scale */
    set scale(_scale:TScale)
    /** show */
    show (): void;
    /** hide */
    hide (): void;
}
