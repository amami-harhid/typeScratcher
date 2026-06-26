/**
 * モニターする変数の型
 */
export type Monitoring = {
    /** 変数値 */
    value: number | string,
    /** モニター表示ラベル */
    label: string,

    callback?: CallableFunction;
}

/**
 * モニターする変数を渡すための型
 */
export type MonitoringVars = {
    [key : string] : Monitoring,
}