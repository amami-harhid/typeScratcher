const { S3CSS, insertCss } = await import(/* webpackMode: "eager" */ './css');
import {Element} from './element';
import { playground } from '../vm/playground';

/**
 * Scratch GUI
 * 
 * 初期化
 * 
 */
export const guiInitialize = () => {

    insertCss(S3CSS);
    const canvas = Element.getScratchCanvas();
    playground.createRenderer(canvas);
    playground.mouseEventStart();

}


