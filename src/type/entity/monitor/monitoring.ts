/**
 * 数値プロキシ
 */
export type NumberProxy = {
    /** 変数(数値) */
    value: number,
    show: CallableFunction;
    hide: CallableFunction;
}

/**
 * 文字列プロキシ
 */
export type StringProxy = {
    /** 変数(文字列) */
    text: string,
    show: CallableFunction;
    hide: CallableFunction;
}

/**
 * モニターする変数の型
 */
export interface MonitoringNumber extends NumberProxy {
    callback?: CallableFunction;
}

/**
 * モニターする変数の型
 */
export interface MonitoringString extends StringProxy {
    callback?: CallableFunction;
}


/**
 * モニターする変数を渡すための型
 */
export type MonitoringVars = {
    [key : string] : MonitoringNumber | MonitoringString,
}