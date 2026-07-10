# Class: Var

Defined in: [src/lib/entity/monitor/var.ts:9](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/monitor/var.ts#L9)

Var

const counter = Var.from({value: 5}); // 初期値 5 (数値型)を定義

## Constructors

### Constructor

> **new Var**(): `Var`

#### Returns

`Var`

## Methods

### number()

> `static` **number**(`value`): [`NumberProxy`](../../../../../type/entity/monitor/monitoring/interfaces/NumberProxy.md)

Defined in: [src/lib/entity/monitor/var.ts:11](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/monitor/var.ts#L11)

#### Parameters

##### value

`number`

#### Returns

[`NumberProxy`](../../../../../type/entity/monitor/monitoring/interfaces/NumberProxy.md)

***

### string()

> `static` **string**(`text`): [`StringProxy`](../../../../../type/entity/monitor/monitoring/interfaces/StringProxy.md)

Defined in: [src/lib/entity/monitor/var.ts:37](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/monitor/var.ts#L37)

#### Parameters

##### text

`string`

#### Returns

[`StringProxy`](../../../../../type/entity/monitor/monitoring/interfaces/StringProxy.md)
