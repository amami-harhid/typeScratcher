import type { TPositionArray } from '../../common/typeCommon';
import type { ISprite } from '.';

/**
 * スプライトの動き（動かす）
 */
export interface ISpriteMotionMove {
    /**
     * move for the specified number
     * 
     * ---
     * 指定した数だけ進める
     * 
     * @param steps {number} 
     */
    steps(steps: number): void;
    
    /**
     * Move to the specified coordinates.
     * 
     * ---
     * 指定座標へ移動させる
     * 
     * @param pos number[] - coordinates(X,Y)
     */
    to( pos: TPositionArray ): void;

    /**
     * If it reaches the edge, it will bounce.
     * 
     * ---
     * もし端に着いたら跳ね返る
     */
    ifOnEdgeBounce(): void;

    /**
     * Move it to a location somewhere on the stage.
     * 
     * ---
     * ステージ上のどこかに移動させる
     */
    toRandom(): void;

    /**
     * Move to the mouse cursor position.
     * 
     * ---
     * マウスカーソルの位置へ移動させる
     */
    toMouse() : void;

    /**
     * Move to the specified sprite's position.
     * 
     * ---
     * 指定したスプライトの位置へ移動させる
     * 
     * @param target {Sprite} - target sprite
     */
    toSprite(target: ISprite) : void;

    /**
     * Move to the specified coordinates over the specified number of seconds.
     * 
     * ---
     * 指定秒数かけて指定座標へ移動させる
     * 
     * @param sec {number} - seconds
     * @param pos number[] - coordinates
     */
    glideTo(sec:number, pos: TPositionArray): Promise<void>;

    /**
     * Move to a random coordinate position over a specified number of seconds.
     * 
     * ---
     * 指定秒数かけてランダムな座標位置へ移動させる
     * 
     * @param sec {number} - seconds
     */
    glideToRandom(sec:number): Promise<void>;

    /**
     * Move to the mouse pointer coordinates over a specified number of seconds.
     * 
     * ---
     * 指定秒数かけてマウスポインター座標へ移動させる
     * 
     * @param sec {number} - seconds
     */
    glideToMouse(sec:number): Promise<void>;

};