/**
 * Render
 */
import { default as ScratchRender} from 'scratch-render';
import { type TStageLayering, type StageLayeringValue, LAYER_GROUPS } from '../type/stage/CStageLayering';
import { IRenderWebGL } from '../type/render/IRenderWebGL';
import { GUI_CONST } from '../gui/gui_const';

export class Renderer {
    /**
     * ステージ縦横比(縦÷高さの率)
     */
    static get WHRate(): number {
        return 0.75;
    }
    /**
     * ステージの横ピクセル数(CSSピクセル)
     */
    static get W(): number {
        const WHRate = Renderer.WHRate; // 縦横比率 = 3 :  4
        // 上部にコントロールバースペースを確保するため少しだけ縮小する
        // 縮小率は試行錯誤して決めた。
        const InnerWidthRate = 0.95; // やや小さめに
        const InnerHeightRate = 0.95; // やや小さめに
        // devicePixelRatio:CSSピクセルが何個の物理ピクセルで表示されるのかという値
        const wrapper = document.querySelector(`#${GUI_CONST.stageCanvasWrapper}`) as HTMLElement;
        const wrapperRect = wrapper.getBoundingClientRect();
        const _devicePixelRatio = window.devicePixelRatio;
        // ブラウザビューポートの幅
        const _innerWidth = wrapperRect.width; //window.innerWidth;
        // ブラウザビューポートの高さ
        const _innerHeight = wrapperRect.height; //window.innerHeight;
        let w = (_innerWidth / _devicePixelRatio) * InnerWidthRate;
        let h = w * WHRate;
        const hLimit = (_innerHeight / _devicePixelRatio) * InnerHeightRate;
        if( h > hLimit ) {
            h = hLimit;
            w = h / WHRate;
        }
        return w;
    }
    /**
     * ステージの縦ピクセル数(CSSピクセル)
     */
    static get H() {
        return Renderer.W * Renderer.WHRate;
    }    
    private layerGroups: StageLayeringValue[];
    private canvas! : HTMLCanvasElement;
    private _renderer!: IRenderWebGL;
    public stageWidth: number =0;
    public stageHeight: number =0;
    constructor() {
        this.layerGroups = LAYER_GROUPS();
    }
    /**
     * ステージをリサイズする
     * @param w {number} - 横
     * @param h {number} - 縦
     */
    stageResize(w: number = Renderer.W , h: number = Renderer.H): void {
        if(this._renderer){
            this._renderer.resize( w, h ); // stage(canvas)のサイズ property(width,height)の値をリサイズ
            const _nativeSize = this._renderer.getNativeSize ();
            this.stageWidth = _nativeSize[0];
            this.stageHeight = _nativeSize[1];
        }
    }
    /**
     * Rendererを作成する
     * @param canvas: HTMLCanvasElement
     */
    createRenderer ( canvas: HTMLCanvasElement ) {
        this.canvas = canvas;
        this._renderer = new ScratchRender(canvas);
        this._renderer.setLayerGroupOrdering(this.layerGroups);
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        this._renderer.resize( w, h);
        // 自動リサイズ処理
        this.stageResize();
        const me = this;
        window.addEventListener('resize', ()=>{
            me.stageResize();
        });
    }
    createDrawable(layer: StageLayeringValue) : number {
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