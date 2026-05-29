/**
 * Element
 */
import { GUI_CONST } from "./gui_const";

const GreenFlagImage = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+";

export class Element {

	static getGreenFlag(): HTMLImageElement {
		const greenFlag = document.querySelector(`#${GUI_CONST.greenFlag_id}`);
		return greenFlag as HTMLImageElement;
	}

    static getMain(): HTMLDivElement {
        const MainID = GUI_CONST.main_id;
		let main = document.querySelector(`#${MainID}`);
		if(main == undefined) {
			main = document.createElement('div');
			const mainDiv = main as HTMLDivElement;
			mainDiv.id = MainID;
			mainDiv.style.zIndex = '999';
			mainDiv.style.position = 'absolute';
			mainDiv.style.touchAction = 'manipulation';
			document.body.appendChild(main);
		}
		return main as HTMLDivElement;
    }
	static getHeader(main: HTMLDivElement) : HTMLDivElement {
		const HeaderID = GUI_CONST.header_id;
		let header = document.querySelector(`#${HeaderID}`);
		if(header == undefined){
			header = document.createElement('div');
			header.id = HeaderID;
			header.classList.add(GUI_CONST.header_class);
			main.appendChild(header);
		}else{
			// 子要素を全削除しておく
			while (header.firstChild) {
				header.removeChild(header.firstChild);
			}
		}
		const headerMenu = document.createElement('div');
		headerMenu.classList.add(GUI_CONST.headerMenu_class);
		header.appendChild(headerMenu);

		const ControlsContainerClass = GUI_CONST.controlsContainer_class;
		const menuControl = document.createElement('div');
		menuControl.classList.add(ControlsContainerClass); 
		headerMenu.appendChild(menuControl);

		const imgGreenFlag = document.createElement("img");
		imgGreenFlag.id = GUI_CONST.greenFlag_id;
		imgGreenFlag.classList.add(GUI_CONST.greenFlag_class);
		imgGreenFlag.setAttribute("draggable","false");
		imgGreenFlag.setAttribute('src', GreenFlagImage)
		imgGreenFlag.setAttribute('title', "実行");
		imgGreenFlag.style.padding = "0.375rem"
		menuControl.appendChild(imgGreenFlag);

		return header as HTMLDivElement;
	}
	static getStageCanvasWrapper(main: HTMLDivElement): HTMLDivElement {
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
	static getScratchCanvas(): HTMLCanvasElement {
		const ScratchCanvasID = GUI_CONST.canvas_id;
		let scratchCanvas = document.querySelector( `#${ScratchCanvasID}` );
		if( scratchCanvas ) {
			return scratchCanvas as HTMLCanvasElement;
		}
		const main = Element.getMain();
		Element.getHeader(main);
    	const stageCanvasWrapper = Element.getStageCanvasWrapper(main);

		const ScratchCanvasDivId = 'canvasDiv';
		const ScratchCanvasDivClassName = 'likeScratch-canvas';
		const scratchCanvasDiv = document.createElement('div');
		scratchCanvasDiv.id = ScratchCanvasDivId;
		scratchCanvasDiv.classList.add(ScratchCanvasDivClassName);
		stageCanvasWrapper.appendChild(scratchCanvasDiv);

		scratchCanvas = document.createElement('canvas') as HTMLCanvasElement;
		scratchCanvas.id = ScratchCanvasID;
		scratchCanvas.classList.add(GUI_CONST.canvas_class);
		//scratchCanvas.
		scratchCanvasDiv.appendChild(scratchCanvas);
		return scratchCanvas as HTMLCanvasElement;
	}
}