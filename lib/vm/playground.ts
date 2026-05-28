/**
 * PlayGround
 */
import { Renderer } from "../render/renderer";
import { Element } from "../gui/element";
import { threadManager } from "../controls/threads";
import { Entity } from "../entity/entity";
import { Runtime } from "./runtime";
import { Sprite } from "lib/entity/sprite";
export class Playground {
    private static _renderer: Renderer;
    private _runtime: Runtime;
    private static _sprites: Sprite[] = [];
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
    static addThread(f: CallableFunction, entity: Entity) {
        threadManager.add(f, entity);
    }
    static addSprite(sprite: Sprite) {
        Playground._sprites.push(sprite);
    }
    static async start(): Promise<void> {
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