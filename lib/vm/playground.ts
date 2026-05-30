/**
 * PlayGround
 */
import { Renderer } from "../render/renderer";
import { threadManager } from "../controls/threads";
import { Entity } from "../entity/entity";
import { Runtime } from "./runtime";
import { Sprite } from "../entity/sprite";
import { Stage } from "../entity/stage";
export class Playground {
    private static _renderer: Renderer;
    private _runtime: Runtime;
    private static _sprites: Sprite[] = [];
    private static _stage: Stage;
    constructor() {
        this._runtime = new Runtime();
    }
    get runtime() {
        return this._runtime;
    }
    static createRenderer(canvas: HTMLCanvasElement) {
        Playground._renderer = new Renderer( );
        Playground._renderer.createRenderer(canvas);
    }
    static get renderer(): Renderer {
        return Playground._renderer;
    }
    static addSprite(sprite: Sprite) {
        Playground._sprites.push(sprite);
    }
    static getSprites() {
        return Playground._sprites;
    }
    static addStage(stage: Stage) {
        Playground._stage = stage;
    }
    static getStage() {
        return Playground._stage;
    }
    async start(): Promise<void> {
        this._runtime.scratchEvent.greenFlagClick();
        for(const s of Playground._sprites){
            await s.init();
            s.update();
        }        
        threadManager.start();

        // const greenFlag = Element.getGreenFlag();
        // const threadStart = (e:MouseEvent) => {
        //     e.stopPropagation();
        // }

        // greenFlag.removeEventListener('click', threadStart);
        // greenFlag.addEventListener('click', threadStart);
    }
}

export const playground = new Playground();