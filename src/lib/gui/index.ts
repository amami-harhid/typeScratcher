import { engine, Engine } from '../engine';
const { insertCss } = await import(/* webpackMode: "eager" */ './css');
import {ScratchElement} from './scratchElement';

/**
 * Scratch GUI
 * 
 * 初期化
 * 
 */
export const guiInitialize = () => {

    insertCss();
    const canvas = ScratchElement.getScratchCanvas();
    (engine as Engine).createRenderer(canvas);
    (engine as Engine).mouseEventStart();

}


