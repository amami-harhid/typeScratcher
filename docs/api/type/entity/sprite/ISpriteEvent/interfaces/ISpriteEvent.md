# Interface: ISpriteEvent

Defined in: [src/type/entity/sprite/ISpriteEvent.ts:5](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/sprite/ISpriteEvent.ts#L5)

Sprite Event(イベント)

## Extends

- [`IEntityEvent`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md)

## Methods

### backdropSwitcher()

> **backdropSwitcher**(`backdrop`): [`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:33](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityEvent.ts#L33)

背景が〇〇になったときのイベントセッターを返す

#### Parameters

##### backdrop

[`IImage`](../../../../image/interfaces/IImage.md)

#### Returns

[`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Inherited from

[`IEntityEvent`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md).[`backdropSwitcher`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md#backdropswitcher)

***

### clicker()

> **clicker**(): [`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:27](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityEvent.ts#L27)

クリックイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Inherited from

[`IEntityEvent`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md).[`clicker`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md#clicker)

***

### cloned()

> **cloned**(): [`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/type/entity/sprite/ISpriteEvent.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/sprite/ISpriteEvent.ts#L11)

クローンされたときイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

***

### flagPresser()

> **flagPresser**(): [`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityEvent.ts:14](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityEvent.ts#L14)

旗が押されたイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Inherited from

[`IEntityEvent`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md).[`flagPresser`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md#flagpresser)

***

### keyPresser()

> **keyPresser**(`key`): `object`

Defined in: [src/type/entity/entity/IEntityEvent.ts:20](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityEvent.ts#L20)

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

#### Inherited from

[`IEntityEvent`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md).[`keyPresser`](../../../entity/IEntityEvent/interfaces/IEntityEvent.md#keypresser)
