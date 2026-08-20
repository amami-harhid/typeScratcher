/**
 * Loop
 */
const _Loop = class {
    /**
     * 繰り返し回数のイテレーター(Generator)
     * @param n {number} - 繰り返し回数
     * @param base {number} - 開始する数
     */
    static *Iterator(n:number, base:number = 0): Generator<number> {
        for(let i=base; i<(base+n); i++){
            yield(i);
        }
    }
};
export interface SLoop {
    /**
     * 繰り返し回数のイテレーター(Generator)
     * @param n {number} - 繰り返し回数
     * @param base {number} - 開始する数
     */
    Iterator(n:number, base?:number): Generator<number>;
}
export const Loop : SLoop = _Loop;