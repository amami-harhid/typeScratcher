/**
 * Loop
 */
export class Loop {
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