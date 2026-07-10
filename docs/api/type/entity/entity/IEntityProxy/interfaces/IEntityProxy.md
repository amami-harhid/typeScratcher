# Interface: IEntityProxy

Defined in: [src/type/entity/entity/IEntityProxy.ts:5](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L5)

## Extends

- [`IEntity`](../../interfaces/IEntity.md)

## Properties

### Broadcast

> `readonly` **Broadcast**: [`IEntityBroadCast`](../../IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/type/entity/entity/index.ts:9](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/index.ts#L9)

メッセージ送受信

#### Inherited from

[`IEntity`](../../interfaces/IEntity.md).[`Broadcast`](../../interfaces/IEntity.md#broadcast)

***

### entity

> **entity**: [`IEntity`](../../interfaces/IEntity.md)

Defined in: [src/type/entity/entity/IEntityProxy.ts:8](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L8)

***

### id

> `readonly` **id**: `string`

Defined in: [src/type/entity/entity/IEntityProxy.ts:7](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L7)

***

### isProxyTest

> `readonly` **isProxyTest**: `boolean`

Defined in: [src/type/entity/entity/IEntityProxy.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L6)

***

### Sound

> `readonly` **Sound**: [`IEntitySound`](../../IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/type/entity/entity/index.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/index.ts#L13)

サウンド

#### Inherited from

[`IEntity`](../../interfaces/IEntity.md).[`Sound`](../../interfaces/IEntity.md#sound)

***

### Speech

> `readonly` **Speech**: [`IEntitySpeech`](../../IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/type/entity/entity/index.ts:17](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/index.ts#L17)

スピーチ

#### Inherited from

[`IEntity`](../../interfaces/IEntity.md).[`Speech`](../../interfaces/IEntity.md#speech)

***

### threadCounter

> **threadCounter**: `number`

Defined in: [src/type/entity/entity/IEntityProxy.ts:11](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L11)

***

### threadId

> **threadId**: `string`

Defined in: [src/type/entity/entity/IEntityProxy.ts:9](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L9)

***

### threadName

> **threadName**: `string`

Defined in: [src/type/entity/entity/IEntityProxy.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L10)

## Methods

### getStopThisScriptSwitch()

> **getStopThisScriptSwitch**(): `boolean`

Defined in: [src/type/entity/entity/IEntityProxy.ts:15](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L15)

このスクリプトを止めるスイッチ

#### Returns

`boolean`

***

### setStopThisScriptSwitch()

> **setStopThisScriptSwitch**(`stop`): `void`

Defined in: [src/type/entity/entity/IEntityProxy.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L13)

このスクリプトを止めるスイッチを設定する

#### Parameters

##### stop

`boolean`

#### Returns

`void`

***

### throwForceStopThisScripts()

> **throwForceStopThisScripts**(): `void`

Defined in: [src/type/entity/entity/IEntityProxy.ts:17](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityProxy.ts#L17)

強制終了

#### Returns

`void`
