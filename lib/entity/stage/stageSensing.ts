import { QuestionBoxElement } from '../../gui/questionBoxElement';
import { StageSensingKey } from './stageSensingKey';
import { StageSensingMouse } from './stageSensingMouse';
import { StageSensingTimer } from './stageSensingTimer';
import type { IStageSensing } from '@Type/stage/IStageSensing';
import type { IEntitySensingMouse } from '@Type/entity/IEntitySensingMouse';
import type { IEntitySensingKey } from '@Type/entity/IEntitySensingKey';
import type { IEntitySensingTimer } from '@Type/entity/IEntitySensingTimer';
import type { IStage } from '@Type/stage';
/**
 * Stage Sensing(調べる)
 */
export class StageSensing implements IStageSensing {
    private entity: IStage;
    private key: IEntitySensingKey;
    private mouse: IEntitySensingMouse;
    private timer: IEntitySensingTimer;
    /**
     * @internal
     * @param entity {IStage}
     */
    constructor(entity:IStage){
        this.entity = entity;
        this.key = new StageSensingKey(entity);
        this.mouse = new StageSensingMouse(entity);
        this.timer = new StageSensingTimer(entity);
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
    get Key() : IEntitySensingKey {
        return this.key;
    }
    /**
     * マウス関連
     */
    get Mouse(): IEntitySensingMouse {
        return this.mouse;
    }
    /**
     * タイマー関連
     */
    get Timer(): IEntitySensingTimer {
        return this.timer;
    }
};