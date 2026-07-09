# Interface: IUtils

Defined in: [src/type/util/utils.ts:1](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/util/utils.ts#L1)

## Methods

### randomValue()

> **randomValue**(`min`, `max`): `number`

Defined in: [src/type/util/utils.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/util/utils.ts#L11)

min,max の範囲でランダム値を取得する
min,max 両方とも整数の場合、min,maxを含む整数のランダム値を返す
上記以外の場合は minを含みmaxを含まない範囲で小数値のランダム値を返す。

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`
