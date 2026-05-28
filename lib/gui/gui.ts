/**
 * Scratch GUI
 * 
 * 初期化
 * 
 */
const { S3CSS, insertCss } = await import(/* webpackMode: "eager" */ './css');
import {Element} from './element';
import { Playground } from '../vm/playground';

export const guiInitialize = () => {

    insertCss(S3CSS);
    const canvas = Element.getScratchCanvas();
    Playground.createRenderer(canvas);

}


