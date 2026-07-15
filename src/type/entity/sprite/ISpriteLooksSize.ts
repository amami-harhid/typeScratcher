import type { TBoundsEx, TScaleArr, TScaleCanEmpty } from "../../common/typeCommon";
import { ISpriteLooksSizeScale } from "./ISpriteLooksSizeScale";

/**
 * スプライトのサイズ
 */
export interface ISpriteLooksSize {

    /**
     * 横サイズ
     */
    //get w () : number;
    /**
     * 横サイズ
     */
    //set w (width: number);
    /**
     * 縦サイズ
     */
    //get h () : number;
    /**
     * 縦サイズ
     */
    //set h (height: number);
    /**
     * 縦横サイズ
     */
    get scale() : ISpriteLooksSizeScale;
    /**
     * 縦横サイズ
     */
    set scale(scale:TScaleArr);

    /** 
     * 大きさ 
     * 横/縦の大きさが違うときは小さいほうを返す 
     */
    //get size(): number;

    /** 
     * 大きさ
     * 横/縦に同じ大きさを設定する 
     */
    //set size(size:number);

    /**
     * 自分自身の縦横表示サイズを得る
     * @returns TBounds
     * ```ts
     *  // スプライトの表示サイズを得る
     *  const {w,h} = this.Looks.Size.drawingSize;
     * ```
     */
    get drawingSize() : TBoundsEx;
    
    /**
     * 表示サイズを変える(ピクセルサイズ)
     */
    set drawingSize( size: TScaleCanEmpty);
}
