import * as ArrorType from './padPatterns';
import { Engine, engine } from '../../engine';
import { InputMedia } from '../../utils/inputMedia';
import { KEYBOARD_KEYS } from '../../../type/engine/keyboad';

const StageCanvasWrapper = 'stageCanvasWrapper';

export const VirtualPad = class {

    /**
     * 矢印タイプのバーチャルパッド
     */
    static addArrorTypePad() : void {
        if(InputMedia.isCoarse == false ){
            return;
        }
        const htmlString = ArrorType.PAD_HTML;
        const cssString = ArrorType.PAD_CSS;
        VirtualPad.addVirtualPad(htmlString, cssString);
        // 各ボタンをキーボードのキーと紐付け
        VirtualPad.setupTouchButton('btnUp', KEYBOARD_KEYS.UP); //'ArrowUp');
        VirtualPad.setupTouchButton('btnDown', KEYBOARD_KEYS.DOWN); //'ArrowDown');
        VirtualPad.setupTouchButton('btnLeft', KEYBOARD_KEYS.LEFT); //'ArrowLeft');
        VirtualPad.setupTouchButton('btnRight', KEYBOARD_KEYS.RIGHT); //'ArrowRight');
    }
    static setupTouchButton(buttonId:string, keyName:string) {
        const btn = document.querySelector(`#${buttonId}`) as HTMLElement;
        const _keyName = (keyName.length == 1)? keyName.toUpperCase() : keyName;
        if(btn){
            const keyboard = (engine as Engine).runtime.ioDevices.keyboard;
            // 指が触れた時（PointerEventでマウス・タッチ両対応）
            btn.addEventListener('pointerdown', (e: PointerEvent ) => {
                e.preventDefault(); // 押しっぱなし時のブラウザの変な挙動を防ぐ
                keyboard.pressKey(_keyName);
            });            
            const _stopInput = () => {
                keyboard.releaseKey(_keyName);                
            }
            // 指が触れた時（PointerEventでマウス・タッチ両対応）
            btn.addEventListener('pointerup', _stopInput);
            btn.addEventListener('pointerleave', _stopInput);
        }
    }

    /**
     * 与えたHTML文字列が構文として正しいかをチェックする. 
     * @param htmlString 
     * @returns 
     */
    static isValidHTML( htmlString: string ) : boolean {

        const Parser = new DOMParser();
        
        const doc = Parser.parseFromString(`<root>${htmlString}</root>`, 'text/xml');
        
        const errorNode = doc.querySelector('parsererror');

        // errorNodeがないときはtrue, あるときは false
        return !errorNode;
    }

    /**
     * 与えたCSS文字列が構文として正しいかをチェックする. 
     * @param cssString 
     * @returns 
     */
    static isValidCSS( cssString: string ): boolean {
        try {
            const StyleSheet = new CSSStyleSheet();
            // CSS文字列をパース（解析）する
            StyleSheet.replaceSync(cssString);
            // 解析した結果、有効なルールが1つも存在しない、かつ空文字でもない場合は無効と判定
            // （ブラウザは不正なCSSを無視してスキップするため、ルール数が0になります）
            if (StyleSheet.cssRules.length === 0 && cssString.trim() !== "") {
                return false;
            }
            return true;

        } catch (error) {
            // 例外が起きる(例：構文全体が完全に壊れて解析不能)ときはエラーとします
            return false;
        }
    }
    static addVirtualPad( htmlString: string, cssString: string ) : void {

        if(InputMedia.isCoarse == false ){
            return;
        }
        
        const parentElement: HTMLDivElement = document.querySelector(`#${StageCanvasWrapper}`) as HTMLDivElement;

        if(!parentElement){
            return;
        }

        if( !VirtualPad.isValidHTML(htmlString)) {
            //console.log('Invalid Virtual Pad HTML');
            return;
        }
        if( !VirtualPad.isValidCSS(cssString)) {
            //console.log('Invalid Virtual Pad CSS');
            return;
        }
        parentElement.insertAdjacentHTML('beforeend', htmlString);

        const style = document.createElement('style');
        style.innerHTML = cssString;
        const head = document.getElementsByTagName('head') as HTMLCollection;
        if(head){
            head[0].appendChild(style!);
        }

    }
}