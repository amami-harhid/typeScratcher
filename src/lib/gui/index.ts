const { S3CSS, insertCss } = await import(/* webpackMode: "eager" */ './css');
import {ScratchElement} from './scratchElement';
import { playground } from '../engine/playground';

/**
 * Scratch GUI
 * 
 * 初期化
 * 
 */
export const guiInitialize = () => {

    insertCss(S3CSS);
    const canvas = ScratchElement.getScratchCanvas();
    playground.createRenderer(canvas);
    playground.mouseEventStart();

}


