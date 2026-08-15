export interface SVirtualPad  {

    /** 矢印タイプのバーチャルパッド */
    addArrorTypePad(): void;
    /** バーチャルパッドボタンの紐づけ */
    setupTouchButton(buttonId:string, keyName:string):void;
    /**
     * バーチャルパッドを追加する
     * @param htmlStringVirtualPad 
     * @param cssStringVirtualPad
     */
    addVirtualPad( htmlStringVirtualPad: string, cssStringVirtualPad: string ) : void 
}