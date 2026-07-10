# Class: EntityBroadCast

Defined in: [src/lib/entity/entity/entityBroadcast.ts:13](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L13)

メッセージ送受信

## Implements

- [`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

## Constructors

### Constructor

> **new EntityBroadCast**(`entity`): `EntityBroadCast`

Defined in: [src/lib/entity/entity/entityBroadcast.ts:22](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L22)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{IEntity}

#### Returns

`EntityBroadCast`

## Methods

### broadcastReceivedKick()

> **broadcastReceivedKick**(`messageId`, ...`args`): `void`

Defined in: [src/lib/entity/entity/entityBroadcast.ts:115](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L115)

#### Parameters

##### messageId

`string`

##### args

...`any`[]

#### Returns

`void`

***

### receiver()

> **receiver**(`messageId`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityBroadcast.ts:76](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L76)

メッセージ受信時のイベント定義セッター

#### Parameters

##### messageId

`string`

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

#### Implementation of

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md).[`receiver`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md#receiver)

***

### send()

> **send**(`messageId`, ...`args`): `void`

Defined in: [src/lib/entity/entity/entityBroadcast.ts:30](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L30)

メッセージを送る

#### Parameters

##### messageId

`string`

##### args

...`any`[]

#### Returns

`void`

#### Implementation of

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md).[`send`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md#send)

***

### sendAndWait()

> **sendAndWait**(`messageId`, ...`args`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBroadcast.ts:42](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBroadcast.ts#L42)

メッセージを送り終わるまで待つ

#### Parameters

##### messageId

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md).[`sendAndWait`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md#sendandwait)
