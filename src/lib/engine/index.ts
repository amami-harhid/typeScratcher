import { Render } from "../render";
import { threadManager } from "./thread/threads";
import { Runtime } from "./runtime";
import { Sprite } from "../entity/sprite";
import { Stage } from "../entity/stage";
import { ScratchElement } from "../gui/scratchElement";
import type { TMouse } from "../../type/mouse";
import type { IEngine } from "../../type/engine";

/**
 * PlayGround
 */
export class Engine implements IEngine {
    private _render!: Render;
    private _runtime: Runtime;
    private _sprites: Sprite[] = [];
    private _stage!: Stage;
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
        this._render = new Render( );
        this._render.createRenderer(canvas);
    }
    private initMouseInfo() {
        this._mouse = {scratchX:0, scratchY:0, x:0, y:0, down: false, pageX: 0, pageY: 0, clientX: 0, clientY: 0};
    }
    get mouse() {
        return this._mouse;
    }
    mouseEventStart() {
        const _rate = this.renderRate;
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
        const canvas = ScratchElement.getScratchCanvas();
        const me = this;
        canvas.addEventListener('mousemove', (e:MouseEvent)=>{
            me._mouse.x = e.offsetX;
            me._mouse.y = e.offsetY;

            me._mouse.clientX = e.clientX;
            me._mouse.clientY = e.clientY;
            
            me._mouse.scratchX = (e.offsetX - canvas.width/2)*_rate.x;
            me._mouse.scratchY = (canvas.height/2 - e.offsetY)*_rate.y;
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
    get render(): Render {
        return this._render;
    }
    addSprite(sprite: Sprite) {
        this._sprites.push(sprite);
    }
    getSprites() : Sprite[]{
        return this._sprites;
    }
    removeSprites( target: Sprite ) {
        const _sprites = this._sprites.filter( element => element.id != target.id );
        this._sprites.splice(0, this._sprites.length);
        this._sprites.push(..._sprites);
    }
    setStage(stage: Stage) {
        this._stage = stage;
    }
    getStage() {
        return this._stage;
    }
    /**
     * 開始処理 
     */
    async start(): Promise<void> {
        this._runtime.scratchEvent.stageFirstClick();
        for(const s of this._sprites){
            const _s = s as Sprite;
            // ここでロード処理が走る
            // （マウスクリックアクションでAudioPlayerを生成)
            await _s.init();
            _s.update();
        }
        const stage = this._stage as Stage;
        if(stage){
            // ここでロード処理が走る
            // （マウスクリックアクションでAudioPlayerを生成)
            await stage.init();
            stage.update();
        }
        threadManager.start();
    }
    get renderRate(): {x:number, y:number} {
        const canvas = ScratchElement.getScratchCanvas();
        const render = this.render;
        const rateX = render.stageWidth / canvas.width;
        const rateY = render.stageHeight / canvas.height;
        return { x: rateX, y: rateY };
    }
}

export const engine:IEngine = new Engine();