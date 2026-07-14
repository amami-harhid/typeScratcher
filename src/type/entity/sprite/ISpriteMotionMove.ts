import type { TPositionArray } from '../../common/typeCommon';
import type { ISprite } from '.';

/**
 * スプライトの動き（動かす）
 */
export interface ISpriteMotionMove {
    /**
     * ステップ数分、進ませる
     * @param steps {number} - ステップ数
     */
    steps(steps: number): void;
    /**
     * 指定座標へ移動させる
     * @param pos number[] - [X座標,Y座標]
     */
    to( pos: TPositionArray ): void;

    /**
     * もし端に振れたら跳ね返る
     */
    ifOnEdgeBounce(): void;
    /**
     * ステージ上のどこかに移動させる
     */
    toRandom(): void;
    /**
     * マウスカーソルの位置へ移動させる
     */
    toMouse() : void;
    /**
     * 指定したスプライトの位置へ移動させる
     * @param target {Sprite} - 指定スプライト
     */
    toSprite(target: ISprite) : void;
    /**
     * 指定秒数かけて指定座標へ移動させる
     * @param sec {number} - 秒数
     * @param pos number[] - [X座標,Y座標]
     */
    glideTo(sec:number, pos: TPositionArray): Promise<void>;

    /**
     * 指定秒数かけてランダムな座標位置へ移動させる
     * @param sec {number} - 秒数
     */
    glideToRandom(sec:number): Promise<void>;

    /**
     * 指定秒数かけてマウスポインター座標へ移動させる
     * @param sec {number} - 秒数
     */
    glideToMouse(sec:number): Promise<void>;

};