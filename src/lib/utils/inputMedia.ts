export const InputMedia = class {
    /**
     * タッチパネルなどの入力の正確性が低い（粗い）デバイスの判定
     * 
     * @returns 
     */
    static get isCoarse () : boolean {

        // 主要入力を判定する
        const isCoarse = window.matchMedia('(pointer: coarse)').matches;
        if( isCoarse === true ) {
            // タッチパネルなどの入力の正確性が低い（粗い）デバイス(スマホ・タブレット)
            return true;
        }
        // マウスなどの入力の正確性が高い(細かい)デバイス(PCなど)
        return false;
    }
}