/**
 * Timer (static)
 */
export interface STimer {
    wait( sec: number ): Promise<void>;
}
