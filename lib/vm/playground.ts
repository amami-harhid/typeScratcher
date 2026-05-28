/**
 * PlayGround
 */
import { Renderer } from "../render/renderer";
import { Element } from "../gui/element";
import { threadManager } from "../controls/threads";
import { Entity } from "../entity/entity";
export class Playground {
    private static _renderer: Renderer;
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

    static start(): void {
        
        threadManager.start();

        // const greenFlag = Element.getGreenFlag();
        // const threadStart = (e:MouseEvent) => {
        //     e.stopPropagation();
        // }

        // greenFlag.removeEventListener('click', threadStart);
        // greenFlag.addEventListener('click', threadStart);
    }
}