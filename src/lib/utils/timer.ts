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
    
    // TODO 後で消す
    static async wait2( sec: number ) {
//        const _INTERVAL = Math.floor(INTERVAL);
        const ms = sec*1000;
        // const wk = (Math.floor( ms / _INTERVAL ) -1);
        let timer01 = ThreadManager.timer;
        // const waitMs = ((wk < 0)? 0: wk) * _INTERVAL;
        // console.log('Timer.wait waitMs =',waitMs, ', wk=',wk, ',_INTERVAL=',_INTERVAL);
        console.log('timer01=',timer01);
        if(timer01 == 0) {
            await Timer._wait(ms);
        }else{
        return new Promise<void>(async (resolve)=>{
            for(;;){
                const now = ThreadManager.timer;
                if(timer01+ms < now){
                    break;
                }
                await Timer._wait(0);
            }
            resolve();
            // setTimeout(()=>{
            //     resolve();
            // }, ms);
        })

        }
    }
    static async _wait( ms: number ): Promise<void> {
        return new Promise<void>((resolve)=>{
            setTimeout(()=>{
                resolve();
            },ms);
        })
    }
} 