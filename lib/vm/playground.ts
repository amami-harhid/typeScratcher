import { Renderer } from "../render/renderer";
import { threadManager } from "../controls/threads";
import { Runtime } from "./runtime";
import { Sprite } from "../entity/sprite";
import { Stage } from "../entity/stage";
import { Element } from "../gui/element";
import type { ISprite } from "../type/sprite";
import type { TMouse } from "../type/mouse";
import { IStage } from "../type/stage";

/**
 * PlayGround
 */
export class Playground {
    private _renderer!: Renderer;
    private _runtime: Runtime;
    private _sprites: ISprite[] = [];
    private _stage!: IStage;
    private _timer: number;
    private _mouse!: TMouse;
    constructor() {
        this._runtime = new Runtime();
        this._timer = performance.now();
    }

    get runtime() {
        return this._runtime;
    }
    /**
     * 実行開始からの経過時刻(ミリ秒)
     */
    get timer() {
        return performance.now() - this._timer;
    }
    /**
     * 経過時刻(ミリ秒)をリセットする
     */
    resetTimer() {
        this._timer = performance.now();
    }
    createRenderer(canvas: HTMLCanvasElement) {
        this._renderer = new Renderer( );
        this._renderer.createRenderer(canvas);
    }
    private initMouseInfo() {
        this._mouse = {scratchX:0, scratchY:0, x:0, y:0, down: false, pageX: 0, pageY: 0, clientX: 0, clientY: 0};
    }
    get mouse() {
        return this._mouse;
    }
    mouseEventStart() {
        this.initMouseInfo();
        const body = document.querySelector('#main') as HTMLElement;
        body?.addEventListener('mousedown', (e:MouseEvent)=>{
            me._mouse.pageX = e.pageX;
            me._mouse.pageY = e.pageY;
            me._mouse.down = true;
            e.stopPropagation()
        });
        body?.addEventListener('mousemove', (e:MouseEvent) => {
            me._mouse.pageX = e.pageX;
            me._mouse.pageY = e.pageY;
            e.stopPropagation()        
        });
        body?.addEventListener('mouseup', (e:MouseEvent)=>{
            me._mouse.pageX = e.pageX;
            me._mouse.pageY = e.pageY;
            me._mouse.down = false;
            e.stopPropagation()
        });
        const canvas = Element.getScratchCanvas();
        const me = this;
        canvas.addEventListener('mousemove', (e:MouseEvent)=>{
            me._mouse.x = e.offsetX;
            me._mouse.y = e.offsetY;

            me._mouse.clientX = e.clientX;
            me._mouse.clientY = e.clientY;
            
            me._mouse.scratchX = e.offsetX - canvas.width/2;
            me._mouse.scratchY = canvas.height/2 - e.offsetY;
        });
        canvas.addEventListener('mousedown', (e:MouseEvent) => {
            me._mouse.x = e.offsetX;
            me._mouse.y = e.offsetY;
            me._mouse.down = true;
            e.stopPropagation();
        });
        canvas.addEventListener('mouseup', (e:MouseEvent) => {
            me._mouse.x = e.offsetX;
            me._mouse.y = e.offsetY;
            me._mouse.down = false;
            e.stopPropagation();        
        });
    }
    get renderer(): Renderer {
        return this._renderer;
    }
    addSprite(sprite: ISprite) {
        this._sprites.push(sprite);
    }
    getSprites() {
        return this._sprites;
    }
    setStage(stage: Stage) {
        this._stage = stage;
    }
    getStage() {
        return this._stage;
    }
    async start(): Promise<void> {
        this._runtime.scratchEvent.stageFirstClick();
        for(const s of this._sprites){
            const _s = s as Sprite;
            await _s.init();
            _s.update();
        }
        const stage = this._stage as Stage;
        if(stage){
            stage.init();
        }
        threadManager.start();
    }
    get renderRate(): {x:number, y:number} {
        const canvas = Element.getScratchCanvas();
        const render = this.renderer;
        const rateX = render.stageWidth / canvas.width;
        const rateY = render.stageHeight / canvas.height;
        return { x: rateX, y: rateY };
    }
}

export const playground = new Playground();