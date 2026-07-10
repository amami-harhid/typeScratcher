# Interface: IUtils

Defined in: [src/type/util/utils.ts:1](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/util/utils.ts#L1)

## Methods

### randomValue()

> **randomValue**(`min`, `max`): `number`

Defined in: [src/type/util/utils.ts:11](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/util/utils.ts#L11)

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
