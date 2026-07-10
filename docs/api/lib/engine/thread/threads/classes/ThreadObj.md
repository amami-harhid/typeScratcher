# Class: ThreadObj\<T\>

Defined in: [src/lib/engine/thread/threads.ts:346](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L346)

## Extends

- `EventEmitter`

## Type Parameters

### T

`T`

## Implements

- [`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md)\<`any`\>

## Constructors

### Constructor

> **new ThreadObj**\<`T`\>(`entity`, `foreverExist?`): `ThreadObj`\<`T`\>

Defined in: [src/lib/engine/thread/threads.ts:361](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L361)

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

##### foreverExist?

`boolean` = `false`

#### Returns

`ThreadObj`\<`T`\>

#### Overrides

`EventEmitter.constructor`

## Properties

### done

> **done**: `boolean` = `false`

Defined in: [src/lib/engine/thread/threads.ts:349](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L349)

完了フラグ

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`done`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#done)

***

### entityId

> **entityId**: `string`

Defined in: [src/lib/engine/thread/threads.ts:354](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L354)

エンティティID

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`entityId`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#entityid)

***

### status

> **status**: `"INITIALIZING"` \| `"YIELD"` \| `"RUNNING"` \| `"COMPLETED"` = `ThreadStatus.INITIALIZING`

Defined in: [src/lib/engine/thread/threads.ts:350](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L350)

ステータス

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`status`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#status)

***

### threadId

> **threadId**: `string`

Defined in: [src/lib/engine/thread/threads.ts:353](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L353)

スレッドID

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`threadId`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#threadid)

## Accessors

### entity

#### Get Signature

> **get** **entity**(): [`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

Defined in: [src/lib/engine/thread/threads.ts:425](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L425)

エンティティ

##### Returns

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

エンティティ

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`entity`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#entity)

***

### foreverExist

#### Get Signature

> **get** **foreverExist**(): `boolean`

Defined in: [src/lib/engine/thread/threads.ts:436](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L436)

##### Returns

`boolean`

***

### isDeadThread

#### Get Signature

> **get** **isDeadThread**(): `boolean`

Defined in: [src/lib/engine/thread/threads.ts:379](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L379)

##### Returns

`boolean`

#### Set Signature

> **set** **isDeadThread**(`isDead`): `void`

Defined in: [src/lib/engine/thread/threads.ts:382](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L382)

##### Parameters

###### isDead

`boolean`

##### Returns

`void`

***

### isStarted

#### Get Signature

> **get** **isStarted**(): `boolean`

Defined in: [src/lib/engine/thread/threads.ts:442](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L442)

開始フラグ

##### Returns

`boolean`

#### Set Signature

> **set** **isStarted**(`started`): `void`

Defined in: [src/lib/engine/thread/threads.ts:445](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L445)

開始フラグ

##### Parameters

###### started

`boolean`

##### Returns

`void`

開始フラグ

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`isStarted`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#isstarted)

***

### originalF

#### Get Signature

> **get** **originalF**(): `CallableFunction`

Defined in: [src/lib/engine/thread/threads.ts:433](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L433)

##### Returns

`CallableFunction`

***

### proxy

#### Get Signature

> **get** **proxy**(): [`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

Defined in: [src/lib/engine/thread/threads.ts:429](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L429)

エンティティプロキシ

##### Returns

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

エンティティプロキシ

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`proxy`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#proxy)

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:372](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L372)

#### Returns

`void`

***

### forceExit()

> **forceExit**(): `void`

Defined in: [src/lib/engine/thread/threads.ts:448](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L448)

#### Returns

`void`

***

### genProxy()

> **genProxy**(): [`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

Defined in: [src/lib/engine/thread/threads.ts:385](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L385)

プロキシ生成

#### Returns

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`genProxy`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#genproxy)

***

### next()

> **next**(): `Promise`\<`void`\>

Defined in: [src/lib/engine/thread/threads.ts:453](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L453)

#### Returns

`Promise`\<`void`\>

***

### reset()

> **reset**(`entity`, `func`): `void`

Defined in: [src/lib/engine/thread/threads.ts:395](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L395)

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

##### func

`CallableFunction`

#### Returns

`void`

***

### setFunc()

> **setFunc**(`func`, ...`args`): `void`

Defined in: [src/lib/engine/thread/threads.ts:400](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/engine/thread/threads.ts#L400)

イベント関数を設定する

#### Parameters

##### func

`CallableFunction`

##### args

...`T`[]

#### Returns

`void`

#### Implementation of

[`IThreadObj`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md).[`setFunc`](../../../../../type/engine/thread/threads/interfaces/IThreadObj.md#setfunc)
