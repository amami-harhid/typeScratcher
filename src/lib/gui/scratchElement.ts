/**
 * Element
 */
import { engine, Engine } from "../engine";
import { GUI_CONST } from "./gui_const";

/** ロゴ */
const TypeScratcher = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NTguOTE5ODQiIGhlaWdodD0iNDAyLjQ0MzYzIiB2aWV3Qm94PSIwLDAsNDU4LjkxOTg0LDQwMi40NDM2MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMS41MTU2MSIgeTE9IjE4Mi43NzcwNiIgeDI9IjQ0MS4zMjkzNCIgeTI9IjE4Mi43NzcwNiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtNi44NTY3NSwtMzYuOTcxOTUpIHNjYWxlKDAuNTk1NDIsMC4xMzkxNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmYwMDAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjkwMGZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjExLjUxNTYxIiB5MT0iMTgyLjc3NzA2IiB4Mj0iNDQxLjMyOTM0IiB5Mj0iMTgyLjc3NzA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY5MDBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC42NzYwOCw0Ni45MTM4KSI+PGcgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXNpemU9IjQwIj48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS41MTU4MywyNjUuNjk4NjYpIHNjYWxlKDEuNjc5NDksNy4xODY0OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9InVybCgjY29sb3ItMSkiPjx0c3BhbiB4PSIwIiBkeT0iMCI+VHlwZVNjcmF0Y2hlcjwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIyOS4zMjM5MTcwMjg4MTQ1OjIyNi45MTM4MDQ5OTk5OTk5Ny0tPg==";
/** 緑の旗マーク */
const GreenFlagImage = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+";
/** 赤の停止マーク */
const StopMark = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRUM1OTU5O3N0cm9rZTojQjg0ODQ4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNC4zLDAuNSA5LjcsMC41IDEzLjUsNC4zIDEzLjUsOS43IDkuNywxMy41IDQuMywxMy41IDAuNSw5LjcgMC41LDQuMyAiLz4KPC9zdmc+Cg==";
/** 一時停止ボタン */
const PauseMark = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0iTTIzMS40MjkgMTg4LjkyOVYxNzEuMDdoNC4yODV2MTcuODU4em0xMi4xNDIgMFYxNzEuMDdoNC4yODZ2MTcuODU4eiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzMwOSAwIDAgLjk1NDI3IC0yMzguNTczIC0xNjIuNzY5KSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjZmZhZTAwIiBzdHJva2U9IiNkODk0MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjwvc3ZnPg==";
/** 一時停止解除ボタン */
const RestartMark = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0ibTI0Ni4wNTUgMTgwLTEyLjExIDEyLjExdi0yNC4yMnoiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM5NDkgMCAwIC42Nzk0MyAtMjY0LjU5NSAtMTEzLjI5OCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZDg5NDAwIiBmaWxsPSIjZmZhZTAwIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iLz48L3N2Zz4=";


export class ScratchElement {

	static RemakeCanvasWillReadFrequentlyTrue :HTMLCanvasElement = document.createElement('canvas');

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
			ScratchElement.getOverlay();
		}
		return main as HTMLDivElement;
    }
	static getOverlay(): HTMLDivElement {
		let overlay:HTMLDivElement = document.querySelector(`#${GUI_CONST.Overlay}`) as HTMLDivElement;
		if( overlay == undefined ) {
			overlay = document.createElement('div') as HTMLDivElement
			overlay.id = GUI_CONST.Overlay;
			overlay.classList.add(GUI_CONST.Overlay);
			const imgDiv = document.createElement('div');
			imgDiv.classList.add(GUI_CONST.Overlay_image);
			overlay.appendChild(imgDiv);
			const img = document.createElement('img');
			img.classList.add(GUI_CONST.Overlay_image_image);
			img.setAttribute('src', TypeScratcher);
			imgDiv.appendChild(img);
			const main = ScratchElement.getMain();
			main.appendChild(overlay);
		}
		return overlay;
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
		imgGreenFlag.setAttribute('src', GreenFlagImage);
		imgGreenFlag.setAttribute('title', "実行");
		imgGreenFlag.style.padding = "0.375rem";
		imgGreenFlag.classList.add("not-ready");
		menuControl.appendChild(imgGreenFlag);
        
		const pauseMark = document.createElement('img');
        pauseMark.id = GUI_CONST.ControlPauseMark;
        pauseMark.classList.add(GUI_CONST.ControlPauseMark);
        pauseMark.setAttribute("draggable","false");
		pauseMark.classList.add('is-not-active');
        ScratchElement.changeToPauseMark(pauseMark);
        menuControl.appendChild(pauseMark);

        const imgStopMark = document.createElement("img");
        imgStopMark.id = GUI_CONST.ControlStopMark;
        imgStopMark.classList.add(GUI_CONST.ControlStopMark);
        imgStopMark.setAttribute("src", StopMark);
        imgStopMark.setAttribute("draggable","false");
        imgStopMark.setAttribute("title", "止める");
		imgStopMark.classList.add('is-not-active');
        menuControl.appendChild(imgStopMark);

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
		const main = ScratchElement.getMain();
		ScratchElement.getHeader(main);
    	const stageCanvasWrapper = ScratchElement.getStageCanvasWrapper(main);

		const ScratchCanvasDivId = 'canvasDiv';
		const ScratchCanvasDivClassName = 'likeScratch-canvas';
		const scratchCanvasDiv = document.createElement('div');
		scratchCanvasDiv.id = ScratchCanvasDivId;
		scratchCanvasDiv.classList.add(ScratchCanvasDivClassName);
		stageCanvasWrapper.appendChild(scratchCanvasDiv);

		scratchCanvas = document.createElement('canvas') as HTMLCanvasElement;
		scratchCanvas.id = ScratchCanvasID;
		scratchCanvas.classList.add(GUI_CONST.canvas_class);
		scratchCanvasDiv.appendChild(scratchCanvas);
		return scratchCanvas as HTMLCanvasElement;
	}
	static getControlStopMark(): HTMLElement {
        let element = document.querySelector(`#${GUI_CONST.ControlStopMark}`) as HTMLElement;
        if(element){
            return element;
        }
        throw `NOT FOUND Element (id=${GUI_CONST.ControlStopMark})`;
    }
	static getControlPauseMark(): HTMLElement {
        let element = document.querySelector(`#${GUI_CONST.ControlPauseMark}`) as HTMLElement;
        if(element){
            return element;
        }
        throw `NOT FOUND Element (id=${GUI_CONST.ControlPauseMark})`;
    }
	static changeToPauseMark(pauseMark: HTMLElement): void{
        pauseMark.setAttribute("src", PauseMark);
        pauseMark.setAttribute("title", "一時停止");
    }
	static changeToPauseMarkActive(pauseMark: HTMLElement): void{
        pauseMark.setAttribute("src", PauseMark);
        pauseMark.setAttribute("title", "一時停止");
    }
    static changeToRestartMark(pauseMark: HTMLElement): void{
        pauseMark.setAttribute("src", RestartMark);
        pauseMark.setAttribute("title", "再開");
    }
	/**
	 * ページ座標をScratchベースのステージ座標へ変換する
	 * Scratchベースなので、表示率を掛けている。
	 * 
	 * @param pageX 
	 * @param pageY 
	 * @returns 
	 */
	static pageToScratchStagePosition(pageX: number, pageY: number): {scratchX: number, scratchY:number} {
		const position:{scratchX:number, scratchY:number} = {scratchX:0, scratchY:0};
		const canvas = ScratchElement.getScratchCanvas();
		const rect = canvas.getBoundingClientRect();
		const canvasCenter = {x: rect.left + rect.width/2, y: rect.top + rect.height/2};
		const positionBaseCanvasCenter = {x: pageX - canvasCenter.x,  y: canvasCenter.y - pageY};
		// Scratch3ステージ座標へ
		const _rate = (engine as Engine).renderRate;
		position.scratchX = positionBaseCanvasCenter.x * _rate.x;
		position.scratchY = positionBaseCanvasCenter.y * _rate.y;
		return position;
	}
	/**
	 * ウィンドウ(Body)左上基準の座標をStage(Canvas)左上基準へ変換する
	 * @param pageX 
	 * @param pageY 
	 * @returns 
	 */
	static offsetChangePageToStage(pageX: number, pageY: number): {x: number, y: number} {

		const canvas = ScratchElement.getScratchCanvas();
		const rect = canvas.getBoundingClientRect();
		const position = {
			x: pageX - rect.left,
			y: pageY - rect.top,
		}
		return position;
	}
}