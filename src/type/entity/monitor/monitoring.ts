/**
 * モニターする変数の型
 */
export type MonitoringNumber = {
    /** 変数(数値) */
    value: number,
    /** モニター表示ラベル */
    label?: string,

    callback?: CallableFunction;
}

export type MonitoringString = {
    /** 変数(文字列) */
    text: string,
    /** モニター表示ラベル */
    label?: string,

    callback?: CallableFunction;
}


/**
 * モニターする変数を渡すための型
 */
export type MonitoringVars = {
    [key : string] : MonitoringNumber | MonitoringString,
}