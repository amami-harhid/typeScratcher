import type { IEntitySensingMouse } from './IEntitySensingMouse';
import type { IEntitySensingKey } from './IEntitySensingKey';
import type { IEntitySensingTimer } from './IEntitySensingTimer';
/**
 * Sensing
 * ---
 * 調べる
 */
export interface IEntitySensing {
    /**
     * Ask a question and wait for the answer.
     * 
     * ---
     * 質問をする( 答えを受け取るまで待つ )
     * 
     * @param question {string} - Question text
     * @returns {Promise<void>}
     */
    askAndWait(question:string): Promise<void>;
    /**
     * Answer of Ask a question
     * 
     * ---
     * 質問をした答え
     */
    readonly answer: string;

    /**
     * Sensing Mouse
     * 
     * ---
     * 『調べる』（マウス）
     */
    readonly mouse: IEntitySensingMouse;

    /**
     * Sensing Keyboard
     * 
     * ---
     * 『調べる』（キーボード）
     */
    readonly keyboard : IEntitySensingKey;
    /**
     * Sensing fTimer
     * ---
     * 『調べる』（タイマー）
     */
    readonly timer : IEntitySensingTimer;
};