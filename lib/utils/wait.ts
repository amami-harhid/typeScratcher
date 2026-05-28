/**
 * Wait
 */
export type ConditionFunction = () => boolean;

const Conditions = {
    WHILE: 'WHILE',
    UNTIL: 'UNTIL',

} as const;

type ConditionsType = keyof typeof Conditions;
const _condision = (type: ConditionsType, conditionFn:ConditionFunction, interval: number, timeout: number) => {
    return new Promise<void>((resolve, reject) => {
        const start = Date.now();
        const timer = setInterval(() => {
            try {
                if( (type== Conditions.UNTIL && conditionFn() === true) || (type==Conditions.WHILE && conditionFn()===false)) {
                    clearInterval(timer);
                    resolve();
                }else if (timeout > 0 && Date.now() - start >= timeout) {
                    clearInterval(timer);
                    reject(new Error('Timeout waiting for condition'));
                }
            }catch(err){
                clearInterval(timer);
                reject(err);
            }
        }, interval);
    });
}
export const untilCondition = (conditionFn:ConditionFunction, interval=1/30, timeout=5000) => {
    return _condision(Conditions.UNTIL, conditionFn, interval, timeout);
}
export const whileCondition = (conditionFn:ConditionFunction, interval=1/30, timeout=5000) => {
    return _condision(Conditions.WHILE, conditionFn, interval, timeout);
}
