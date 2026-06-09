import { QuestionBoxElement } from '../../gui/questionBoxElement';
import { StageSensingKey } from './stageSensingKey';
import { StageSensingMouse } from './stageSensingMouse';
import { StageSensingTimer } from './stageSensingTimer';
import type { IStageSensing } from '../../../type/entity/stage/IStageSensing';
import type { IEntitySensingMouse } from '../../../type/entity/entity/IEntitySensingMouse';
import type { IEntitySensingKey } from '../../../type/entity/entity/IEntitySensingKey';
import type { IEntitySensingTimer } from '../../../type/entity/entity/IEntitySensingTimer';
import type { IStage } from '../../../type/entity/stage';
/**
 * Stage Sensing(調べる)
 */
export class StageSensing implements IStageSensing {
    private entity: IStage;
    private _key: IEntitySensingKey;
    private _mouse: IEntitySensingMouse;
    private _timer: IEntitySensingTimer;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
        this._key = new StageSensingKey(entity);
        this._mouse = new StageSensingMouse(entity);
        this._timer = new StageSensingTimer(entity);
    }
    /**
     * 質問をする
     * @param question {string} - 質問テキスト
     * @returns {Promise<string>} - answer
     */
    async askAndWait(question:string): Promise<string>{
        const questionBox = new QuestionBoxElement();
        const me = this.entity;
        return new Promise<string>(async (resolve)=>{
            const answer = await questionBox.ask(me, question);
            resolve(answer);
        });
    }
    /**
     * Key 関連
     */
    get keyboard() : IEntitySensingKey {
        return this._key;
    }
    /**
     * マウス関連
     */
    get mouse(): IEntitySensingMouse {
        return this._mouse;
    }
    /**
     * タイマー関連
     */
    get timer(): IEntitySensingTimer {
        return this._timer;
    }
};