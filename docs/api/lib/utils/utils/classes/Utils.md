# Class: Utils

Defined in: [src/lib/utils/utils.ts:7](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L7)

## Constructors

### Constructor

> **new Utils**(): `Utils`

#### Returns

`Utils`

## Methods

### distance()

> `static` **distance**(`obj1`, `obj2`): `number`

Defined in: [src/lib/utils/utils.ts:14](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L14)

距離を計算する

#### Parameters

##### obj1

[`TPosition`](../../../../type/common/typeCommon/type-aliases/TPosition.md)

##### obj2

[`TPosition`](../../../../type/common/typeCommon/type-aliases/TPosition.md)

#### Returns

`number`

distance

***

### generateUUID()

> `static` **generateUUID**(): `string`

Defined in: [src/lib/utils/utils.ts:161](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L161)

#### Returns

`string`

***

### isInteger()

> `static` **isInteger**(`val`): `boolean`

Defined in: [src/lib/utils/utils.ts:79](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L79)

#### Parameters

##### val

`any`

#### Returns

`boolean`

***

### isNumber()

> `static` **isNumber**(`val`): `boolean`

Defined in: [src/lib/utils/utils.ts:73](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L73)

#### Parameters

##### val

`any`

#### Returns

`boolean`

***

### mapDeepCopy()

> `static` **mapDeepCopy**(`src`, `dist`, `defaultValue`): `any`

Defined in: [src/lib/utils/utils.ts:137](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L137)

#### Parameters

##### src

`Map`\<`string`, `object`\>

##### dist

`Map`\<`string`, `object`\>

##### defaultValue

`object`

#### Returns

`any`

***

### randomizeInRange()

> `static` **randomizeInRange**(`min`, `max`, `forceAsDecimal?`): `number`

Defined in: [src/lib/utils/utils.ts:52](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L52)

min,max の範囲でランダム値を取得する
min,max 両方とも整数の場合、min,maxを含む整数のランダム値を返す
上記以外の場合は minを含みmaxを含まない範囲で小数値のランダム値を返す。
min,max のどちらかが数値でない場合は 0 を返す

#### Parameters

##### min

`number`

##### max

`number`

##### forceAsDecimal?

`boolean` = `false`

True時には強制的に小数値として扱う。省略時はFalse。

#### Returns

`number`

***

### randomValue()

> `static` **randomValue**(`min`, `max`): `number`

Defined in: [src/lib/utils/utils.ts:38](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L38)

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

***

### varNameValues()

> `static` **varNameValues**(`vars`): \[`string`, `any`\]

Defined in: [src/lib/utils/utils.ts:185](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L185)

変数定義の名称を返す

#### Parameters

##### vars

`Object`

{ 変数 }

#### Returns

\[`string`, `any`\]

変数名の文字列

***

### wait()

> `static` **wait**(`milliSecond?`): `Promise`\<`void`\>

Defined in: [src/lib/utils/utils.ts:95](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L95)

#### Parameters

##### milliSecond?

`number` = `0`

#### Returns

`Promise`\<`void`\>

***

### waitUntil()

> `static` **waitUntil**(`_condition`, `_pace`, `_bind`): `Promise`\<`void`\>

Defined in: [src/lib/utils/utils.ts:105](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/utils.ts#L105)

#### Parameters

##### \_condition

`CallableFunction`

##### \_pace

`number`

##### \_bind

[`Entity`](../../../entity/entity/classes/Entity.md)

#### Returns

`Promise`\<`void`\>
