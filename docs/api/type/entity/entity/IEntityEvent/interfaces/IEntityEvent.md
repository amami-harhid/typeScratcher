# Interface: IEntityEvent

Defined in: [src/type/entity/entity/IEntityEvent.ts:8](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityEvent.ts#L8)

イベント

## Extended by

- [`ISpriteEvent`](../../../sprite/ISpriteEvent/interfaces/ISpriteEvent.md)

## Methods

### backdropSwitcher()

> **backdropSwitcher**(`backdrop`): [`EventFunctionSetter`](EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:33](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityEvent.ts#L33)

背景が〇〇になったときのイベントセッターを返す

#### Parameters

##### backdrop

[`IImage`](../../../../image/interfaces/IImage.md)

#### Returns

[`EventFunctionSetter`](EventFunctionSetter.md)

イベントセッター

***

### clicker()

> **clicker**(): [`EventFunctionSetter`](EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityEvent.ts#L27)

クリックイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](EventFunctionSetter.md)

イベントセッター

***

### flagPresser()

> **flagPresser**(): [`EventFunctionSetter`](EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:14](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityEvent.ts#L14)

旗が押されたイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](EventFunctionSetter.md)

イベントセッター

***

### keyPresser()

> **keyPresser**(`key`): `object`

Defined in: [src/type/entity/entity/IEntityEvent.ts:20](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityEvent.ts#L20)

キー押下イベントのセッターを返す

#### Parameters

##### key

`string`

キーの指定

#### Returns

`object`

イベントセッター

##### func

###### Set Signature

> **set** **func**(`func`): `void`

###### Parameters

###### func

`CallableFunction`

###### Returns

`void`
