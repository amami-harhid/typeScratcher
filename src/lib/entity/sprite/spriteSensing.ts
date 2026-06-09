import { SpriteSensingTimer } from './spriteSensingTimer';
import { SpriteSensingMouse } from './spriteSensingMouse';
import { SpriteSensingKey } from './spriteSensingKey';
import { SpriteSensingEdge } from './spriteSensingEdge';
import { SpriteSensingColor } from './spriteSensingColor';
import { SpriteSensingSprite } from './spriteSensingSprite';
import { QuestionBoxElement } from '../../gui/questionBoxElement';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteSensing } from '../../../type/entity/sprite/ISpriteSensing';
import type { ISpriteDragMode } from '../../../type/entity/sprite/ISpriteDragMode';
import type { IEntitySensingTimer } from '../../../type/entity/entity/IEntitySensingTimer';
import type { ISpriteSensingMouse } from '../../../type/entity/sprite/ISpriteSensingMouse';
import type { IEntitySensingKey } from '../../../type/entity/entity/IEntitySensingKey';
import type { ISpriteSensingEdge } from '../../../type/entity/sprite/ISpriteSensingEdge';
import type { ISpriteSensingColor } from '../../../type/entity/sprite/ISpriteSensingColor';
import type { ISpriteSensingSprite } from '../../../type/entity/sprite/ISpriteSensingSprite';
/**
 * Sprite Sensing(調べる)
 */
export class SpriteSensing implements ISpriteSensing {
    protected entity: ISprite;
    private _mouse: ISpriteSensingMouse;
    private _timer: IEntitySensingTimer;
    private _key: IEntitySensingKey;
    private _edge: ISpriteSensingEdge;
    private _color : ISpriteSensingColor;
    private _sprite: ISpriteSensingSprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this._mouse = new SpriteSensingMouse(entity);
        this._timer = new SpriteSensingTimer(entity);
        this._key = new SpriteSensingKey(entity);
        this._edge = new SpriteSensingEdge(entity);
        this._color = new SpriteSensingColor(entity);
        this._sprite = new SpriteSensingSprite(entity);
    }
    /**
     * 質問をして答えを待つ
     * @param question {string} - 質問テキスト
     * @returns {Promise<string>} - answer
     */
    async askAndWait(question:string): Promise<string>{
        const questionBox = new QuestionBoxElement();
        const me = this.entity;
        return new Promise<string>( async (resolve)=>{
            const answer = await questionBox.ask(me, question);
            resolve(answer);
        });
    }
    /**
     * マウス情報
     */
    get mouse() {
        return this._mouse;
    }
    /**
     * Key関連
     */
    get keyboard() : IEntitySensingKey {
        return this._key;
    }
    /**
     * タイマー関連
     */
    get timer() : IEntitySensingTimer {
        return this._timer;
    }
    get edge() : ISpriteSensingEdge {
        return this._edge;
    }
    get color(): ISpriteSensingColor {
        return this._color;
    }
    get sprite(): ISpriteSensingSprite {
        return this._sprite;
    }
    /**
     * Drag Mode
     */
    get dragMode() :ISpriteDragMode{
        return this.entity.DragMode;
    }
};