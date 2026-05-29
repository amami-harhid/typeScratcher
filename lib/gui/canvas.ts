/**
 * Canvas
 */

import { GUI_CONST } from "./gui_const";

export const getMain2 = () : HTMLDivElement => {
    const MainID = GUI_CONST.main_id;
    let main = document.querySelector(`#${MainID}`);
    if(main == undefined) {
        main = document.createElement('div');
        main.id = MainID;
        document.body.appendChild(main);
    }
    return main as HTMLDivElement;
}

export const getStageCanvasWrapper2 = (main: HTMLDivElement): HTMLDivElement => {
    const StageCanvasWrapperID = GUI_CONST.stageCanvasWrapper;
    let stageCanvasWrapper = document.querySelector(`#${StageCanvasWrapperID}`);
    if(stageCanvasWrapper == undefined) {
        stageCanvasWrapper = document.createElement('div');
        stageCanvasWrapper.id = StageCanvasWrapperID;
        stageCanvasWrapper.classList.add(StageCanvasWrapperID);
        main.appendChild(stageCanvasWrapper);
    }
    return stageCanvasWrapper as HTMLDivElement;
}

export const getScratchCanvas2 = (): HTMLCanvasElement => {

    const main = getMain2();
    const stageCanvasWrapper = getStageCanvasWrapper2(main);

    const ScratchCanvasID = GUI_CONST.canvas_id;
    let scratchCanvas = document.querySelector( `#${ScratchCanvasID}` )
    if( scratchCanvas == undefined ) {
        scratchCanvas = document.createElement('canvas');
        scratchCanvas.id = ScratchCanvasID;
        scratchCanvas.classList.add(GUI_CONST.canvas_div_class);
        stageCanvasWrapper.appendChild(scratchCanvas);
    }
    return scratchCanvas as HTMLCanvasElement;
}