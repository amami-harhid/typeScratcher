# Class: EntityEvent

Defined in: [src/lib/entity/entity/entityEvent.ts:27](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L27)

イベント

## Extended by

- [`SpriteEvent`](../../../sprite/spriteEvent/classes/SpriteEvent.md)
- [`StageEvent`](../../../stage/stageEvent/classes/StageEvent.md)

## Implements

- [`IEntityEvent`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md)

## Constructors

### Constructor

> **new EntityEvent**(`entity`): `EntityEvent`

Defined in: [src/lib/entity/entity/entityEvent.ts:45](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L45)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{Entity}

#### Returns

`EntityEvent`

## Accessors

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:52](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L52)

BroadCast

##### Returns

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

***

### backdropEventFuncArray

#### Get Signature

> **get** `static` **backdropEventFuncArray**(): [`BACKDROP_EVENT_ELEMENT`](../type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

Defined in: [src/lib/entity/entity/entityEvent.ts:35](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L35)

背景切替イベント配列

##### Returns

[`BACKDROP_EVENT_ELEMENT`](../type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

## Methods

### backdropEventKick()

> **backdropEventKick**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:248](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L248)

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

***

### backdropSwitcher()

> **backdropSwitcher**(`backdrop`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:222](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L222)

背景が〇〇になったときのイベントセッターを返す

#### Parameters

##### backdrop

[`IImage`](../../../../../type/image/interfaces/IImage.md)

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`IEntityEvent`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md).[`backdropSwitcher`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md#backdropswitcher)

***

### clicker()

> **clicker**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:162](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L162)

クリックイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`IEntityEvent`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md).[`clicker`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md#clicker)

***

### clickEventerKick()

> **clickEventerKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:170](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L170)

#### Returns

`Promise`\<`void`\>

***

### flagPresser()

> **flagPresser**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:60](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L60)

旗が押されたときのイベントセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`IEntityEvent`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md).[`flagPresser`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md#flagpresser)

***

### flagPresserKick()

> **flagPresserKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:86](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L86)

#### Returns

`Promise`\<`void`\>

***

### keyPresser()

> **keyPresser**(`key`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:107](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L107)

キー押下イベントのセッターを返す

#### Parameters

##### key

`string`

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`IEntityEvent`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md).[`keyPresser`](../../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md#keypresser)

***

### keyPresserKick()

> **keyPresserKick**(`key`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:149](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEvent.ts#L149)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>
