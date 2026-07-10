# Class: StageEvent

Defined in: [src/lib/entity/stage/stageEvent.ts:7](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/stageEvent.ts#L7)

Stage Event(イベント)

## Extends

- [`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md)

## Implements

- [`IStageEvent`](../../../../../type/entity/stage/IStageEvent/type-aliases/IStageEvent.md)

## Constructors

### Constructor

> **new StageEvent**(`entity`): `StageEvent`

Defined in: [src/lib/entity/stage/stageEvent.ts:12](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/stageEvent.ts#L12)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageEvent`

#### Overrides

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`constructor`](../../../entity/entityEvent/classes/EntityEvent.md#constructor)

## Accessors

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:52](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L52)

BroadCast

##### Returns

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`Broadcast`](../../../entity/entityEvent/classes/EntityEvent.md#broadcast)

***

### backdropEventFuncArray

#### Get Signature

> **get** `static` **backdropEventFuncArray**(): [`BACKDROP_EVENT_ELEMENT`](../../../entity/entityEvent/type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

Defined in: [src/lib/entity/entity/entityEvent.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L35)

背景切替イベント配列

##### Returns

[`BACKDROP_EVENT_ELEMENT`](../../../entity/entityEvent/type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`backdropEventFuncArray`](../../../entity/entityEvent/classes/EntityEvent.md#backdropeventfuncarray)

## Methods

### backdropEventKick()

> **backdropEventKick**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:248](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L248)

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`backdropEventKick`](../../../entity/entityEvent/classes/EntityEvent.md#backdropeventkick)

***

### backdropSwitcher()

> **backdropSwitcher**(`backdrop`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:222](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L222)

背景が〇〇になったときのイベントセッターを返す

#### Parameters

##### backdrop

[`IImage`](../../../../../type/image/interfaces/IImage.md)

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

`IStageEvent.backdropSwitcher`

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`backdropSwitcher`](../../../entity/entityEvent/classes/EntityEvent.md#backdropswitcher)

***

### clicker()

> **clicker**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:162](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L162)

クリックイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

`IStageEvent.clicker`

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`clicker`](../../../entity/entityEvent/classes/EntityEvent.md#clicker)

***

### clickEventerKick()

> **clickEventerKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:170](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L170)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`clickEventerKick`](../../../entity/entityEvent/classes/EntityEvent.md#clickeventerkick)

***

### flagPresser()

> **flagPresser**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:60](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L60)

旗が押されたときのイベントセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

`IStageEvent.flagPresser`

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`flagPresser`](../../../entity/entityEvent/classes/EntityEvent.md#flagpresser)

***

### flagPresserKick()

> **flagPresserKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:86](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L86)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`flagPresserKick`](../../../entity/entityEvent/classes/EntityEvent.md#flagpresserkick)

***

### keyPresser()

> **keyPresser**(`key`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:107](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L107)

キー押下イベントのセッターを返す

#### Parameters

##### key

`string`

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

`IStageEvent.keyPresser`

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`keyPresser`](../../../entity/entityEvent/classes/EntityEvent.md#keypresser)

***

### keyPresserKick()

> **keyPresserKick**(`key`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:149](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEvent.ts#L149)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`keyPresserKick`](../../../entity/entityEvent/classes/EntityEvent.md#keypresserkick)
