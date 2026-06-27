export interface BaseNumberProxy {
    /** 変数(数値) */
    value: number,
    show: CallableFunction;
    hide: CallableFunction;
}
export interface BaseStringProxy {
    /** 変数(文字列) */
    text: string,
    show: CallableFunction;
    hide: CallableFunction;
}

/**
 * 数値プロキシ
 */
export interface NumberProxy extends BaseNumberProxy{
    scale : {w: number, h: number};
}

/**
 * 文字列プロキシ
 */
export interface StringProxy extends BaseStringProxy{
    scale : {w: number, h: number};
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