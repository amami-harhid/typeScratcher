import { ThreadManager } from "../engine/thread/threads";

export class Timer {

    static async wait( sec: number ): Promise<void> {
        const ms = sec*1000;
        return new Promise<void>(async (resolve)=>{
            setTimeout(()=>{
                resolve();
            }, ms);
        })
    }
} 