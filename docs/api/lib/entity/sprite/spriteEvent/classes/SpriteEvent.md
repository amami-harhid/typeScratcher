# Class: SpriteEvent

Defined in: [src/lib/entity/sprite/spriteEvent.ts:10](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteEvent.ts#L10)

Sprite Event(イベント)

## Extends

- [`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md)

## Implements

- [`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md)

## Constructors

### Constructor

> **new SpriteEvent**(`entity`): `SpriteEvent`

Defined in: [src/lib/entity/sprite/spriteEvent.ts:15](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteEvent.ts#L15)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteEvent`

#### Overrides

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`constructor`](../../../entity/entityEvent/classes/EntityEvent.md#constructor)

## Accessors

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:52](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L52)

BroadCast

##### Returns

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`Broadcast`](../../../entity/entityEvent/classes/EntityEvent.md#broadcast)

***

### backdropEventFuncArray

#### Get Signature

> **get** `static` **backdropEventFuncArray**(): [`BACKDROP_EVENT_ELEMENT`](../../../entity/entityEvent/type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

Defined in: [src/lib/entity/entity/entityEvent.ts:35](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L35)

背景切替イベント配列

##### Returns

[`BACKDROP_EVENT_ELEMENT`](../../../entity/entityEvent/type-aliases/BACKDROP_EVENT_ELEMENT.md)[]

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`backdropEventFuncArray`](../../../entity/entityEvent/classes/EntityEvent.md#backdropeventfuncarray)

## Methods

### backdropEventKick()

> **backdropEventKick**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:248](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L248)

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

Defined in: [src/lib/entity/entity/entityEvent.ts:222](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L222)

背景が〇〇になったときのイベントセッターを返す

#### Parameters

##### backdrop

[`IImage`](../../../../../type/image/interfaces/IImage.md)

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md).[`backdropSwitcher`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md#backdropswitcher)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`backdropSwitcher`](../../../entity/entityEvent/classes/EntityEvent.md#backdropswitcher)

***

### clicker()

> **clicker**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:162](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L162)

クリックイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md).[`clicker`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md#clicker)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`clicker`](../../../entity/entityEvent/classes/EntityEvent.md#clicker)

***

### clickEventerKick()

> **clickEventerKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:170](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L170)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`clickEventerKick`](../../../entity/entityEvent/classes/EntityEvent.md#clickeventerkick)

***

### cloned()

> **cloned**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/sprite/spriteEvent.ts:23](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteEvent.ts#L23)

クローンされたときイベントのセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md).[`cloned`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md#cloned)

***

### flagPresser()

> **flagPresser**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:60](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L60)

旗が押されたときのイベントセッターを返す

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md).[`flagPresser`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md#flagpresser)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`flagPresser`](../../../entity/entityEvent/classes/EntityEvent.md#flagpresser)

***

### flagPresserKick()

> **flagPresserKick**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:86](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L86)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`flagPresserKick`](../../../entity/entityEvent/classes/EntityEvent.md#flagpresserkick)

***

### keyPresser()

> **keyPresser**(`key`): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/entity/entityEvent.ts:107](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L107)

キー押下イベントのセッターを返す

#### Parameters

##### key

`string`

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

イベントセッター

#### Implementation of

[`ISpriteEvent`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md).[`keyPresser`](../../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md#keypresser)

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`keyPresser`](../../../entity/entityEvent/classes/EntityEvent.md#keypresser)

***

### keyPresserKick()

> **keyPresserKick**(`key`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityEvent.ts:149](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityEvent.ts#L149)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityEvent`](../../../entity/entityEvent/classes/EntityEvent.md).[`keyPresserKick`](../../../entity/entityEvent/classes/EntityEvent.md#keypresserkick)
