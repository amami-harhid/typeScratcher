# Class: EntityProxyExt

Defined in: [src/lib/entity/entity/entityProxyExt.ts:9](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L9)

エンティティのプロキシ拡張

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new EntityProxyExt**(`options?`): `EntityProxyExt`

Defined in: node\_modules/@types/node/events.d.ts:54

#### Parameters

##### options?

`EventEmitterOptions`

#### Returns

`EntityProxyExt`

#### Inherited from

`EventEmitter.constructor`

## Properties

### GET\_STOP\_THIS\_SCRIPT\_SWITCH

> `static` **GET\_STOP\_THIS\_SCRIPT\_SWITCH**: `string` = `"getStopThisScriptSwitch"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:19](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L19)

***

### IS\_PROXY\_TEST

> `static` **IS\_PROXY\_TEST**: `string` = `"isProxyTest"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L23)

プロキシテスター

***

### PROP\_STOP\_THIS\_SCRIPT\_SWITCH

> `static` **PROP\_STOP\_THIS\_SCRIPT\_SWITCH**: `string` = `"stopThisScriptSwitch"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:20](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L20)

***

### SET\_STOP\_THIS\_SCRIPT\_SWITCH

> `static` **SET\_STOP\_THIS\_SCRIPT\_SWITCH**: `string` = `"setStopThisScriptSwitch"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:18](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L18)

***

### STOP\_OTHER\_SCRIPTS

> `static` **STOP\_OTHER\_SCRIPTS**: `string` = `"stopOtherScripts"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:15](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L15)

「他のスクリプトを削除する」メソッド名

***

### STOP\_THIS\_SCRIPT\_SWITCH

> `static` **STOP\_THIS\_SCRIPT\_SWITCH**: `string` = `"$stopThisScriptSwitch"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:17](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L17)

「このスクリプトを停止」スイッチの名前

***

### THREAD\_COUNTER

> `static` **THREAD\_COUNTER**: `string` = `"threadCounter"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:13](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L13)

スレッドカウンター

***

### THREAD\_ID

> `static` **THREAD\_ID**: `string` = `"threadId"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:11](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L11)

スレッドＩＤ

***

### THREAD\_NAME

> `static` **THREAD\_NAME**: `string` = `"threadName"`

Defined in: [src/lib/entity/entity/entityProxyExt.ts:21](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L21)

## Methods

### getProxy()

> `static` **getProxy**(`obj`, `callback`): [`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

Defined in: [src/lib/entity/entity/entityProxyExt.ts:27](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityProxyExt.ts#L27)

プロキシの定義

#### Parameters

##### obj

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

##### callback

`CallableFunction`

#### Returns

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)
