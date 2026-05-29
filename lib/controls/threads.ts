/**
 * Threads
 */

import { Playground } from "../vm/playground";
import { Entity } from "../entity/entity";
import { TThreadObj } from "./TThreadObj";

export class Threads {
    static get THROW_STOP_THIS_SCRIPTS(){
        return "throwStopThisScripts";
    } 
    static get THROW_FORCE_STOP_THIS_SCRIPTS(){
        return "throwForceStopThisScripts";
    }  
    static get RUNNING(){
        return 'running';
    }
    static get YIELD(){
        return 'yield';
    }
    static get STOP(){
        return 'stop';
    }
    private _running: boolean = false;
    private _startSwitch: boolean = false;
    private _intervalId!: NodeJS.Timeout;
    private threadArr: TThreadObj[] = [];

}
export const thread = new Threads();

class ThreadBank {
    static threadArr: Thread[] = [];
    static add(thread: Thread) {
        ThreadBank.threadArr.push(thread);
    }
}

export class Thread {
    private g: AsyncGenerator<any, void, any>;
    private done: boolean = false;
    public entity: Entity;
    constructor(f: CallableFunction, entity: Entity) {
        this.g = f();
        this.entity = entity;
    }
    async next() {
        if(this.done === false) {
            const rslt = await this.g.next();
            this.entity.update();
            if( rslt.done === true) {
                this.done = true;
                return true;
            }
            return false;
        }else{
            return true;
        }
    }

}
const INTERVAL = 1000/30;
export class ThreadManager {
    private intervalId: NodeJS.Timeout|undefined;
    add(f: CallableFunction, me: Entity) {
        const _f = f.bind(me);
        const thread = new Thread(_f, me);
        ThreadBank.add(thread);
    }
    start() {
        if( this.intervalId != undefined) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(this.interval, INTERVAL, this);
    }
    async interval(me: ThreadManager):Promise<void> {
        //const arr:Thread[] = [];
        for(const thread of ThreadBank.threadArr){
            thread.next();
            thread.entity
        }
        //console.log('counter=', counter++);
        Playground.renderer.renderer.draw();
    }
}
let counter = 0;
export const threadManager = new ThreadManager();