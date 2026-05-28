/**
 * Render
 */
import { default as ScratchRender} from 'scratch-render';
import { StageLayering, LAYER_GROUPS } from '@Type/stage/CStageLayering';
import { IRenderWebGL } from '@Type/render/IRenderWebGL';
import * as Element from '../gui/element';

export class Renderer {
    private layerGroups: StageLayering[];
    private canvas! : HTMLCanvasElement;
    private _renderer!: IRenderWebGL;
    constructor() {
        this.layerGroups = LAYER_GROUPS();
    }
    /**
     * Rendererを作成する
     * @param w 
     * @param h 
     */
    createRenderer ( canvas: HTMLCanvasElement ) {
        this.canvas = canvas;//Element.getScratchCanvas();
        console.log(this.canvas);
        this._renderer = new ScratchRender(canvas);
        this._renderer.setLayerGroupOrdering(this.layerGroups);
        this._renderer.resize( 500, 500);
        //this.stageResize(w,h);    
    }
    createDrawable(layer: StageLayering) : number {
        if(this._renderer){
            const drawableID = this._renderer.createDrawable(layer);
            return drawableID;
        }
        throw `'createDrawable' failed, renderer is null `;
    }

    /**
     * Rendererを取得する
     */
    get renderer(): IRenderWebGL {
        if(this._renderer == undefined) throw 'Not found renderer error';
        return this._renderer;
    }
}