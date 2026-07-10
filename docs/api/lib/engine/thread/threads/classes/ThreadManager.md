# Class: ThreadManager

Defined in: [src/lib/engine/thread/threads.ts:68](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L68)

## Constructors

### Constructor

> **new ThreadManager**(): `ThreadManager`

Defined in: [src/lib/engine/thread/threads.ts:76](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L76)

#### Returns

`ThreadManager`

## Accessors

### timer

#### Get Signature

> **get** `static` **timer**(): `number`

Defined in: [src/lib/engine/thread/threads.ts:70](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L70)

##### Returns

`number`

## Methods

### \_interval()

> **\_interval**(`me`, `threadArr`): `Promise`\<`void`\>

Defined in: [src/lib/engine/thread/threads.ts:179](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L179)

#### Parameters

##### me

`ThreadManager`

##### threadArr

[`ThreadObj`](ThreadObj.md)\<`any`\>[]

#### Returns

`Promise`\<`void`\>

***

### add()

> **add**(`threadObj`): `void`

Defined in: [src/lib/engine/thread/threads.ts:80](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L80)

#### Parameters

##### threadObj

[`ThreadObj`](ThreadObj.md)\<`any`\>

#### Returns

`void`

***

### clearAllScripts()

> **clearAllScripts**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:279](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L279)

#### Returns

`void`

***

### interval()

> **interval**(`me`): `Promise`\<`void`\>

Defined in: [src/lib/engine/thread/threads.ts:167](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L167)

#### Parameters

##### me

`ThreadManager`

#### Returns

`Promise`\<`void`\>

***

### intervalStart()

> **intervalStart**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:158](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L158)

#### Returns

`void`

***

### isExist()

> **isExist**(`thread`): `boolean`

Defined in: [src/lib/engine/thread/threads.ts:83](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L83)

#### Parameters

##### thread

[`ThreadObj`](ThreadObj.md)\<`any`\>

#### Returns

`boolean`

***

### registThread()

> **registThread**\<`T`\>(`thread`): `void`

Defined in: [src/lib/engine/thread/threads.ts:341](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L341)

#### Type Parameters

##### T

`T`

#### Parameters

##### thread

[`ThreadObj`](ThreadObj.md)\<`T`\>

#### Returns

`void`

***

### removeByEntityId()

> **removeByEntityId**(`entityId`): `void`

Defined in: [src/lib/engine/thread/threads.ts:91](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L91)

#### Parameters

##### entityId

`string`

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:94](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L94)

#### Returns

`void`

***

### stopAllScripts()

> **stopAllScripts**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:286](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L286)

#### Returns

`void`

***

### stopMarkToNotactive()

> **stopMarkToNotactive**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:317](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L317)

#### Returns

`void`

***

### stopOtherScripts()

> **stopOtherScripts**(`proxy`): `void`

Defined in: [src/lib/engine/thread/threads.ts:252](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L252)

このメソッドを呼び出したスレッド以外を停止する
ただし、停止するスレッドは同じスプライトのものとする
同じスプライトとは、派生したクローンを含める
クローンのスレッド内でこのメソッドを呼び出したときは、
親スプライトのスレッドを停止せずそのクローンの他のスクリプトだけを
停止する。

#### Parameters

##### proxy

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

#### Returns

`void`

***

### stopSounds()

> **stopSounds**(`proxy`): `void`

Defined in: [src/lib/engine/thread/threads.ts:324](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L324)

#### Parameters

##### proxy

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

#### Returns

`void`

***

### stopThisScript()

> **stopThisScript**(`proxy`): `void`

Defined in: [src/lib/engine/thread/threads.ts:227](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L227)

#### Parameters

##### proxy

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

#### Returns

`void`
