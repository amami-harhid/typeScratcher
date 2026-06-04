import { SpriteSensingTimer } from './spriteSensingTimer';
import { SpriteSensingMouse } from './spriteSensingMouse';
import { SpriteSensingKey } from './spriteSensingKey';
import { SpriteSensingEdge } from './spriteSensingEdge';
import { SpriteSensingColor } from './spriteSensingColor';
import { SpriteSensingSprite } from './spriteSensingSprite';
import { QuestionBoxElement } from '../../gui/questionBoxElement';
import type { ISprite } from '@Type/sprite';
import type { ISpriteSensing } from '@Type/sprite/ISpriteSensing';
import type { ISpriteDragMode } from '@Type/sprite/ISpriteDragMode';
import type { IEntitySensingTimer } from '@Type/entity/IEntitySensingTimer';
import type { ISpriteSensingMouse } from '@Type/sprite/ISpriteSensingMouse';
import type { IEntitySensingKey } from '@Type/entity/IEntitySensingKey';
import type { ISpriteSensingEdge } from '@Type/sprite/ISpriteSensingEdge';
import type { ISpriteSensingColor } from '@Type/sprite/ISpriteSensingColor';
import type { ISpriteSensingSprite } from '@Type/sprite/ISpriteSensingSprite';
/**
 * Sprite Sensing(調べる)
 */
export class SpriteSensing implements ISpriteSensing {
    protected entity: ISprite;
    private mouse: ISpriteSensingMouse;
    private timer: IEntitySensingTimer;
    private key: IEntitySensingKey;
    private edge: ISpriteSensingEdge;
    private color : ISpriteSensingColor;
    private sprite: ISpriteSensingSprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
        this.mouse = new SpriteSensingMouse(entity);
        this.timer = new SpriteSensingTimer(entity);
        this.key = new SpriteSensingKey(entity);
        this.edge = new SpriteSensingEdge(entity);
        this.color = new SpriteSensingColor(entity);
        this.sprite = new SpriteSensingSprite(entity);
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
    get Mouse() {
        return this.mouse;
    }
    /**
     * Key関連
     */
    get Key() : IEntitySensingKey {
        return this.key;
    }
    /**
     * タイマー関連
     */
    get Timer() : IEntitySensingTimer {
        return this.timer;
    }
    get Edge() : ISpriteSensingEdge {
        return this.edge;
    }
    get Color(): ISpriteSensingColor {
        return this.color;
    }
    get Sprite(): ISpriteSensingSprite {
        return this.sprite;
    }
    /**
     * Drag Mode
     */
    get DragMode() :ISpriteDragMode{
        return this.entity.DragMode;
    }
};