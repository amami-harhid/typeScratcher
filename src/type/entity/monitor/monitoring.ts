export interface BaseProxy {
    show: CallableFunction;
    hide: CallableFunction;
    scale : {w: number, h: number};
}

/**
 * 数値プロキシ
 */
export interface NumberProxy extends BaseProxy{
    /** 変数(数値) */
    value: number,
}

/**
 * 文字列プロキシ
 */
export interface StringProxy extends BaseProxy{
    /** 変数(文字列) */
    text: string,
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
